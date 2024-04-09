import SignUpImage from "/SignUp.jpg";
import { Account, ID } from "appwrite";

import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ValuesTypes } from "./Types";
import { Button } from "@/components/ui/button";

import ErrorAlert from "./ErrorAlert";
import FormField from "./FormField";
import { useState } from "react";
import { client } from "@/utils/Appwrite";

const SignUpPage = () => {
  const [open, showDialog] = useState(false);
  const nav = useNavigate();
  const form = useForm<ValuesTypes>({
    defaultValues: {
      Email: "",
      password: "",
    },
  });

  const { control, handleSubmit } = form;
  // const { isValid } = formState;
  const Submit: SubmitHandler<ValuesTypes> = async (data) => {
    if (data.Email == "" || data.password == "") {
      showDialog(true);
    } else {
      const account = new Account(client);
      await account.create(ID.unique(), data.Email, data.password);
    }
  };

  return (
    <div className="pt-10  px-24 max-sm:px-8">
      <div className="flex justify-between items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <form
          onSubmit={handleSubmit(Submit)}
          className="flex flex-col justify-center text-center w-[300px] m-auto gap-5 items-start">
          <h3 className="text-4xl text-[#333333] font-bold">Join us today!</h3>
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
            type="submit"
            onSubmit={handleSubmit(Submit)}
            className="w-full button">
            Create account
          </Button>
          {open && (
            <ErrorAlert
              error="your fields must be filled"
              func={() => showDialog(false)}
            />
          )}
          <div className="flex gap-2 items-center">
            <span className="text-[14px]">Have you already an account?</span>
            <span
              className="text-[14px] font-bold text-[var(--primary)] cursor-pointer"
              onClick={() => nav("/login")}>
              Sign In
            </span>
          </div>
        </form>

        {/* Right Side */}
        <div className="basis-[60%] max-lg:hidden">
          <img src={SignUpImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
