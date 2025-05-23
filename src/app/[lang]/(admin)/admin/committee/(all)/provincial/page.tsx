import { v2 } from "cloudinary";
import React from "react";
import Link from "next/link";
import { H2 } from "@/components/typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { PencilIcon, PlusCircle } from "lucide-react";
import ProvinceMember from "@/server/models/ProvinceMember";
import { notFound } from "next/navigation";
import connectDB from "@/server/utils/connectDB";
import { dateFormatter } from "@/lib/dateFormatter";
import { deleteProvinceMember } from "@/server/actions/members/members.action";
import DeleteAlert from "@/components/DeleteAlert";

const page = async () => {
  try {
    await connectDB();
    const data = await ProvinceMember.find().sort({
      province: 1,
      createdAt: -1,
    });

    return (
      <>
        <H2>Provincial Committee</H2>
        <Link
          href="/admin/committee/provincial/new"
          className="flex items-center gap-2 text-blue-500 underline underline-offset-4"
        >
          <PlusCircle size={16} /> Add New Member
        </Link>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Photo</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Province</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data
              ? data.map((g, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: v2.image(g.image.public_id, {
                            gravity: "face",
                            height: 50,
                            width: 50,
                            crop: "thumb",
                          }),
                        }}
                      ></div>
                    </TableCell>
                    <TableCell>{g.name}</TableCell>
                    <TableCell>{g.province}</TableCell>
                    <TableCell>{g.position}</TableCell>
                    <TableCell>{dateFormatter(g.createdAt)}</TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex gap-2">
                        <Link
                          className="flex items-center justify-center text-blue-500 underline underline-offset-4"
                          href={`/admin/committee/provincial/${g._id}/edit`}
                        >
                          <PencilIcon size={16} />
                        </Link>
                        <div className="flex items-center justify-center text-red-500 underline underline-offset-4"></div>

                        <DeleteAlert
                          deleteAction={deleteProvinceMember}
                          id={JSON.stringify(g._id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </>
    );
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
