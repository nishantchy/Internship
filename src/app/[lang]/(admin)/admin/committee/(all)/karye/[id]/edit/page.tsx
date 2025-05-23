import React from "react";
import EditBodMember from "./EditForm";
import { notFound } from "next/navigation";
import Member from "@/server/models/Member";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  try {
    const member = await Member.findById(id);
    if (member) {
      return <EditBodMember data={JSON.stringify(member)} />;
    } else {
      return notFound();
    }
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
