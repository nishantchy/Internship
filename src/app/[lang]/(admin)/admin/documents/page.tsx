import React from "react";
import Link from "next/link";
import { ArrowUpRightFromSquare, PlusCircle } from "lucide-react";
import { H2 } from "@/components/typography";
import { unstable_noStore as noStore } from "next/cache";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Doc from "@/server/models/Document";
import { dateFormatter } from "@/lib/dateFormatter";
import { deleteDocument } from "@/server/actions/document/document.action";
import DeleteAlert from "@/components/DeleteAlert";
import connectDB from "@/server/utils/connectDB";
import { notFound } from "next/navigation";

const page = async () => {
  noStore();
  try {
    await connectDB();
    const documents = await Doc.find().sort({ createdAt: -1 });
    return (
      <div>
        <div className="pb-5">
          <H2>Documents</H2>
          <Link
            href="/admin/documents/new"
            className="flex items-center gap-2 text-blue-500 underline underline-offset-4"
          >
            <PlusCircle size={16} /> Add new document
          </Link>
        </div>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Document's Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>View</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents
              ? documents.map((d) => (
                  <TableRow>
                    <TableCell>{d.title}</TableCell>
                    <TableCell>{dateFormatter(d.createdAt)}</TableCell>
                    <TableCell>
                      <Link
                        href={d.url}
                        className="flex items-center gap-2 text-blue-600"
                        target="_blank"
                      >
                        view <ArrowUpRightFromSquare size={16} />
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex gap-2">
                        <DeleteAlert
                          deleteAction={deleteDocument}
                          id={JSON.stringify(d._id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    );
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
