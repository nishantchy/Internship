"use client";
import React, { useEffect } from "react";
import { H1 } from "@/components/typography";
import { ImageUploadBtn } from "@/components/admin/ImageUploadBtn";
import { memberEditSchema, TMemberEditForm } from "@/schemas/member.schema";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  deleteCloudinaryImage,
  getSignatureForMembers,
} from "@/server/actions/gallery/upload.action";
import {
  getCloudinaryApiKey,
  getCloudinaryUploadUri,
} from "@/app/[lang]/(admin)/admin/news/new/constants";
import { updateMember } from "@/server/actions/members/members.action";

const EditBodMember = ({ data }: { data: string }) => {
  const person = JSON.parse(data);
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<TMemberEditForm>({
    resolver: zodResolver(memberEditSchema),
  });

  // Populate data
  useEffect(() => {
    setValue("name", person.name);
    setValue("position", person.position);
    setValue("isChairman", person.isChairman);
    setValue("group", person.group);
  }, []);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = async (data: TMemberEditForm) => {
    const { name, position, isChairman, image, group } = data;
    if (image) {
      // Deletes Old image
      await deleteCloudinaryImage(person.image.public_id);

      // Add new imaeg
      const { timestamp, signature } = await getSignatureForMembers();
      const formData = new FormData();
      formData.append("file", image);

      const endpoint = getCloudinaryUploadUri();
      formData.append("api_key", getCloudinaryApiKey());
      formData.append("signature", signature);
      formData.append("timestamp", timestamp.toString());
      formData.append("folder", "members");
      const cloud_res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (cloud_res.ok) {
        // Calls update func
        const { public_id, secure_url } = await cloud_res.json();
        const res = await updateMember(person._id, {
          name,
          position,
          image: { public_id, secure_url },
          isChairman: isChairman,
          group,
        });
        toast({
          variant: res.success ? "success" : "destructive",
          title: res.success ? "Success !!" : "Failed !!",
          description: res.message,
        });
        if (res.success) return router.back();
      } else {
        toast({
          variant: "destructive",
          title: "Failed !!",
          description:
            "Couldn't upload image on the server. Please contact relavant party.",
        });
      }
    } else {
      try {
        const res = await updateMember(person._id, {
          name,
          position,
          isChairman: isChairman,
          group,
          image: person.image,
        });
        toast({
          variant: res.success ? "success" : "destructive",
          title: res.success ? "Success !!" : "Failed !!",
          description: res.message,
        });
        if (res.success) return router.back();
      } catch (err) {
        console.log(err);
        toast({
          variant: "destructive",
          title: "Failed !!",
          description:
            "Couldn't upload image on the server. Please contact relavant party.",
        });
      }
    }
  };

  return (
    <div className="max-w-xl">
      <H1 className="pb-10">New Member Details</H1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <ImageUploadBtn
          initialImage={person.image.secure_url}
          setValue={setValue}
          trigger={trigger}
        />
        <p className="text-xs text-red-500">
          {errors.image && String(errors.image.message)}
        </p>
        <div>
          <Label>Full Name</Label>
          <Input {...register("name")} placeholder="Eg: Ram Prasad Adhikari" />
          <p className="text-xs text-red-500">
            {errors.name && String(errors.name.message)}
          </p>
        </div>
        <div>
          <Label>Position</Label>
          <Input {...register("position")} placeholder="Eg: Chairman" />
          <p className="text-xs text-red-500">
            {errors.position && String(errors.position.message)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="chairman">Is Chairman</Label>
          <input id="chairman" {...register("isChairman")} type="checkbox" />
        </div>

        <Button disabled={isSubmitting} className="flex gap-1">
          {isSubmitting && <Loader2 size={20} className="animate-spin" />}
          Update Member
        </Button>
      </form>
    </div>
  );
};

export default EditBodMember;
