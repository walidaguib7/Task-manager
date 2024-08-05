import { Button } from "@/components/ui/button";
import "./style.css";
import CardImg from "/Card.jpg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TaskType = {
  name: string;
  categoryName: string;
  description: string;
  createdAt: string;
  id: number;
};

type tasks = {
  task: TaskType;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TaskItem = ({ task }: tasks) => {
  return (
    <div className="item shadow-xl">
      {/* card header */}
      <header className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={CardImg} className="w-[40px] rounded-xl" />
          <h3 className="font-semibold text-lg text-[#212121]">{task.name}</h3>
        </div>
        <div>
          <span className="category overflow-hidden">{task.categoryName}</span>
        </div>
      </header>
      {/* Content */}
      <section>
        <p className="pl-2 font-medium text-lg text-[#757575]">
          {task.description}
        </p>
      </section>
      <hr />
      {/* Footer */}
      <footer className="flex justify-between items-center">
        <span>{task.createdAt}</span>
        <Button>View Details</Button>
      </footer>
    </div>
  );
};

export default TaskItem;
