import React from "react";
import Doc from "@/server/models/Document";
import Report from "@/components/report/Report";
import connectDB from "@/server/utils/connectDB";

const page = async () => {
  await connectDB();
  const documents = await Doc.find().sort({ createdAt: -1 });
  return (
    <div>
      <div
        style={{
          background: "url(/reports/bg.webp) center",
          backgroundSize: "cover",
        }}
        className="flex h-[200px] items-center justify-center md:h-[500px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          डाउनलोडहरू
        </div>
      </div>

      {documents && documents.length > 0 ? (
        <div className="flex flex-col gap-4 py-20 text-white">
          {documents.map((doc) => (
            <Report key={doc._id} title={doc.title} url={doc.url} />
          ))}
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center text-center">
          No documents for now.
        </div>
      )}
    </div>
  );
};

export default page;
