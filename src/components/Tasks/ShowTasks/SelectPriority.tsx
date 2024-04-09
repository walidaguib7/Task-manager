import { Select } from "@mui/material";
import { SelectTrigger, SelectValue, SelectContent, SelectGroup } from "@/components/ui/select";

type SelectTypes = {
  children : React.ReactNode
}

const SelectPriority = ({children} : SelectTypes) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectPriority;
