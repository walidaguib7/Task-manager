import { Mail, User } from "lucide-react";
import Idea from "../../../assets/great-idea-flatline.svg";
import { Input, Button } from "antd";

import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  description: string;
};

const ContactForm = () => {
  const Submit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log("Form data :", data);
  };

  const MyForm = useForm<FormValues>();
  const { register, handleSubmit } = MyForm;
  const { TextArea } = Input;
  return (
    <div className="pt-6 px-24 max-sm:px-8">
      <div className="pt-6 pb-8">
        <h2 className="font-semibold text-5xl pb-10 w-full text-center">
          We'd Love to Hear From You!
        </h2>

        <div className="flex justify-center items-center gap-10">
          <div>
            <img
              className="image w-[450px] h-[400px] max-lg:hidden"
              src={Idea}
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit(Submit)} className="w-[450px]">
            <Input
              placeholder="write your username"
              prefix={<User style={{ color: "#777777" }} />}
              id="username"
              className="mb-5 shadow-md p-3"
              {...register("username", {
                required: {
                  message: "Please write your username",
                  value: true,
                },
              })}
            />
            <Input
              placeholder="write your email"
              prefix={<Mail style={{ color: "#777777" }} />}
              className="mb-5 shadow-md p-3"
              {...register("email", {
                required: { message: "Please write your email", value: true },
              })}
            />
            <TextArea
              className="mb-5 shadow-md p-3"
              rows={4}
              id="description"
              placeholder="Write something"
              {...register("description", {
                required: { message: "Field is Empty", value: true },
              })}
            />
            <Button
              color="white"
              htmlType="submit"
              className="text-center bg-blue-500 w-[250px] flex justify-center m-auto  text-white hover:text-white">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
