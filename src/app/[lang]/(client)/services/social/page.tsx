import React from "react";
import { H1 } from "@/components/typography";

const page = () => {
  return (
    <div>
      <div
        style={{
          background: "url(/services/social/bg.svg) center",
          backgroundSize: "cover",
        }}
        className="flex h-[200px] items-center justify-center md:h-[500px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          सामाजिक सुरक्षा
        </div>
      </div>

      <div className="mx-auto w-3/4 space-y-10 py-10 text-center">
        <H1>सामाजिक सुरक्षा कोषमा आवद्धता</H1>
        <p className="text-xl">
          {" "}
          संस्थाले सामाजिक सुरक्षा कोषमा आवद्ध भई संस्थाका कर्मचारीहरुलाई संलग्न
          गराएको छ । यस कोषमा आवद्ध हुन चाहाने सदस्यहरुलाई समेत संस्थाले
          नियमानुसार आवद्ध गराउने निति लिएको छ । यस मार्फत सदस्यले सामाजिक
          सुरक्षाकोषबाट पाउने सुविधा प्राप्त गर्न सक्नेछन् ।
        </p>
      </div>
    </div>
  );
};

export default page;
