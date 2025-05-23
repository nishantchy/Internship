import connectDB from "@/server/utils/connectDB";
import { H2 } from "@/components/typography";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import Branch from "@/server/models/Branches";
import { notFound } from "next/navigation";
import EditBranchForm from "@/components/admin/branches/edit/EditBranchForm";

const page = async ({ params }: { params: { id: string } }) => {
  noStore();
  await connectDB();
  const { id } = params;

  if (id) {
    const branch = await Branch.findById(id);
    return (
      <div>
        <H2 className="py-4">Edit {branch.name}</H2>
        <EditBranchForm
          branch={{
            name: branch.name,
            manager: branch.manager,
            phone: branch.phone,
            email: branch.email,
            id: String(branch._id),
          }}
        />
      </div>
    );
  }
  return notFound();
};

export default page;
