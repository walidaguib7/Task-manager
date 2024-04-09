import { useNavigate } from "react-router-dom";

const Logo = () => {
  const nav = useNavigate();
  return (
    <h1
      className="font-semibold text-4xl cursor-pointer text-[#3498DB]"
      onClick={() => nav("/")}>
      AW7
    </h1>
  );
};

export default Logo;
