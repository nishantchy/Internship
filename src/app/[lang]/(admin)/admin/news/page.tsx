import { H2 } from "@/components/typography";
import React from "react";
import Link from "next/link";
import { PencilIcon, Info, PlusCircle } from "lucide-react";
import DeleteAlert from "@/components/DeleteAlert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import connectDB from "@/server/utils/connectDB";
import News from "@/server/models/News";
import { dateFormatter } from "@/lib/dateFormatter";
import { deleteNews } from "@/server/actions/news/news.action";

const page = async () => {
  await connectDB();
  const news = await News.find().sort({ createdAt: -1 });

  return (
    <div className="w-full">
      <div className="pb-2">
        <H2>All News</H2>
        <Link
          href="/admin/news/new"
          className="flex items-center gap-2 text-blue-500 underline underline-offset-4"
        >
          <PlusCircle size={16} /> Create new News
        </Link>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news
            ? news.map((n) => (
              <TableRow key={n._id}>
                <TableCell className="line-clamp-2 w-[500px]">
                  {n.title}
                </TableCell>
                <TableCell>{dateFormatter(n.createdAt)}</TableCell>
                <TableCell className="text-right">
                  <div className="inline-flex gap-2">
                    <Link
                      className="flex items-center justify-center text-blue-500 underline underline-offset-4"
                      href={`/admin/news/${n._id}/edit`}
                    >
                      <PencilIcon size={16} />
                    </Link>
                    <div className="flex items-center justify-center text-red-500 underline underline-offset-4"></div>

                    <DeleteAlert
                      deleteAction={deleteNews}
                      id={JSON.stringify(n._id)}
                    />
                    <Link
                      className="flex items-center justify-center text-green-500 underline underline-offset-4"
                      href={`/news/${n._id}/`}
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
