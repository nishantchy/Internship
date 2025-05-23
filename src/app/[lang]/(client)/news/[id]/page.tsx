import connectDB from "@/server/utils/connectDB";
import News from "@/server/models/News";
import { dateFormatter } from "@/lib/dateFormatter";
import Image from "next/image";
import { Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const page = async ({ params }: { params: { id: string; lang: string } }) => {
  await connectDB();
  const { lang } = params;

  const news = await News.findById(params.id);
  const allNews = await News.find().limit(3).sort({ createdAt: -1 });

  if (!news) return <></>;

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
          {
            label: {
              en: news.title.en || news.title,
              np: news.title.np || news.title,
            },
            href: `/news/${params.id}`,
          },
        ]}
      />
      <section className="section container mx-auto w-full">
        <h1 className="text-detailsTitle font-bold">{news.title}</h1>
        <div className="flex items-center justify-center space-x-2 pb-[28px] pt-[25px]">
          <Calendar className="text-button" />
          <p className="text-nameMd">{dateFormatter(news.createdAt)}</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={news.image.secure_url}
            alt={news.title}
            width={567}
            height={409}
            quality={100}
            className="object-cover"
          />
        </div>
        <p className="pt-[30px] text-description font-semibold leading-relaxed">
          {news.body.replace(/<[^>]+>/g, "")}
        </p>
      </section>
    </>
  );
};

export default page;
