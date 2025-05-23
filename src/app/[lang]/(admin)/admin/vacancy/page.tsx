import React from "react";
import Link from "next/link";
import {
  CheckIcon,
  CrossIcon,
  Info,
  PencilIcon,
  PlusCircle,
  X,
} from "lucide-react";
import Vacancy from "@/server/models/Vacancy";
import connectDB from "@/server/utils/connectDB";
import { dateFormatter } from "@/lib/dateFormatter";
import { deleteVacancy } from "@/server/actions/vacancy/vacancy.action";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import DeleteAlert from "@/components/DeleteAlert";
import { notFound } from "next/navigation";

const page = async () => {
  try {
    await connectDB();
    const data = await Vacancy.find().sort({ createdAt: -1 });
    return (
      <div className="flex min-h-screen flex-col">
        <h1 className="text-3xl font-bold">All Vacancies</h1>
        <div className="">
          <Link
            href="/admin/vacancy/new"
            className="flex items-center gap-2 text-blue-500 underline underline-offset-4"
          >
            <PlusCircle size={16} /> Create new Jobs
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Job Title</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Expired</TableHead>
              <TableHead className="text-right">Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data
              ? data.map((d, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{d.title}</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell>
                    {d.vacancyClosed ? (
                      <CheckIcon size={20} />
                    ) : (
                      <X size={20} />
                    )}
                  </TableCell>

                  <TableCell className="text-right">
                    {dateFormatter(d.createdAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex gap-2">
                      <Link
                        className="flex items-center justify-center text-blue-500 underline underline-offset-4"
                        href={`/admin/vacancy/${d._id}/edit`}
                      >
                        <PencilIcon size={16} />
                      </Link>
                      <div className="flex items-center justify-center text-red-500 underline underline-offset-4"></div>

                      <DeleteAlert
                        deleteAction={deleteVacancy}
                        id={JSON.stringify(d._id)}
                      />
                      <Link
                        className="flex items-center justify-center text-green-500 underline underline-offset-4"
                        href={`/admin/vacancy/${d._id}/`}
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
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
