import {
  CardTitle,
  CardDescription,
  Card,
  CardHeader,
} from "@/components/ui/card";

import { TabsContent } from "@/components/ui/tabs";
import { Models } from "appwrite";

type ContentType = {
  value: string;
  array: Models.DocumentList<Models.Document> | undefined;
};

const TasksContent = ({ value, array }: ContentType) => {
  return (
    <TabsContent
      className="grid items-center gap-4   grid-cols-4"
      value={value}>
      {array?.documents.map((doc, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{doc.Task_name}</CardTitle>
            <CardDescription>{doc.Description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </TabsContent>
  );
};

export default TasksContent;
