"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"));
import { H1 } from "@/components/typography";
import { useForm } from "react-hook-form";
import { TSpeechSchema, speechSchema } from "@/schemas/speech.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { addNewSpeech } from "@/server/actions/speech/speech.action";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [body, setBody] = useState("");

  const {
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSpeechSchema>({
    resolver: zodResolver(speechSchema),
  });

  useEffect(() => {
    setValue("speech", body);
  }, [body]);

  const onSubmit = async (data: TSpeechSchema) => {
    const { success, message } = await addNewSpeech(data);
    toast({
      variant: success ? "success" : "destructive",
      title: success ? "Success !!" : "Failed !!",
      description: message,
    });
    if (success) return router.back();
  };

  return (
    <div className="max-w-xl">
      <H1 className="border-b pb-2">Add Voice of Chairperson</H1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Editor value={body} setValue={setBody} />
          <p className="text-xs text-red-600">
            {errors.speech && String(errors.speech.message)}
          </p>
        </div>
        <Button className="mt-3 flex gap-1" disabled={isSubmitting}>
          {isSubmitting && <Loader2 size={20} className="animate-spin" />}
          Submit
        </Button>
      </form>
    </div>
  );
};

export default page;
