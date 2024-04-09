import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DB, TasksCollection, client } from "@/utils/Appwrite";
import { Typography } from "@mui/material";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Databases, Query } from "appwrite";
import { useQuery } from "react-query";
import { StatusType } from "../TaskTypes";
import { useEffect, useState } from "react";
import TasksContent from "./Content/TasksContent";

const TasksList = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(taskName);
  }, [taskName]);

  const limit = 8;
  const offset = (page - 1) * limit;

  const databases = new Databases(client);

  const { data: All } = useQuery(
    ["All", taskName, page],
    async () => {
      if (taskName == "") {
        return await databases.listDocuments(DB, TasksCollection, [
          Query.equal("UserID", localStorage.getItem("user") || ""),
          Query.limit(limit),
          Query.offset(offset),
        ]);
      } else {
        return await databases.listDocuments(DB, TasksCollection, [
          Query.equal("UserID", localStorage.getItem("user") || ""),
          Query.startsWith("Task_name", taskName),
        ]);
      }
    },
    { keepPreviousData: true }
  );

  const { data: Todo } = useQuery("Todo", async () => {
    return await databases.listDocuments(DB, TasksCollection, [
      Query.equal("UserID", localStorage.getItem("user") || ""),
      Query.equal("Status", StatusType.Todo),
    ]);
  });

  const { data: Progress } = useQuery("Progress", async () => {
    return await databases.listDocuments(DB, TasksCollection, [
      Query.equal("UserID", localStorage.getItem("user") || ""),
      Query.equal("Status", "In_Progress"),
    ]);
  });

  const { data: Completed } = useQuery("Completed", async () => {
    return await databases.listDocuments(DB, TasksCollection, [
      Query.equal("UserID", localStorage.getItem("user") || ""),
      Query.equal("Status", "Completed"),
    ]);
  });

  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: "10px" }}>
        All Tasks
      </Typography>
      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-between">
          <TabsList className="flex w-fit justify-between gap-10">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Todo">Todo</TabsTrigger>
            <TabsTrigger value="In Progress">In Progress</TabsTrigger>
            <TabsTrigger value="Completed">Completed</TabsTrigger>
          </TabsList>
          <div className="flex gap-4">
            {/* Fetch by Priority */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* Filtering */}
            <Input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-[300px]"
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
              {All?.documents.length > 0 && (
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
