import { useQuery } from "react-query";
import axios from "axios";

export const useFetchByStatus = (page: number, task: string, label: string) => {
  const userId = sessionStorage.getItem("id");
  const limit = 8;
  return useQuery(
    [label, task, page],
    async () => {
      if (task == "") {
        return await axios.get(
          `http://localhost:5176/api/tasks/${userId}?PageNumber=${page}?Limit=${limit}`
        );
      } else {
        return await axios.get(
          `http://localhost:5176/api/tasks/${userId}?Name=${task}?PageNumber=${page}?Limit=${limit}?Status=${label}`
        );
      }
    },
    { keepPreviousData: true }
  );
};
