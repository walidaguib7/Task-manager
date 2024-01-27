type ButtonProps = {
  label: string;
};

import { useNavigate } from "react-router-dom";

const MaterialButton = ({ label }: ButtonProps) => {
  const navigat = useNavigate();

  return (
    <div>
      <button
        className="button py-3 text-[18px] max-md:hidden  text-white transition hover:shadow-lg "
        onClick={() => navigat("/login")}>
        {label}
      </button>
    </div>
  );
};

export default MaterialButton;
