import React from "react";
import { homeDictionary } from "@/dictionary/home";
import { H2, P } from "../typography";
import { Image } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Gallery } from "@/server/models/Gallery";
import News from "@/server/models/News";

const GallaryNotice = async ({ lang }: { lang: string }) => {
  const gallries = await Gallery.find().populate("photos").limit(4);
  const news = await News.find().limit(3);

  return (
    <section className=" py-10">
      <div className="container mx-auto flex flex-col md:flex-col lg:flex-row">
        <div className="md-full w-full pr-4 lg:w-2/3">
          <div className="mb-8 text-left">
            <div className="mb-4 flex items-center justify-between">
              <H2 className="text-3xl font-bold ">
                {homeDictionary[lang as keyof typeof homeDictionary].gallery}
              </H2>
              <a href="/gallery" className="text-blue-600 hover:underline">
                See All
              </a>
            </div>
            <div className="px-4 py-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {gallries.map((g, index) => (
                  <Link
                    href={`/gallery/${g._id}`}
                    key={index}
                    className="w-full space-y-2 rounded-lg p-2 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="line-clamp-1 font-medium">{g.title}</p>
                      <p className="flex items-center gap-2">
                        <Image size={20} />
                        {g?.images?.length}
                      </p>
                    </div>
                    <div>
                      <img
                        src={g.photos[0]?.url}
                        alt="gallery"
                        height={400}
                        width={400}
                        className="h-[250px] w-full rounded-md object-cover"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:full w-full pl-4 lg:w-1/3">
          <div className="text-left">
            <div className="mb-4 flex items-center justify-between">
              <H2 className="text-3xl font-bold ">
                {homeDictionary[lang as keyof typeof homeDictionary].news}
              </H2>
              <a href="/news" className="text-blue-600 hover:underline">
                See All
              </a>
            </div>
            <div className=" overflow-y-auto px-4 py-16">
              <div className="grid grid-cols-1 gap-y-3">
                {news.map((item, index) => (
                  <Link href={`/news/${item._id}`}>
                    <Card key={index} className="relative">
                      <CardContent className="flex flex-col p-4">
                        <div>
                          <P>{item.date}</P>
                          <H2 className="line-clamp-2 text-lg font-medium">
                            {item.title}
                          </H2>
                        </div>
                        <div>
                          <P className="line-clamp-2 leading-loose text-muted-foreground">
                            {item.desc}
                          </P>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallaryNotice;
