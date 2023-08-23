"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
type Inputs = {
  example: string;
  exampleRequired: string;
};
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className={"max-w-[700px]"}>
        {
          /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        }
      </div>
    </main>
  );
}
