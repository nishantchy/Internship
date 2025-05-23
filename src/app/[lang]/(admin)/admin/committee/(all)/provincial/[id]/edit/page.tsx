import React from "react";
import EditBodMember from "./EditForm";
import { notFound } from "next/navigation";
import ProvinceMember from "@/server/models/ProvinceMember";
import { unstable_noStore as noStore } from "next/cache";

const page = async ({ params }: { params: { id: string } }) => {
  noStore();
  const { id } = params;
  try {
    const member = await ProvinceMember.findById(id);
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
