import { Mail } from "lucide-react";

import { Input, Button } from "antd";

const Reset = () => {
  return (
    <div className="pt-10  px-24 max-sm:px-8">
      <div className="flex w-[400px] m-auto mt-6 p-4 text items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <div className="flex flex-col justify-center   w-[300px] m-auto gap-5 items-start">
          <h3 className="text-4xl text-[#333333] pb-2 font-bold">
            Reset password
          </h3>
          <Input
            prefix={<Mail style={{ color: "#777777", marginRight: "8px" }} />}
            className="p-2 shadow-md"
            placeholder="write a strong password"
          />
          <Input
            prefix={<Mail style={{ color: "#777777", marginRight: "8px" }} />}
            className="p-2 shadow-md"
            placeholder="Confirm password"
          />
          <Button className="w-full button">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
