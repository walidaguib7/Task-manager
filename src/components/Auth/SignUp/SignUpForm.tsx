/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { SignUpSchema } from "./Types";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import z from "zod";

import axios from "axios";

const SignUpForm = () => {
  const nav = useNavigate();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const SubmitForm: SubmitHandler<z.infer<typeof SignUpSchema>> = async (
    data
  ) => {
    const newData = {
      email: data.email,
      username: data.username,
      password: data.password,
    };
    await axios
      .post("http://localhost:5176/api/authentication/register", newData)
      .then((res) => {
        form.reset();
        nav("/login");
      });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(SubmitForm)}
        className="m-auto    basis-[50%] ">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="w-[350px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input className="w-[350px]" {...field} />
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
            <span className="text-[14px]">Already have an account?</span>
            <span
              className="text-[14px] font-bold text-[#3498DB]  cursor-pointer"
              onClick={() => nav("/login")}>
              Sign in
            </span>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
