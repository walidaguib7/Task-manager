type ButtonProps = {
  label: string;
};

import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const MaterialButton = ({ label }: ButtonProps) => {
  const navigat = useNavigate();

  return (
    <div>
      <Button
        className="button py-3 text-[18px] max-md:hidden  text-white transition hover:shadow-lg "
        onClick={() => navigat("/login")}>
        {label}
      </Button>
    </div>
  );
};

export default MaterialButton;
