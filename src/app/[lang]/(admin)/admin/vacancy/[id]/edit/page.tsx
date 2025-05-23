import React from "react";
import EditVacancy from "./EditForm";
import connectDB from "@/server/utils/connectDB";
import Vacancy from "@/server/models/Vacancy";
import { notFound } from "next/navigation";
import { Types } from "mongoose";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    await connectDB();
    const vacancy = await Vacancy.findById(id);
    if (!vacancy) return notFound();
    return <EditVacancy data={JSON.stringify(vacancy)} />;
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
