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
import { AddingTasksSchema, CategoryTypes, formateDate } from "../TaskTypes";
import { Controller, useForm } from "react-hook-form";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { SelectItem } from "@/components/ui/select";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const AddSheet = () => {
  const userId = sessionStorage.getItem("userId");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, getValues, reset } = useForm<
    z.infer<typeof AddingTasksSchema>
  >({
    resolver: zodResolver(AddingTasksSchema),
    defaultValues: {
      name: "",
      description: "",
      Due_Date: new Date(),
      CreatedAt: new Date(),
      Category_ID: 0,
      status: "Todo",
      Priority: "Low",
    },
  });
  const queryClient = useQueryClient();

  const { data } = useQuery("categories", async () => {
    return await axios.get(`http://localhost:5176/api/Categories`);
  });

  const addTask = async () => {
    // const dateString = "2024-08-04";
    const task = {
      name: getValues().name,
      description: getValues().description,
      status: getValues().status,
      priority: getValues().Priority,
      createdAt: formateDate(getValues().CreatedAt),
      due_Date: formateDate(getValues().Due_Date),
      categoryId: +getValues().Category_ID,
      userId: userId,
    };
    console.log(getValues());
    await axios.post(`http://localhost:5176/api/Tasks`, task);
    reset();
    await queryClient.invalidateQueries("All");
    // queryClient.invalidateQueries(StatusType.Todo);
    // queryClient.invalidateQueries(StatusType.InProgress);
    // queryClient.invalidateQueries(StatusType.Completed);
  };

  const mutate = useMutation(addTask);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState<Date>();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add Tasks</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a new task</SheetTitle>
        </SheetHeader>
        <Form control={control}>
          <form className="grid gap-4 py-4">
            {/* Task Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Task</Label>
              <Controller
                name="name"
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
                    {data?.data.map((doc: CategoryTypes) => {
                      return (
                        <SelectItem value={doc.id.toString()} key={doc.id}>
                          {doc.name}
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
                name="status"
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
                name="description"
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
        </Form>
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
