import { Input } from "@/components/ui/input";

import { Control, Controller } from "react-hook-form";
import { ValuesTypes } from "./Types";

type FieldTypes = {
  name: "Email" | "password";
  control: Control<ValuesTypes>;
  placeholder: string;
  type: string;
};

const FormField = ({ control, name, placeholder, type }: FieldTypes) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input {...field} placeholder={placeholder} type={type} />
      )}
    />
  );
};

export default FormField;
