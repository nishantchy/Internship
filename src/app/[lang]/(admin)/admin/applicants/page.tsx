import React from "react";
import Applicant from "@/server/models/Applicant";
import { notFound } from "next/navigation";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dateFormatter } from "@/lib/dateFormatter";
import { Info } from "lucide-react";
import connectDB from "@/server/utils/connectDB";

const page = async () => {
  try {
    await connectDB();
    const data = await Applicant.find()
      .populate("vacancy")
      .sort({ createdAt: -1 });
    console.log(data);
    if (!data)
      return (
        <p className="flex h-screen items-center justify-center text-center">
          No Applicants
        </p>
      );

    return (
      <div className="">
        <h1 className="text-3xl font-bold">All Applicants</h1>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Applicant's Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact No</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead className="">Applied In</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                ? data.map((d) => (
                  <TableRow key={d._id}>
                    <TableCell className="font-medium">{`${d.firstName} ${d.lastName}`}</TableCell>
                    <TableCell>{d.email}</TableCell>
                    <TableCell>{d.contact}</TableCell>
                    <TableCell>
                      {d.vacancy ? (
                        d.vacancy.title
                      ) : (
                        <span className="text-red-400">Deleted Job</span>
                      )}
                    </TableCell>
                    <TableCell className="">
                      {dateFormatter(d.createdAt)}
                    </TableCell>

                    <TableCell className="text-right">
                      <Link
                        href={`/admin/applicants/${d._id}`}
                        className=" flex w-fit text-blue-600"
                      >
                        <Info size={20} />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
                : null}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
