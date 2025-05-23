// import Committee from "@/components/about/committee/committee";
// import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Member from "@/server/models/Member";
import { unstable_noStore as noStore } from "next/cache";
import connectDB from "@/server/utils/connectDB";
import { notFound } from "next/navigation";
import PersonCard from "@/components/about/PersonCard";

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;
  noStore();
  try {
    await connectDB();
    const members = await Member.find({
      group: "central",
      isChairman: false,
    });
    const chairman = await Member.findOne({
      group: "central",
      isChairman: true,
    });
    return (
      <>
        <PageHeader
          lang={lang}
          title={{
            en: "Karye Committee",
            np: "कार्य समिति",
          }}
          breadcrumbs={[
            {
              label: {
                en: "Home",
                np: "होम",
              },
              href: "/",
            },
            {
              label: {
                en: "Karye Committee",
                np: "कार्य समिति",
              },
              href: "/committees/karye-committee",
            },
          ]}
        />
        <section className="section container mx-auto w-full">
          <div className="flex cursor-pointer flex-wrap items-start justify-center gap-[54px]">
            {/* {Committee.map((data, id) => (
              <div className="h-[350px] w-full max-w-[224px]" key={id}>
                <Image
                  src={data.image}
                  width={100}
                  height={100}
                  alt={data.name}
                  quality={100}
                  style={{
                    height: "261px",
                    width: "224px",
                    objectFit: "cover",
                  }}
                />
                <p className="pt-4 text-center text-description font-semibold">
                  {data.name}
                </p>
                <p className="pt-2 text-center text-description text-primary">
                  {data.post}
                </p>
              </div>
            ))} */}
            <PersonCard
              main
              name={chairman.name}
              position={chairman.position}
              public_id={chairman.image.public_id}
            />
            {members.map((m, i) => (
              <PersonCard
                name={m.name}
                position={m.position}
                public_id={m.image.public_id}
                key={i}
              />
            ))}
          </div>
        </section>
      </>
    );
  } catch (err) {
    return notFound();
  }
}
