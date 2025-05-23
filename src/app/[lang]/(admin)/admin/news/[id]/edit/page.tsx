import React from "react";
import News from "@/server/models/News";
import { notFound } from "next/navigation";
import { Types } from "mongoose";
import connectDB from "@/server/utils/connectDB";
import EditNewsForm from "@/components/admin/news/EditForm";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  if (!Types.ObjectId.isValid(id)) return notFound();
  await connectDB();
  const news = await News.findById(id);

  if (news) {
    return <EditNewsForm news={JSON.stringify(news)} />;
  } else {
    return notFound();
  }
};

export default page;
