import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { homeDictionary } from "@/dictionary/home";
import { H1 } from "../typography";

const Message = ({ lang }: { lang: string }) => {
  return (
    <div className="mx-auto my-8 px-4 2xl:container">
      <div className="z-10 flex flex-col items-center justify-between bg-white md:flex-row lg:flex-row">
        <div className="rounded-lg p-4">
          <H1 className="text-3xl font-semibold">
            {homeDictionary[lang as keyof typeof homeDictionary].message}
          </H1>
        </div>
      </div>
      <div className="ml-4 mt-6 rounded">
        <div className="relative flex flex-col items-center lg:flex-row lg:items-start">
          <div className="text-center lg:sticky lg:top-20 lg:ml-4 lg:text-left">
            <div>
              <Image
                className="rounded-lg"
                src="/home/message/photo.svg"
                alt="literature collection"
                width={200}
                height={200}
              />
              <h2 className="mt-4 text-xl font-semibold lg:text-center">
                बाबुराम
              </h2>
              <p className="mb-8 lg:text-center">अध्यक्ष</p>
            </div>
          </div>
          <div className="mt-4 w-full  bg-white text-justify text-lg lg:ml-8 lg:mt-0 lg:text-left">
            <p className="mb-4 text-justify leading-9">
              कौडिन्य सगोत्रीय आचार्यहरू नेपालका ६७४३ वडा, ७५३ स्थानीय तह, ७
              प्रदेश,सङ्घ र प्रारम्भिक रिपोर्ट अनुसार विश्वभर सबै मुलुकमा छरिएर
              रहेका छन् । इतिहास काल देखि नै गौरवशाली इतिहास बोकेका आचार्यहरूको
              वंश, परम्परा, संस्कृति र रीतिरिवाजलाई जीवन्त राख्दै यसको संरक्षण
              गर्नुपर्ने हाम्रो प्रमुख दायित्व हो । विश्वभर सुख–दुःखमा रमाई
              रहनुभएका आचार्यहरूको कूल पूजा गर्ने, गोठ धूप गर्ने, दसैँ, तिहार,
              असार १५, नाग पञ्चमी, रक्षा बन्धन, नयाँ वर्ष मनाउने, पूजापाठ,
              काजक्रिया लगायतका धर्म–संस्कृतिको संरक्षण गर्दै प्रभावकारी बनाउने
              कार्य गर्नु हामी सबै आचार्यहरूको कर्तव्य हुनुपर्छ भन्ने लाग्छ ।
              समाज स्थापना हुँदाका बखत चीनका लागि नेपालका पूर्व राजदूत राजेश्वर
              आचार्य ज्यूले नेतृत्व प्रदान गर्नुभएको आचार्य बन्धु समाज नेपालको
              पछिल्लो कार्यकाल सम्म आई पुगेको छ । त्यसपश्चात्उ उद्योगपति कृष्ण
              आचार्य, पूर्व महालेखापरीक्षक भानु प्रसाद आचार्यले नेतृत्व प्रदान
              गरिसक्नुभएको छ । कौडिन्य सगोत्रीय अग्रजहरूले विभिन्न तवरले वंशावली
              प्रकाशन गर्ने, मठ मन्दिरहरू निर्माण गर्ने लगायतका राम्रा कामहरू
              धेरै नै गर्नुभएको प्रमाणहरू हाम्रा सामु देखिई रहेका छन् ।
              उहाँहरूले निस्वार्थ रूपमा गर्दै आउनुभएको विभिन्न क्रियाकलापहरूको
              प्रशंसा जति गरे पनि कम नै हुन्छ । ‘एक थुकी सुकी सय थुकी नदी’ भने
              झैँ झापा, खोटाङ, काठमाडौँ, कास्क
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
