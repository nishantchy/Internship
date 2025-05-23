import Image from "next/image";
import { Gallery } from "@/server/models/Gallery";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Photo {
  _id: string;
  url: string;
  public_id: string;
}

interface GalleryType {
  _id: string;
  title: string;
  photos: Photo[];
}

export default async function GalleryComp({ lang }: { lang: string }) {
  const content = {
    en: {
      title: "Gallery",
      view: "See More",
    },
    np: {
      title: "ग्यालरी",
      view: "अझै हेर्नुहोस्",
    },
  };
  const galleries = (await Gallery.find()
    .populate("photos")
    .limit(3)
    .lean()) as GalleryType[];

  return (
    <section className="container w-full pb-[60px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-commonTitle font-semibold">
          {content[lang as keyof typeof content].title}
        </h2>
        <Link
          href="/resources/gallery"
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

      <div className="flex flex-wrap items-center justify-start gap-6">
        {galleries.map((gallery, galleryIndex) => (
          <Link
            href={`/resources/gallery/${gallery._id}`}
            key={galleryIndex}
            className="card h-[388px] w-full max-w-[423px] overflow-hidden  rounded-2xl border border-[#7A7A7A] shadow-xl"
          >
            {gallery.photos.length > 0 && (
              <Image
                src={gallery.photos[0].url}
                height={275}
                width={423}
                style={{
                  width: "423px",
                  height: "275px",
                }}
                alt={gallery.title}
                className="object-cover"
              />
            )}

            <div className="cursor-pointer p-4">
              <h3 className="mb-2 line-clamp-2 text-cardTitle font-semibold">
                {gallery.title}
              </h3>
              <p className="text-end text-gray-600">
                {gallery.photos.length} photos
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
