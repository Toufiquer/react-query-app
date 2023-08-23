"use client";

import * as z from "zod";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  // .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  conPassword: z.string().min(2, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Page() {
  const [passType, setPassType] = useState("password");
  const [matchErr, setMatchErr] = useState("");
  const handlePasswordType = () => {
    passType === "password" ? setPassType("text") : setPassType("password");
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      conPassword: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { password, conPassword } = values || {};
    if (password !== conPassword) {
      setMatchErr("Password doesn't match");
    } else {
      setMatchErr("");
      // Do something with the form values.
      console.log(values);
    }
  }
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-center text-4xl text-semibold my-4">
        Please Registration
      </div>
      <div
        className={"max-w-[900px] w-full border border-solid rounded-lg p-8"}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* User name */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input placeholder="User Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type={passType} placeholder="***" {...field} />
                  </FormControl>
                  <FormMessage />
                  <div className="absolute top-[35px] right-4 cursor-pointer">
                    {passType !== "password" ? (
                      <AiFillEyeInvisible />
                    ) : (
                      <AiFillEye />
                    )}
                  </div>
                </FormItem>
              )}
            />
            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="conPassword"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type={passType} placeholder="***" {...field} />
                  </FormControl>
                  <FormMessage />
                  {matchErr && (
                    <div className="text-sm text-red-500">{matchErr}</div>
                  )}
                  <div
                    onClick={handlePasswordType}
                    className="absolute top-[35px] right-4 cursor-pointer"
                  >
                    {passType !== "password" ? (
                      <AiFillEyeInvisible />
                    ) : (
                      <AiFillEye />
                    )}
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
