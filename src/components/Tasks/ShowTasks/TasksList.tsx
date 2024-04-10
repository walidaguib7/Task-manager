import { Input } from "@/components/ui/input";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Typography } from "@mui/material";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { StatusType } from "../TaskTypes";
import { useState } from "react";
import TasksContent from "./Content/TasksContent";
import { useFetchAll } from "@/hooks/useFetchTasks";
import { useFetchByStatus } from "@/hooks/useFetchByStatus";

const TasksList = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [page, setPage] = useState(1);

  const { data: All } = useFetchAll(page, taskName);

  const { data: Todo } = useFetchByStatus(page, taskName, StatusType.Todo);

  const { data: Progress } = useFetchByStatus(
    page,
    taskName,
    StatusType.InProgress
  );
  const { data: Completed } = useFetchByStatus(
    page,
    taskName,
    StatusType.Completed
  );

  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: "10px" }}>
        All Tasks
      </Typography>
      <Tabs defaultValue="All" className="w-full max-md:w-full max-sm:w-fit ">
        <div className="flex justify-between max-md:flex-col max-lg:flex-col">
          <TabsList className="flex w-fit max-md:w-full max-sm:w-full max-lg:w-full justify-between gap-10">
            <TabsTrigger className="w-fit" value="All">
              All
            </TabsTrigger>
            <TabsTrigger className="w-fit" value="Todo">
              Todo
            </TabsTrigger>
            <TabsTrigger className="w-fit" value="In Progress">
              In Progress
            </TabsTrigger>
            <TabsTrigger className="w-fit" value="Completed">
              Completed
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-4">
            {/* Filtering */}
            <Input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-[300px] max-md:w-full mt-2"
              placeholder="Search for tasks"
            />
          </div>
        </div>
        <TasksContent value="All" array={All} />
        <TasksContent value="Todo" array={Todo} />
        <TasksContent value="In Progress" array={Progress} />
        <TasksContent value="Completed" array={Completed} />
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {page > 1 && (
                <PaginationPrevious
                  onClick={() => setPage((prev) => prev - 1)}
                  href="#"
                />
              )}
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{page}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              {All?.documents.length != 0 && (
                <PaginationNext
                  onClick={() => setPage((prev) => prev + 1)}
                  href="#"
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Tabs>
    </div>
  );
};

export default TasksList;
