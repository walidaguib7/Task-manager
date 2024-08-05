/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import "./style.css";
import { useQuery } from "react-query";
import TaskItem, { TaskType } from "./TaskItem";

const Tasks = () => {
  const userId = sessionStorage.getItem("userId");
  const { data } = useQuery("tasks", async () => {
    return await axios.get(`http://localhost:5176/api/Tasks/${userId}`);
  });

  return (
    <div>
      <div>Filtering</div>
      <div className="cards mt-4">
        {data?.data.map((task: TaskType) => {
          return <TaskItem task={task} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
