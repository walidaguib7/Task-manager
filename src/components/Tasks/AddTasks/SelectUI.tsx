import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectUIProps {
  children: React.ReactNode;
  onChange?: ((value: string) => void) ;
  // ... other props
}

const SelectUI = ({ children , onChange }: SelectUIProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectUI;
