import {
  CardTitle,
  CardDescription,
  Card,
  CardHeader,
} from "@/components/ui/card";

import NotFound from "/NotFound.svg";

import { TabsContent } from "@/components/ui/tabs";
import { Databases, Models } from "appwrite";
import { DB, TasksCollection, client } from "@/utils/Appwrite";
import { useQueryClient, useMutation } from "react-query";
import ProgressUi from "./ProgressUi";
import PriorityUi from "./PriorityUi";
import { useTaskStore } from "@/store/TaskStore";
import UpdateTask from "../../Delete_Update/UpdateTask";
import { Delete } from "@mui/icons-material";

type ContentType = {
  value: string;
  array: Models.DocumentList<Models.Document> | undefined;
};

const databases = new Databases(client);

const TasksContent = ({ value, array }: ContentType) => {
  const task = useTaskStore();

  const queryClient = useQueryClient();
  const Mutation = useMutation(async (TaskId: string) => {
    await databases.deleteDocument(DB, TasksCollection, TaskId);
    queryClient.invalidateQueries("All");
  }, {});

  if (array?.documents.length == 0) {
    return (
      <TabsContent
        className="flex justify-center flex-col w-full text-center  items-center px-24 max-sm:px-8"
        value={value}>
        <img src={NotFound} className="w-[300px] mb-2 mt-7" />
        <span className="capitalize text-xl font-medium">Data not found</span>
      </TabsContent>
    );
  } else {
    return (
      <TabsContent
        className="grid items-center gap-4 
        grid-cols-2
        align-middle
        
        max-sm:grid-cols-1 
        max-md:grid-cols-1 
        max-lg:grid-cols-1"
        value={value}>
        {array?.documents.map((doc, i) => (
          <Card
            onClick={() => task.setTask(doc.$id)}
            key={i}
            className="cursor-pointer hover:border-[#3498DB] hover:border-2 shadow-md shadow-blue-100">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-[#2e2f30] text-ellipsis basis[50%]">
                  {doc.Task_name}
                </CardTitle>
                <h5 className="text-[#777] basis[50%]">
                  {doc.Due_Date.slice(0, 10)}
                </h5>
              </div>
              <div className="flex justify-between items-center ">
                <CardDescription className="mt-2">
                  {doc.Description}
                </CardDescription>
                <PriorityUi doc={doc} />
              </div>
              <div className="flex gap-4 justify-between items-center">
                <div className="basis-50%">
                  <ProgressUi Status={doc.Status} />
                </div>
                <div className="flex gap-2">
                  <UpdateTask />
                  <span
                    onClick={() => Mutation.mutate(doc.$id)}
                    className="text-red-800  mt-2">
                    <Delete />
                  </span>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </TabsContent>
    );
  }
};

export default TasksContent;
