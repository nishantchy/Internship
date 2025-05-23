import React from "react";
import { H3 } from "@/components/typography";
import { GalleryThumbnail } from "@/components/gallery/GalleryThumbnail";
import { notFound } from "next/navigation";
import { Gallery } from "@/server/models/Gallery";
import connectDB from "@/server/utils/connectDB";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: { lang: string } }) => {
  await connectDB();
  const { lang } = params;

  const gallery = await Gallery.find().populate("photos");

  if (gallery && gallery.length > 0) {
    return (
      <div>
        <PageHeader
          lang={lang}
          title={{
            en: "Gallery",
            np: "ग्यालरी",
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
                en: "Gallery",
                np: "ग्यालरी",
              },
              href: "/resources/gallery",
            },
          ]}
        />
        <section className="container mx-auto w-full py-6">
          <div className="flex flex-wrap items-center justify-start gap-6">
            {gallery.map((data, index) => (
              <Link
                href={`/resources/gallery/${data._id}`}
                key={index}
                className="card h-[388px] w-full max-w-[423px] overflow-hidden  rounded-2xl border border-[#7A7A7A] shadow-xl"
              >
                {data.photos.length > 0 && (
                  <Image
                    src={data.photos[0].url}
                    height={275}
                    width={423}
                    style={{
                      width: "423px",
                      height: "275px",
                    }}
                    alt={data.title}
                    className="object-cover"
                  />
                )}

                <div className="cursor-pointer p-4">
                  <h3 className="mb-2 line-clamp-2 text-cardTitle font-semibold">
                    {data.title}
                  </h3>
                  <p className="text-end text-gray-600">
                    {data.photos.length} photos
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  } else {
    return notFound();
  }
};

export default page;
