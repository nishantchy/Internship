"use client";
import React, { useEffect } from "react";
import { H1 } from "@/components/typography";
import { ImageUploadBtn } from "@/components/admin/ImageUploadBtn";
import {
  provinceMemberEditSchema,
  TProvinceMemberEditShmema,
} from "@/schemas/member.schema";
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
import { updateProvinceMember } from "@/server/actions/members/members.action";
import { PROVINCES } from "@/server/utils/constants";

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
  } = useForm<TProvinceMemberEditShmema>({
    resolver: zodResolver(provinceMemberEditSchema),
  });

  // Populate data
  useEffect(() => {
    setValue("name", person.name);
    setValue("position", person.position);
    setValue("isChairman", person.isChairman);
    setValue("province", person.province);
  }, []);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = async (data: TProvinceMemberEditShmema) => {
    const { name, position, isChairman, image, province } = data;
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
        const res = await updateProvinceMember(person._id, {
          name,
          position,
          image: { public_id, secure_url },
          isChairman: isChairman,
          province,
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
        const res = await updateProvinceMember(person._id, {
          name,
          position,
          isChairman: isChairman,
          province,
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
      <H1 className="pb-10">Edit Member Details</H1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <ImageUploadBtn
          initialImage={person.image.secure_url}
          setValue={setValue}
          trigger={trigger}
        />
        <p className="text-xs text-red-500">
          {errors.image && String(errors.image.message)}
        </p>

        <div className="flex flex-col">
          <Label htmlFor="province">Province</Label>
          <select
            id="province"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
            {...register("province")}
          >
            <option value="">Please select a province</option>
            {PROVINCES.map((p) => (
              <option value={p.value} key={p.value}>
                {p.title}
              </option>
            ))}
          </select>
          <p className="text-xs text-red-500">
            {errors.province && String(errors.province.message)}
          </p>
        </div>

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
