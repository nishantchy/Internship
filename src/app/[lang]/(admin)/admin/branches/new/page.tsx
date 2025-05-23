"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

import { useForm } from "react-hook-form";
import { branchSchema, TBranchForm } from "@/schemas/branch.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addBranch } from "@/server/actions/branch/branch.action";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TBranchForm>({
    resolver: zodResolver(branchSchema),
  });

  const onSubmit = async (data: TBranchForm) => {
    const res = await addBranch(data);
    toast({
      variant: res.success ? "success" : "destructive",
      title: res.success ? "New Branch Added !" : "Couldn't add new branch.",
      description: res.message,
    });
    if (res.success) {
      router.back();
    }
  };

  return (
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
  );
};

export default page;
