import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import AddCategory from "./Category/AddCategory";

import SelectUI from "./SelectUI";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerDemo } from "./DatePick";
import { PriorityType, StatusType, TaskTypes } from "../TaskTypes";
import { Controller, useForm } from "react-hook-form";

import { Databases, ID } from "appwrite";
import {
  categoryCollection,
  client,
  DB,
  TasksCollection,
} from "@/utils/Appwrite";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { SelectItem } from "@/components/ui/select";

const AddSheet = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, getValues, reset } = useForm<TaskTypes>({
    defaultValues: {
      Task_name: "",
      Description: "",
      Priority: PriorityType,
      Status: StatusType,
      Due_Date: new Date(),
      Category_ID: "",
      UserID: localStorage.getItem("user"),
    },
  });
  const queryClient = useQueryClient();
  const db = new Databases(client);
  const { data } = useQuery("categories", () => {
    return db.listDocuments(DB, categoryCollection);
  });

  const addTask = async () => {
    await db.createDocument(DB, TasksCollection, ID.unique(), getValues());
    reset();
    queryClient.invalidateQueries("All");
    queryClient.invalidateQueries("Todo");
    queryClient.invalidateQueries("In_Progress");
    queryClient.invalidateQueries("Completed");
  };

  const mutate = useMutation(addTask);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState<Date>();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span>Add tasks</span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a new task</SheetTitle>
        </SheetHeader>
        <form className="grid gap-4 py-4">
          {/* Task Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Task</Label>
            <Controller
              name="Task_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  className="col-span-3"
                  {...field}
                  placeholder={"Enter a task name"}
                  type={"text"}
                />
              )}
            />
          </div>
          {/* CategoryId */}
          <div className="flex justify-center gap-4 items-center">
            <Label className="text-right max-sm:hidden">Category</Label>
            <Controller
              name="Category_ID"
              control={control}
              render={({ field }) => (
                <SelectUI {...field} onChange={field.onChange}>
                  {data?.documents.map((doc) => {
                    return (
                      <SelectItem key={doc.$id} value={doc.$id}>
                        {doc.Catgeory_Name}
                      </SelectItem>
                    );
                  })}
                </SelectUI>
              )}
            />

            <AddCategory />
          </div>
          {/* Status */}
          <div className="flex justify-start items-center gap-4">
            <Label className="text-right">Status</Label>
            <Controller
              name="Status"
              control={control}
              render={({ field }) => (
                <SelectUI {...field} onChange={field.onChange}>
                  <SelectItem value="Todo">Todo</SelectItem>
                  <SelectItem value="In_Progress">In progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectUI>
              )}
            />
          </div>
          {/* Priority */}
          <div className="flex justify-start items-center gap-4">
            <Label className="text-right">Priority</Label>
            <Controller
              name="Priority"
              control={control}
              render={({ field }) => (
                <SelectUI {...field} onChange={field.onChange}>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectUI>
              )}
            />
          </div>
          {/* Description */}
          <div className="flex justify-start items-center gap-4">
            <Label className="text-right">Description</Label>
            <Controller
              name="Description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea {...field} placeholder="Enter a task Description" />
              )}
            />
          </div>
          {/* Due Date */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Due Date</Label>
            <DatePickerDemo date={date}>
              <Controller
                name="Due_Date"
                control={control}
                render={({ field }) => (
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={setDate}
                  />
                )}
              />
            </DatePickerDemo>
          </div>
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => mutate.mutate()} type="submit">
              Add
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddSheet;
