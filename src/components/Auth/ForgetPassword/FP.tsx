// import { Mail } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgetPassword = () => {
  return (
    <div className="pt-10  px-24 max-sm:px-8">
      <div className="flex w-[400px] m-auto mt-6 p-4 text items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <div className="flex flex-col justify-center   w-[300px] m-auto gap-5 items-start">
          <h3 className="text-4xl text-[#333333]  font-bold">
            Forgot your password?
          </h3>
          <p className="text-[#4C4C4C] font-semibold">
            Enter your email address and we’ll send you a link to reset your
            password.
          </p>
          <Input className="p-2 shadow-md" placeholder="Write your email" />
          <Button className="w-full button">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
