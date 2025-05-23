"use client";
import { FC, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

import { useForm } from "react-hook-form";
import { branchSchema, TBranchForm } from "@/schemas/branch.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateBranch } from "@/server/actions/branch/branch.action";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const EditBranchForm = ({ branch }: { branch: any }) => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TBranchForm>({
    resolver: zodResolver(branchSchema),
  });

  const onSubmit = async (data: TBranchForm) => {
    const res = await updateBranch(branch.id, data);
    toast({
      variant: res.success ? "success" : "destructive",
      title: res.success ? "Branch Updated !" : "Couldn't update branch !",
      description: res.message,
    });
    if (res.success) {
      router.back();
    }
  };

  useEffect(() => {
    setValue("email", branch.email);
    setValue("phone", branch.phone);
    setValue("name", branch.name);
    setValue("manager", branch.manager);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-xl space-y-4">
          <div>
            <Label>Branch Name</Label>
            <Input {...register("name")} placeholder="eg: Birtamode Branch" />
            <p className="text-xs text-red-500">
              {errors.name && errors.name.message}
            </p>
          </div>
          <div>
            <Label>Branch Manager</Label>
            <Input {...register("manager")} placeholder="eg: Rama Rai" />
            <p className="text-xs text-red-500">
              {errors.manager && errors.manager.message}
            </p>
          </div>
          <div>
            <Label>Phone</Label>
            <Input {...register("phone")} placeholder="eg: 0123456" />
            <p className="text-xs text-red-500">
              {errors.phone && errors.phone.message}
            </p>
          </div>

          <div>
            <Label>Email</Label>
            <Input {...register("email")} placeholder="eg: example@gmail.com" />
            <p className="text-xs text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>
        </div>
        <div className="my-4">
          <Button>
            {isSubmitting ? (
              <>
                <span className="flex gap-2">
                  <Loader2 className="animate-spin" /> Adding Branch
                </span>
              </>
            ) : (
              "Add Branch"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditBranchForm;
