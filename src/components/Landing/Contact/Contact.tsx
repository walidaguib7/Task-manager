import Idea from "/great-idea-flatline.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  username: string;
  email: string;
  description: string;
};

const ContactForm = () => {
  const Submit: SubmitHandler<FormValues> = (data: FormValues) => {
    if (!formState.isValid) {
      console.log("error");
    } else {
      console.log(data);
    }
  };

  const MyForm = useForm<FormValues>();
  const { handleSubmit, control, formState } = MyForm;

  const { errors } = formState;

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
          <form
            onSubmit={handleSubmit(Submit)}
            className="w-[450px] flex flex-col gap-5">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} placeholder="email" />}
            />
            <p>{errors.email?.message}</p>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="username" />
              )}
            />
            <p className="text-red-700">{errors.username?.message}</p>

            <Controller
              name="description"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Textarea placeholder="Your feedback" {...field} />
              )}
            />
            <p>{errors.description?.message}</p>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
