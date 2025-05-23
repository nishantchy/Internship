import Link from "next/link";
import { ChevronRight } from "lucide-react";
import News from "@/server/models/News";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default async function RecentNews({
  news,
  lang,
}: {
  news: any;
  lang: string;
}) {
  const content = {
    en: {
      title: "Recent News",
      view: "See More",
    },
    np: {
      title: "हालको समाचार",
      view: "अझै हेर्नुहोस्",
    },
  };
  const newes = await News.find();

  return (
    <div className="container mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-commonTitle font-semibold">
          {content[lang as keyof typeof content].title}
        </h2>
        <Link
          href="/news"
          className="flex items-center text-description text-button"
        >
          {content[lang as keyof typeof content].view}{" "}
          <ChevronRight
            style={{
              color: "#DB7C2E",
            }}
          />
        </Link>
      </div>
      {newes.length > 1 ? (
        <div className="flex flex-wrap items-start justify-center gap-y-7 pt-[24px] md:justify-between">
          {newes.slice(0, 4).map((data, index) => (
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
                    {/* removes HTML tags */}
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
      ) : (
        <p className="mt-6 text-center text-gray-500">No news available</p>
      )}
    </div>
  );
}
