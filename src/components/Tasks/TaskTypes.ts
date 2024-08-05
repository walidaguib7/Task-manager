import { z } from "zod";

export enum StatusType {
  Todo = "Todo",
  InProgress = "In_Progress",
  Completed = "Completed",
}

export enum PriorityType {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export type TaskTypes = {
  id: number;
  name: string;
  status: StatusType;
  Due_Date: Date;
  Priority: PriorityType;
  description: string;
  CreatedAt: Date;
  UpdatedAt?: Date;
  CompletedAt?: Date;
  Category_ID?: "";
  categoryName?: "";
  username?: "";
};

export const AddingTasksSchema = z.object({
  id: z.number().gt(0),
  name: z
    .string()
    .min(8, { message: "task Name should has at least 8 caraters" }),
  status: z.enum(["Todo", "InProgress", "Completed"], {
    message:
      "Status must be one of these options : Todo , In progress or Completed",
  }),
  Due_Date: z.date({ message: "date should'nt be null or in invalid format!" }),
  Priority: z.enum(["Low", "Medium", "High"], {
    message: "Priority must be one of these options : Low , Medium or High",
  }),
  CreatedAt: z.date({
    message: "date should'nt be null or in invalid format!",
  }),
  description: z
    .string()
    .max(120, { message: "Name should has max 120 caracters" }),
  Category_ID: z.number().gt(0, { message: "Id must be a numeric value" }),
  categoryName: z.string().nullable(),
  username: z.string().nullable(),
});

export type CategoryTypes = {
  id: number;
  name: string;
};

export const formateDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
  // Adjust format as needed
};
