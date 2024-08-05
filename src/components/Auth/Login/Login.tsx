/* eslint-disable @typescript-eslint/no-unused-vars */
import LoginImage from "/Login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { SignInSchema } from "./../SignUp/Types";

const LoginPage = () => {
  const [open, showDialog] = useState(false);
  const nav = useNavigate();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const Submit: SubmitHandler<z.infer<typeof SignInSchema>> = async (data) => {
    if (data.email != "" || data.password != "") {
      await axios
        .post(
          "http://localhost:5176/api/Authentication/Login",

          data
        )
        .then((res) => {
          sessionStorage.setItem("token", res.data["token"]);
          sessionStorage.setItem("userId", res.data["id"]);
          console.log(res.data);
        });

      window.location.reload();
      nav("/");
    }
  };

  return (
    <div className="pt-10  px-24 max-sm:px-8">
      <div className="flex justify-between items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(Submit)}
            className="m-auto  basis-[50%] ">
            <div className="flex flex-col gap-2 justify-center items-center ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input type="email" className="w-[350px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="w-[350px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-[300px] mt-2" type="submit">
                Submit
              </Button>
              <div className="flex gap-2 mt-1 items-center">
                <span className="text-[14px]">Do you haven't an account?</span>
                <span
                  className="text-[14px] font-bold text-[#3498DB]  cursor-pointer"
                  onClick={() => nav("/signup")}>
                  Create account
                </span>
              </div>
            </div>
          </form>
        </Form>

        {/* Right Side */}
        <div className="basis-[60%] max-lg:hidden">
          <img src={LoginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
