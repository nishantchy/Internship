"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
import { useForm } from "react-hook-form";
import { TNewsForm, newsSchema } from "@/schemas/news.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { editNews } from "@/server/actions/news/news.action";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const EditNewsForm = ({ news }: { news: any }) => {
  const newsObj = JSON.parse(news);
  console.log(newsObj);
  const router = useRouter();
  const { toast } = useToast();
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TNewsForm>({ resolver: zodResolver(newsSchema) });

  // Populate news
  useEffect(() => {
    setValue("title", newsObj.title);
    setBody(newsObj.body);
    setImgUrl(newsObj.image.secure_url);
  }, []);

  useEffect(() => {
    setValue("body", body);
    if (body.length > 0) {
      trigger("body");
    }
  }, [body]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = async (data: TNewsForm) => {
    const res = await editNews(newsObj._id, data);
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
          {isSubmitting ? "Updating..." : "Update"}
        </Button>
      </form>
    </div>
  );
};

export default EditNewsForm;
