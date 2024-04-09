import LoginImage from "/Login.jpg";
import { Account } from "appwrite";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { SubmitHandler, useForm } from "react-hook-form";
import { ValuesTypes } from "../SignUp/Types";

import FormField from "../SignUp/FormField";
import ErrorAlert from "../SignUp/ErrorAlert";
import { useState } from "react";
import { client } from "@/utils/Appwrite";
import { useUserStore } from "@/store/UserStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const user = useUserStore();
  const [open, showDialog] = useState(false);
  const nav = useNavigate();
  const form = useForm<ValuesTypes>({
    defaultValues: {
      Email: "",
      password: "",
    },
  });
  const { control, handleSubmit } = form;

  const Submit: SubmitHandler<ValuesTypes> = async (data) => {
    if (data.Email == "" || data.password == "") {
      showDialog(true);
    } else {
      const account = new Account(client);
      const session = await account.createEmailSession(
        data.Email,
        data.password
      );

      const info = await account.get();

      localStorage.setItem("user", info.$id);
      localStorage.setItem("token", session.$id);
      user.setUser(info.$id);
      navigate("/");
    }
  };

  return (
    <div className="pt-10  px-24 max-sm:px-8">
      <div className="flex justify-between items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <form
          onSubmit={handleSubmit(Submit)}
          className="flex flex-col justify-center   text-center w-[300px] m-auto gap-5 items-start">
          <h3 className="text-4xl text-[#333333] font-bold pb-4">
            Welcome Back!
          </h3>
          <FormField
            name="Email"
            placeholder="email"
            type="email"
            control={control}
          />
          <FormField
            name="password"
            placeholder="password"
            type="password"
            control={control}
          />
          <Button
            onSubmit={handleSubmit(Submit)}
            type="submit"
            className="w-full  shadow-md">
            Login
          </Button>
          {open && (
            <ErrorAlert
              error="invalid informations!"
              func={() => showDialog(false)}
            />
          )}
          <div className="flex gap-2 items-center">
            <span className="text-[14px]">Haven't you an account?</span>
            <span
              className="text-[14px] font-bold text-[var(--primary)] cursor-pointer"
              onClick={() => nav("/signup")}>
              Sign Up
            </span>
          </div>
        </form>
        {/* Right Side */}
        <div className="basis-[60%] max-lg:hidden">
          <img src={LoginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
