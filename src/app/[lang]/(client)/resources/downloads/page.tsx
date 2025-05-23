import PageHeader from "@/components/PageHeader";
import Doc from "@/server/models/Document";
import connectDB from "@/server/utils/connectDB";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;

  await connectDB();
  const doc = await Doc.find().sort({ createdAt: -1 });

  return (
    <div>
      <PageHeader
        lang={lang}
        title={{
          en: "Downloads",
          np: "डाउनलोड ",
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
              en: "Downloads",
              np: "डाउनलोड ",
            },
            href: "/resource/download",
          },
        ]}
      />
      {doc.length > 0 ? (
        <section className="section container mx-auto w-full text-description">
          <div className="max-w-6xl">
            {doc.map((download, i) => (
              <div
                key={i}
                className="mb-4 flex flex-wrap items-center rounded-sm border border-[#7A7A7A] p-3"
              >
                <div className="sm:mr-2">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 26.5H30M18 34.5H24M8 8.5V40.5C8 41.5609 8.42143 42.5783 9.17157 43.3284C9.92172 44.0786 10.9391 44.5 12 44.5H36C37.0609 44.5 38.0783 44.0786 38.8284 43.3284C39.5786 42.5783 40 41.5609 40 40.5V17.184C39.9999 16.6511 39.8934 16.1236 39.6866 15.6325C39.4799 15.1414 39.1771 14.6965 38.796 14.324L29.916 5.64C29.1687 4.90932 28.1651 4.50013 27.12 4.5H12C10.9391 4.5 9.92172 4.92143 9.17157 5.67157C8.42143 6.42172 8 7.43913 8 8.5Z"
                      stroke="#202122"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 4.5V12.5C28 13.5609 28.4214 14.5783 29.1716 15.3284C29.9217 16.0786 30.9391 16.5 32 16.5H40"
                      stroke="#202122"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-2 md:mt-0">
                  <h2 className="text-2xl">
                    {download.title ? download.title : ""}
                  </h2>
                  <p>Click on the download icon to download the document</p>
                </div>
                <div className="ml-auto mt-2 w-full md:mt-0 md:w-auto">
                  <Link
                    className="flex items-center justify-center gap-2  rounded-sm bg-[#DB7C2E] p-2  text-white hover:opacity-80"
                    href={download.url ? download.url : ""}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="#ffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 12.5L3.5 7.5L4.9 6.05L7.5 8.65V0.5H9.5V8.65L12.1 6.05L13.5 7.5L8.5 12.5ZM2.5 16.5C1.95 16.5 1.47933 16.3043 1.088 15.913C0.696666 15.5217 0.500667 15.0507 0.5 14.5V11.5H2.5V14.5H14.5V11.5H16.5V14.5C16.5 15.05 16.3043 15.521 15.913 15.913C15.5217 16.305 15.0507 16.5007 14.5 16.5H2.5Z"
                        fill="#ECECEC"
                      />
                    </svg>
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="flex h-screen items-center justify-center text-center">
          No Downloads Available
        </div>
      )}
    </div>
  );
};

export default page;
