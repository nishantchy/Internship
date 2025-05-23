import React from "react";
import { notFound } from "next/navigation";
import Vacancy from "@/server/models/Vacancy";
import { RichContentPreview } from "@/components/editor";
import connectDB from "@/server/utils/connectDB";
import Applicant from "@/server/models/Applicant";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const data = await Vacancy.findById(params.id);
  const applicants = await Applicant.find({ vacancy: data });
  console.log(applicants);

  if (!data) return notFound();

  return (
    <div className="py-2">
      <div className="flex flex-col gap-8 bg-cover bg-no-repeat">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p>{data.category}</p>
        <h3 className="text-xl font-semibold text-blue-600 underline underline-offset-4">
          <Link href={`/admin/vacancy/${params.id}/applicants`}>
            {applicants.length} Applicant(s)
          </Link>
        </h3>
      </div>

      <div className="2xl:container md:w-[80%]">
        <div className="flex flex-col gap-4">
          <div>
            <h5 className="py-8 text-xl font-bold text-primary">
              Job Description
            </h5>
            <RichContentPreview html={data.jobDescription} />
          </div>
          <div>
            <h5 className="py-8 text-xl font-bold text-primary">
              Responsibilities
            </h5>
            <RichContentPreview html={data.responsibilities} />
          </div>

          <div>
            <h5 className="py-8 text-xl font-bold text-primary">
              Qualifications
            </h5>
            <RichContentPreview html={data.qualification} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
