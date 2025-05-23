"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { PlusCircle } from "lucide-react";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
import { useForm } from "react-hook-form";
import { TNewsForm, newsSchema } from "@/schemas/news.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSignatureForNews } from "@/server/actions/gallery/upload.action";
import { getCloudinaryApiKey, getCloudinaryUploadUri } from "./constants";
import { addNews } from "@/server/actions/news/news.action";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [body, setBody] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImage = () => {
    inputRef.current?.click();
  };

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TNewsForm>({ resolver: zodResolver(newsSchema) });

  useEffect(() => {
    setValue("body", body);
    if (body.length > 0) {
      trigger("body");
    }
  }, [body]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleImageUpload = async () => {
    if (image) {
      const { timestamp, signature } = await getSignatureForNews();
      const formData = new FormData();
      formData.append("file", image);

      const endpoint = getCloudinaryUploadUri();
      formData.append("api_key", getCloudinaryApiKey());
      formData.append("signature", signature);
      formData.append("timestamp", timestamp.toString());
      formData.append("folder", "news");

      const res = await fetch(endpoint, { method: "POST", body: formData });
      if (res.ok) {
        const res_data = await res.json();
        return res_data;
      } else {
        throw new Error("Couldn't upload image.");
      }
    }
  };

  const onSubmit = async (data: TNewsForm) => {
    const imgRes = await handleImageUpload();
    const res = await addNews(data, imgRes);
    toast({
      title: res.success ? "Success !!" : "Error !!",
      description: res.message,
      variant: res.success ? "success" : "destructive",
    });
    if (res.success) return router.back();
    return;
  };

  return (
    <div>
      <div className="relative py-8">
        <Image
          src={imgUrl ? imgUrl : "/placeholder.webp"}
          alt=""
          height={300}
          width={300}
        />
        {!image && (
          <Button
            onClick={handleImage}
            className="mt-4 flex items-center justify-center gap-4"
          >
            <PlusCircle size={20} /> Add Image
          </Button>
        )}
        <input
          onChange={(e) => {
            if (e.target.files) {
              setImage(e.target.files[0]);
              const imageUrl = URL.createObjectURL(e.target.files[0]);
              setImgUrl(imageUrl);
            }
          }}
          ref={inputRef}
          hidden
          type="file"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl space-y-4">
        <div>
          <Input {...register("title")} placeholder="Title" />
          <p className="text-xs text-red-500">
            {errors.title && errors.title.message}
          </p>
        </div>
        <div>
          <Editor setValue={setBody} value={body} />
          <p className="text-xs text-red-500">
            {errors.body && errors.body.message}
          </p>
        </div>
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default page;
