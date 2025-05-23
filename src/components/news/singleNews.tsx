import React from "react";
import Link from "next/link";

export const SingleNews = ({ news }: { news: any }) => {
  return (
    <Link href={`/news/${news._id}`} className="">
      <div
        className="group h-52 rounded-xl transition-all duration-500"
        style={{
          backgroundImage: `url(${news.image.secure_url})`,
          backgroundSize: "cover",
        }}
      ></div>

      <h5 className="mt-4 px-1 font-semibold text-indigo-950">{news.title}</h5>
    </Link>
  );
};
