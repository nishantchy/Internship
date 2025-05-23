"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"));

import { useForm } from "react-hook-form";
import { TVacancyForm, vacancySchema } from "@/schemas/vacancy.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { updateVacancy } from "@/server/actions/vacancy/vacancy.action";
import { useRouter } from "next/navigation";

const EditVacancy = ({ data }: { data: string }) => {
  const dataObj = JSON.parse(data);
  console.log(dataObj);
  const { toast } = useToast();
  const router = useRouter();

  const [jobDescription, setJobDescription] = useState(dataObj.jobDescription);
  const [qualification, setQualification] = useState(dataObj.qualification);
  const [responsibilities, setResponsibilities] = useState(
    dataObj.responsibilities,
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TVacancyForm>({ resolver: zodResolver(vacancySchema) });

  // Populate data
  useEffect(() => {
    setValue("title", dataObj.title);
    setValue("noOfVacancy", String(dataObj.noOfVacancy));
    setValue("location", dataObj.location);
    setValue("vacancyClosed", dataObj.vacancyClosed);
  }, []);

  useEffect(() => {
    setValue("jobDescription", jobDescription);
  }, [jobDescription]);

  useEffect(() => {
    setValue("qualification", qualification);
  }, [qualification]);

  useEffect(() => {
    setValue("responsibilities", responsibilities);
  }, [responsibilities]);

  const onSubmit = async (data: TVacancyForm) => {
    try {
      const { success, message } = await updateVacancy(dataObj._id, data);
      toast({
        title: success ? "Success !!" : "Failed !!",
        description: message,
        variant: success ? "success" : "destructive",
      });
      if (success) router.back();
    } catch (err) {
      toast({
        title: "Failed !!",
        description: "Couldn't send data to the server!",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl">
      <div className="space-y-2">
        <div className="">
          <Label>Job Title</Label>
          <Input {...register("title")} placeholder="Eg: Product Designer" />
          <p className="text-sm text-red-600">
            {errors.title && errors.title.message}
          </p>
        </div>

        <div className="w-fit">
          <Label>No of Vacancy</Label>
          <Input
            {...register("noOfVacancy")}
            type="number"
            placeholder="Eg: 10"
          />
          <p className="text-sm text-red-600">
            {errors.noOfVacancy && errors.noOfVacancy.message}
          </p>
        </div>

        <div>
          <Label>Location</Label>
          <Input {...register("location")} placeholder="Eg: Kathmandu" />
          <p className="text-sm text-red-600">
            {errors.title && errors.title.message}
          </p>
        </div>

        <div className="flex flex-col gap-8 py-8">
          <div>
            <Label>Job Description</Label>
            <Editor value={jobDescription} setValue={setJobDescription} />
            <p className="text-sm text-red-600">
              {errors.jobDescription && errors.jobDescription.message}
            </p>
          </div>

          <div>
            <Label>Responsibilities</Label>
            <Editor value={responsibilities} setValue={setResponsibilities} />
            <p className="text-sm text-red-600">
              {errors.responsibilities && errors.responsibilities.message}
            </p>
          </div>

          <div>
            <Label>Qualifications</Label>
            <Editor value={qualification} setValue={setQualification} />
            <p className="text-sm text-red-600">
              {errors.qualification && errors.qualification.message}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Label>Expired</Label>
            <input {...register("vacancyClosed")} type="checkbox" />
          </div>
        </div>
        <Button className="my-4" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="animate-spin" />}
          Update Vacancy
        </Button>
      </div>
    </form>
  );
};

export default EditVacancy;
