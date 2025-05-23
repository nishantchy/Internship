import { H1 } from "@/components/typography";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        style={{
          background: "url(/services/relief/bg.svg) center",
          backgroundSize: "cover",
        }}
        className="flex h-[200px] items-center justify-center md:h-[500px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          राहत सुबिधाहरु
        </div>
      </div>

      <div className="mx-auto w-3/4 space-y-10 py-10 text-center">
        <H1>राहात सम्बन्धि कार्यक्रम</H1>
        <p className="text-xl">
          संस्थाले आवद्ध सदस्यहरूलाई राहात सम्बन्धि कार्यक्रमहरूमा सहयोग गर्ने
          गरेको छ । जस्तै प्रसुति स्याहार खर्च, काजकृया खर्च, औषधी उपचार खर्च ,
          कर्जा मिनाह लगायतका शिर्षकमा राहात प्रदान गर्ने गरिएको छ ।
        </p>
      </div>
    </div>
  );
};

export default page;
