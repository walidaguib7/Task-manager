import { Mail, PersonStandingIcon, TextCursorInput } from "lucide-react";
import SignUpImage from "../../../assets/SignUp.jpg";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const nav = useNavigate();
  return (
    <div className="pt-10  px-24 max-sm:px-8">
      <div className="flex justify-between items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <div className="flex flex-col justify-center   text-center w-[300px] m-auto gap-5 items-start">
          <h3 className="text-4xl text-[#333333] font-bold">Join us today!</h3>
          <Input
            prefix={
              <PersonStandingIcon
                style={{ color: "#777777", marginRight: "8px" }}
              />
            }
            className="p-2 shadow-md"
            placeholder="Username"
          />
          <Input
            prefix={<Mail style={{ color: "#777777", marginRight: "8px" }} />}
            className="p-2 shadow-md"
            placeholder="E-mail"
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
          <Button className="w-full button">Create account</Button>
          <div className="flex gap-2 items-center">
            <span className="text-[14px]">Have you already an account?</span>
            <span
              className="text-[14px] font-bold text-[var(--primary)] cursor-pointer"
              onClick={() => nav("/login")}>
              Sign In
            </span>
          </div>
        </div>
        {/* Right Side */}
        <div className="basis-[60%] max-lg:hidden">
          <img src={SignUpImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
