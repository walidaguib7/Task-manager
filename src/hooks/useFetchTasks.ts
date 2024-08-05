import axios from "axios";
import { useQuery } from "react-query";

export const useFetchAll = (page: number, task: string) => {
  const userId = sessionStorage.getItem("userId");
  const limit = 8;

  return useQuery(
    ["All", task, page],
    async () => {
      if (task == "") {
        return await axios.get(
          `http://localhost:5176/api/Tasks/${userId}?PageNumber=${page}?Limit=${limit}`
        );
      } else {
        return await axios.get(
          `http://localhost:5176/api/Tasks/${userId}?Name=${task}?PageNumber=${page}?Limit=${limit}`
        );
      }
    },
    { keepPreviousData: true }
  );
};
