import Tasks from "@/components/Tasks/List/Tasks";

const TasksListPage = () => {
  return (
    <div className="pt-10   px-24 max-sm:px-8">
      <h3 className="font-bold text-2xl text-[#3399FF]">All Tasks</h3>
      <Tasks />
    </div>
  );
};

export default TasksListPage;
