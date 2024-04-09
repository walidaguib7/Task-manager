import { Add } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CategoryTypes } from "../../TaskTypes";
import { useCallback } from "react";
import { Databases, ID } from "appwrite";
import { DB, client } from "@/utils/Appwrite";
import { useQueryClient } from "react-query";

const AddCategory = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const db = new Databases(client);

  const form = useForm<CategoryTypes>({
    defaultValues: {
      Category_Name: "",
      Description: "",
    },
  });

  const { control, handleSubmit } = form;

  const queryClient = useQueryClient();

  const Submit: SubmitHandler<CategoryTypes> = useCallback(
    async (data) => {
      if (data.Category_Name == "" || data.Description == "") {
        console.log("fields are empty");
      } else {
        await db.createDocument(DB, "660ca2decfe052e8334b", ID.unique(), {
          Catgeory_Name: data.Category_Name,
          Description: data.Description,
        });
        queryClient.invalidateQueries("categories");
      }
    },
    [db, queryClient]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Add />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Category</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Category name
            </Label>
            <Controller
              name={"Category_Name"}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  required
                  className="col-span-3"
                  {...field}
                  placeholder="Enter a name for your category"
                  type={"text"}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Category description
            </Label>
            <Controller
              name={"Description"}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  required
                  className="col-span-3"
                  {...field}
                  placeholder="Enter a Description for your category"
                  type={"text"}
                />
              )}
            />
          </div>
        </form>
        <DialogFooter>
          <Button onClick={handleSubmit(Submit)} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
