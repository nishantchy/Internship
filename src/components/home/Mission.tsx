import React from "react";
import { H1, P, H3 } from "../typography";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

const data = {
  en: [
    {
      image: "/home/mission/social.svg",
      title: "Preserving Heritage",
      description:
        "We safeguard and document the rich history and heritage of the Kaundinya Gotriya lineage, ensuring it is preserved for future generations.",
    },

    {
      image: "/home/mission/global.svg",
      title: "Global Network",
      description:
        "Our society connects members worldwide, facilitating the exchange of information and collaboration across borders to strengthen our global community.",
    },

    {
      image: "/home/mission/empower.svg",
      title: "Community Building",
      description:
        "Our society fosters a sense of belonging and unity among members, creating a supportive network for sharing knowledge and experiences.",
    },
  ],
  np: [
    {
      image: "/home/mission/social.svg",
      title: "सम्पदा संरक्षण",
      description:
        "हामी कौन्डिन्य गोत्रिय वंशको समृद्ध इतिहास र सम्पदाको संरक्षण र अभिलेखीकरण गर्छौं, यसलाई भविष्यका पुस्ताहरूका लागि सुरक्षित गर्ने सुनिश्चित गर्दै।",
    },
    {
      image: "/home/mission/global.svg",
      title: "ग्लोबल नेटवर्क",
      description:
        "हाम्रो समाजले हाम्रो विश्वव्यापी समुदायलाई सुदृढ गर्नका लागि सीमापार सूचनाको आदानप्रदान र सहयोगको सुविधा प्रदान गर्दै सदस्यहरूलाई विश्वव्यापी रूपमा जोड्दछ।",
    },
    {
      image: "/home/mission/empower.svg",
      title: "सामुदायिक भवन",
      description:
        "हाम्रो समाजले सदस्यहरू बीच एकता र एकताको भावनालाई बढावा दिन्छ, ज्ञान र अनुभवहरू साझेदारी गर्न सहयोगी नेटवर्क सिर्जना गर्दछ।",
    },
  ],
};

export const Mission = ({ lang }: { lang: string }) => {
  return (
    <section>
      <div className="space-x-4 py-4">
        <H1 className="mx-12 text-center text-3xl lg:text-left lg:text-4xl">
          हामी विश्वास गर्छौं
        </H1>
        <div className=" grid grid-cols-1 place-items-center gap-y-8 sm:grid-cols-2 md:pt-10 lg:mx-auto lg:grid-cols-3">
          {data[lang as keyof typeof data].map((d: any, idx: number) => (
            <Card key={idx} className="w-[400px] border-none py-10 shadow-none">
              <CardHeader className="relative flex items-center justify-center">
                <Image
                  src={d.image}
                  alt="social image my-8"
                  width={100}
                  height={100}
                />
                <CardTitle className="text-center text-2xl">
                  {d.title}
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  {d.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
