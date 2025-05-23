import React from "react";
import Applicant from "@/server/models/Applicant";
import { notFound } from "next/navigation";
import connectDB from "@/server/utils/connectDB";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const applicant = await Applicant.findById(params.id).populate("vacancy");

    if (!applicant) return notFound();

    return (
      <div>
        <div>
          <h2 className="pb-4 text-2xl font-bold">{`${applicant.firstName} ${applicant.lastName}`}</h2>
          <p>
            <span className="font-bold">JobTitle :</span>{" "}
            {applicant.vacancy ? (
              applicant.vacancy.title
            ) : (
              <span className="text-red-400">Deleted Job</span>
            )}
          </p>
          <ul className="">
            <li>
              <span className="font-bold">Email :</span> {applicant.email}
            </li>
            <li>
              <span className="font-bold">Contact :</span>
              {applicant.contact}
            </li>
          </ul>
        </div>

        <h1 className="">
          <Link
            target="_blank"
            href={applicant.resumeUrl}
            className="text-base font-normal text-blue-600 underline underline-offset-4"
          >
            Applicant's Resume
          </Link>
        </h1>
      </div>
    );
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
