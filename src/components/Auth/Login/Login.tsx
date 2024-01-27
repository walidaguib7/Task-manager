import { Mail, TextCursorInput } from "lucide-react";
import LoginImage from "../../../assets/Login.jpg";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();
  return (
    <div className="pt-10  px-24 max-sm:px-8">
      <div className="flex justify-between items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <div className="flex flex-col justify-center   text-center w-[300px] m-auto gap-5 items-start">
          <h3 className="text-4xl text-[#333333] font-bold pb-4">
            Welcome Back!
          </h3>
          <Input
            prefix={<Mail style={{ color: "#777777", marginRight: "8px" }} />}
            className="p-2 shadow-md"
            placeholder="Email"
          />
          <Input
            prefix={
              <TextCursorInput
                style={{ color: "#777777", marginRight: "8px" }}
              />
            }
            className="p-2 shadow-md"
            placeholder="Password"
          />
          <Button
            className="w-full button shadow-md"
            style={{ paddingBottom: "20px" }}>
            Login
          </Button>
          <div className="flex gap-2 items-center">
            <span className="text-[14px]">Haven't you an account?</span>
            <span
              className="text-[14px] font-bold text-[var(--primary)] cursor-pointer"
              onClick={() => nav("/signup")}>
              Sign Up
            </span>
          </div>
        </div>
        {/* Right Side */}
        <div className="basis-[60%] max-lg:hidden">
          <img src={LoginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
