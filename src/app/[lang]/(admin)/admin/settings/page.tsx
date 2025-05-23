"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { securitySchema, TSecuritySchema } from "@/schemas/settings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { ReactNode, useState } from "react";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import { H2 } from "@/components/typography";
import { changePassword } from "@/server/actions/settings.action";
const FormErr = ({ children }: { children: ReactNode }) => (
  <p className="text-xs text-destructive">{children}</p>
);

const page = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TSecuritySchema>({
    resolver: zodResolver(securitySchema),
  });

  async function handleSecurityForm({
    password,
    new_password,
  }: TSecuritySchema) {
    setLoading(true);
    try {
      const { message, error } = await changePassword({
        oldPassword: password,
        newPass: new_password,
      });
      if (error) {
        return toast({
          variant: "destructive",
          title: "Error !!",
          description: error,
        });
      } else {
        toast({
          variant: "success",
          title: "Success !!",
          description: "Password changed successfully !!",
        });
        reset();
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Error !!",
        description: err?.message || "Something went wrong !!",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSecurityForm)}>
      <div className="pb-2">
        <H2>Change your password</H2>
      </div>
      <div className="max-w-sm flex-1 space-y-3">
        <div className=" ">
          <Label>Current Password</Label>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter your old password"
          />
          <FormErr>{errors?.password?.message}</FormErr>
        </div>

        <div>
          <Label>New Password</Label>
          <Input
            {...register("new_password")}
            type="password"
            placeholder="Enter a new password"
          />
          <FormErr>{errors?.new_password?.message}</FormErr>
        </div>
        <div>
          <Label>Confirm Password</Label>
          <Input
            {...register("confirm_password")}
            type="password"
            placeholder="Enter a new password"
          />
          <FormErr>{errors?.confirm_password?.message}</FormErr>
        </div>

        <FormSubmitBtn isSubmitting={loading}>Save</FormSubmitBtn>
      </div>
    </form>
  );
};

export default page;
