import React from "react";
import connectDB from "@/server/utils/connectDB";
import News from "@/server/models/News";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  await connectDB();
  // const news = await News.find().sort({ createdAt: -1 });
  const news = await News.find();

  // if (news && news.length > 0) {
  //   const latestNews = news[0];
  // console.log(latestNews);
  return (
    <>
      <PageHeader
        lang={lang}
        title={{
          en: "News",
          np: "सूचना",
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
              en: "News",
              np: "सूचना",
            },
            href: "/news",
          },
        ]}
      />
      {news.length > 1 ? (
        <section className="section container mx-auto w-full">
          <div className="flex flex-wrap items-start justify-center gap-y-7 pt-[24px] md:justify-between">
            {news.map((data, index) => (
              <Link href={`/news/${data._id}`} key={index}>
                <div className="h-auto w-full max-w-[305px] rounded-2xl border border-[#7A7A7A]">
                  <Image
                    src={data.image.secure_url}
                    alt={data.title}
                    width={305}
                    height={205}
                    style={{
                      objectFit: "contain",
                    }}
                    className="rounded-t-lg"
                  />
                  <div className="p-3">
                    <p className="line-clamp-2 text-cardTitle font-semibold">
                      {data.title}
                    </p>
                    <p className="line-clamp-6 pt-[10px] text-cardDescription">
                      {data.body.replace(/<[^>]+>/g, "")}{" "}
                    </p>
                  </div>
                  <div className="flex items-end justify-end space-x-2 p-[7px] text-button">
                    <Calendar />
                    <p className="mt-2 text-sm">
                      {new Date(data.createdAt).toISOString().slice(0, 10)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="flex h-screen items-center justify-center text-center">
          No news for today
        </div>
      )}
    </>
  );
};

export default page;
