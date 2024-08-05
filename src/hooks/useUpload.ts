/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFilesStore } from "@/store/FileStore";
import axios from "axios";
import { useCallback, useState } from "react";

export const useUpload = () => {
  const [fl, setFileId] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const fileStore = useFilesStore();
  const [isFileError, setFileError] = useState<boolean>(false);
  const Upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
  };

  const Submit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!file) {
        alert("Please select a file to upload");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      await axios
        .post("http://localhost:5000/api/Upload", formData, {
          headers: {
            Accept: "/",
            "Content-Type": "'multipart/form-data'",
          },
        })
        .then((res) => {
          setFileId(res.data["id"]);
          fileStore.setId(fl);
        })
        .catch((err) => {
          setFileError(true);
          setTimeout(() => setFileError(false), 3000);
        });
    },
    [file, fileStore, fl]
  );

  return { fl, Submit, Upload, isFileError };
};
