import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { publications } from "../../../../../components/home/publications/publications";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const PublicationsGrid = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  return (
    <>
      <PageHeader
        lang={lang}
        title={{
          en: "Book Publications",
          np: "पुस्तक प्रकाशन",
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
              en: "Book Publications",
              np: "पुस्तक प्रकाशन ",
            },
            href: "/about-baburam-acharya/publication",
          },
        ]}
      />
      <section className="section container mx-auto w-full py-8">
        <div className="grid  grid-cols-1 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
          {publications.map((publication, index) => (
            <Card
              key={index}
              className="h-[510px] w-full max-w-[264px] overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-4">
                <div className="">
                  <Image
                    src={publication.image || "/api/placeholder/300/400"}
                    alt={publication.title}
                    className="h-full w-full rounded-md object-cover"
                    width={224}
                    height={405}
                    quality={100}
                    style={{
                      width: "224px",
                      height: "405px",
                    }}
                  />
                </div>
                <h3 className="line-clamp-2 pt-[20px] text-center text-cardTitle font-semibold ">
                  {publication.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default PublicationsGrid;
