import React from "react";
import Link from "next/link";
import { Info, PencilIcon, PlusCircle } from "lucide-react";
import { H2 } from "@/components/typography";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import connectDB from "@/server/utils/connectDB";
import Branch from "@/server/models/Branches";
import { deleteBranch } from "@/server/actions/branch/branch.action";
import DeleteAlert from "@/components/DeleteAlert";

const page = async () => {
  await connectDB();
  const branches = await Branch.find();
  return (
    <div>
      <div className="pb-5">
        <H2>Branches</H2>
        <Link
          href="/admin/branches/new"
          className="flex items-center gap-2 text-blue-500 underline underline-offset-4"
        >
          <PlusCircle size={16} /> Create new branch
        </Link>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Branch's Name</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {branches
            ? branches.map((b) => (
              <TableRow key={b._id}>
                <TableCell>{b.name}</TableCell>
                <TableCell>{b.manager}</TableCell>
                <TableCell>{b.phone}</TableCell>
                <TableCell>{b.email}</TableCell>
                <TableCell className="text-right">
                  <div className="inline-flex gap-2">
                    <Link
                      className="flex items-center justify-center text-blue-500 underline underline-offset-4"
                      href={`/admin/branches/${b._id}/edit`}
                    >
                      <PencilIcon size={16} />
                    </Link>
                    <div className="flex items-center justify-center text-red-500 underline underline-offset-4"></div>

                    <DeleteAlert
                      deleteAction={deleteBranch}
                      id={JSON.stringify(b._id)}
                    />
                    <Link
                      className="flex items-center justify-center text-green-500 underline underline-offset-4"
                      href={`/admin/branches/${b._id}/`}
                    >
                      <Info size={16} />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
