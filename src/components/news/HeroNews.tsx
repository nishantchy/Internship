import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { notFound } from "next/navigation";

export const NewsHero = ({ news }: { news: any }) => {
  if (news) {
    return (
      <div className="grid px-2 pb-20 pt-10 2xl:container md:px-10 lg:mx-auto lg:grid-cols-2">
        <div className="flex h-full">
          <img
            className="h-[85%] w-full rounded-xl object-cover"
            src={news.image}
            alt="blog image"
          />
        </div>
        <div className="flex h-full py-4 md:px-8 lg:py-0">
          <div className="flex flex-col gap-4">
            <h5 className="text-secondary-300 text-xl font-semibold">
              Latest News
            </h5>
            <h2 className="line-clamp-5 text-3xl  text-primary md:text-6xl">
              {news.title}
            </h2>

            <Link
              href={`/news/${news._id} `}
              className="flex gap-2 py-4 text-blue-600"
            >
              Read More <MoveRight />
            </Link>
          </div>
        </div>
      </div>
    );
  } else return notFound();
};
