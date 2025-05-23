import { Gallery } from "@/server/models/Gallery";
import { notFound } from "next/navigation";
import Overlay from "@/components/gallery/Overlay";
import connectDB from "@/server/utils/connectDB";
import PageHeader from "@/components/PageHeader";

interface GalleryType {
  _id: string;
  title: {
    en: string;
    np: string;
  };
  photos: any[];
}

const page = async ({ params }: { params: { id: string; lang: string } }) => {
  await connectDB();
  const { id, lang } = params;
  const gallery = await Gallery.findById(id).populate("photos");

  if (gallery) {
    return (
      <>
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
            {
              label: {
                en: gallery.title.en || gallery.title,
                np: gallery.title.np || gallery.title,
              },
              href: `/resources/gallery/${params.id}`,
            },
          ]}
        />
        <h1 className="container mx-auto w-full py-4 text-detailsTitle font-bold">
          {gallery.title}
        </h1>
        <div className="container mx-auto">
          <Overlay gallery={JSON.stringify(gallery)} />
        </div>
      </>
    );
  }

  return notFound();
};

export default page;
