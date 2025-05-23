import React from "react";
import { H1 } from "@/components/typography";
import Speech from "@/server/models/Speech";
import { notFound } from "next/navigation";
import Member from "@/server/models/Member";
import PersonCard from "@/components/about/PersonCard";
import connectDB from "@/server/utils/connectDB";
import { unstable_noStore as noStore } from "next/cache";
import PageHeader from "@/components/PageHeader";
import dynamic from "next/dynamic";
import { unstable_noStore } from "next/cache";
const RichContentPreview = dynamic(
  () => import("@/components/editor/Preview"),
  { ssr: false, loading: () => <div className="h-[80vh]"></div> },
);

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  noStore();
  try {
    await connectDB();
    const chairman = await Member.findOne({
      group: "central",
      isChairman: true,
    });
    const speech = await Speech.findOne();
    return (
      <>
        <PageHeader
          lang={lang}
          title={{ en: "Chairman's Message", np: "अध्यक्षको सन्देश" }}
          breadcrumbs={[
            { label: { en: "Home", np: "होम" }, href: "/" },
            {
              label: { en: "Chairman's Message", np: "अध्यक्षको सन्देश" },
              href: "/about/chairman",
            },
          ]}
        />
        <section className="section container mx-auto w-full">
          <div className="flex flex-wrap items-start justify-center md:justify-between">
            <PersonCard
              main
              position={chairman.position}
              public_id={chairman.image.public_id}
              name={chairman.name}
            />
            <div className="ml-9 hidden h-[94vh] w-1 bg-button xl:block"></div>
            <div className="mx-auto max-w-5xl px-2 pt-5">
              <RichContentPreview html={speech.speech} />
            </div>
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
