import { useNavigate } from "react-router-dom";

const Logo = () => {
  const nav = useNavigate();
  return (
    <h1 className="font-bold text-4xl cursor-pointer" onClick={() => nav("/")}>
      AW7
    </h1>
  );
};

export default Logo;
