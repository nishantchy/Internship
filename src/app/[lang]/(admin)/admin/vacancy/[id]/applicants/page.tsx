import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Info } from "lucide-react";

import connectDB from "@/server/utils/connectDB";
import Applicant from "@/server/models/Applicant";
import Vacancy from "@/server/models/Vacancy";
import { dateFormatter } from "@/lib/dateFormatter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = async ({ params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const job = await Vacancy.findById(params.id);
    const applicants = await Applicant.find({ vacancy: job })
      .populate("vacancy")
      .sort({ createdAt: -1 });

    if (!applicants && !job) return notFound();

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
              {applicants
                ? applicants.map((a) => (
                  <TableRow>
                    <TableCell className="font-medium">{`${a.firstName} ${a.lastName}`}</TableCell>
                    <TableCell>{a.email}</TableCell>
                    <TableCell>{a.contact}</TableCell>
                    <TableCell>
                      {a.vacancy ? (
                        a.vacancy.title
                      ) : (
                        <span className="text-red-400">Deleted Job</span>
                      )}
                    </TableCell>
                    <TableCell className="">
                      {dateFormatter(a.createdAt)}
                    </TableCell>

                    <TableCell className="text-right">
                      <Link
                        href={`/admin/applicants/${a._id}`}
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
