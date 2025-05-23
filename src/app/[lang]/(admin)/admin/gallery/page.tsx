import React from "react";
import Link from "next/link";
import { Info, PencilIcon } from "lucide-react";
import { H2 } from "@/components/typography";
import { Gallery } from "@/server/models/Gallery";
import { unstable_noStore as noStore } from "next/cache";
import DeleteAlert from "@/components/DeleteAlert";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddCircleBtn from "@/components/admin/AddCircleBtn";
import connectDB from "@/server/utils/connectDB";
import { deleteGallery } from "@/server/actions/gallery/dbcalls.action";

const page = async () => {
  noStore();
  connectDB();
  const galleries = await Gallery.find().populate("photos");

  return (
    <div className="relative h-full">
      <AddCircleBtn title="Add Gallery" href="/admin/gallery/new" />
      <H2>Gallery</H2>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {galleries
            ? galleries.map((g, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <img
                    src={g.photos[0].url}
                    alt=""
                    className="h-[50px] w-[80px] object-cover"
                  />
                </TableCell>
                <TableCell className="line-clamp-2 w-[500px]">
                  {g.title}
                </TableCell>
                <TableCell>2022-10-01</TableCell>
                <TableCell className="text-right">
                  <div className="inline-flex gap-2">
                    <Link
                      className="flex items-center justify-center text-blue-500 underline underline-offset-4"
                      href={`/admin/gallery/${g._id}/edit`}
                    >
                      <PencilIcon size={16} />
                    </Link>
                    <div className="flex items-center justify-center text-red-500 underline underline-offset-4"></div>

                    <DeleteAlert
                      deleteAction={deleteGallery}
                      id={JSON.stringify(g.id)}
                    />
                    <Link
                      className="flex items-center justify-center text-green-500 underline underline-offset-4"
                      href={`/gallery/${g._id}/`}
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
