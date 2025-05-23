import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import foundationImage from "../../../../../../public/home/foundation.png";

const page = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  const content = {
    en: {
      title1: "Shah Dynasty and Unification of Nepal",
      pg1: "One of his most important contributions was documenting the life and times of King Prithvi Narayan Shah, the founder of modern Nepal. His works provided in-depth insights into the unification of Nepal and the expansion of the Shah Dynasty. Acharya played a critical role in debunking myths and providing an accurate narrative of Nepal’s unification process.",
      pg2: "Clarification of Nepal’s Calendar System: He was instrumental in promoting and explaining Nepal’s calendar system and correcting historical timelines, ensuring they matched accurate historical records. His research helped standardize historical dates and events, which had previously been shrouded in confusion.",
      title2: "Promotion of Nepali Language and Literature",
      pg3: "Acharya was not just a historian but also a proponent of the Nepali language. He encouraged the use of Nepali in scholarly work and historical research. His writings helped raise awareness about the significance of preserving and promoting the Nepali language and heritage.",
      pg4: "Historical Writings and Books: Baburam Acharya authored many books and articles that became foundational texts for future historians. His well-known works include the history of the Shah dynasty, Nepal’s cultural and religious evolution, and various articles on Nepal’s ancient kingdoms and rulers.",
      title3: "Challenges and Struggles",
      pg5: "Despite his immense contributions, Baburam Acharya faced many challenges throughout his career. In the early 20th century, Nepal was ruled by the Rana dynasty, which severely restricted academic freedom. Historical records were often kept hidden, and there was little incentive for the Ranas to promote a unified sense of Nepalese history. Baburam Acharya, however, managed to gain access to critical documents and manuscripts through persistent effort and his deep connections with scholars.",
      pg6: "At times, his work was censored, and he encountered opposition from the ruling class. Yet, his commitment to uncovering Nepal’s true history never wavered, and he continued to work in relative isolation.",
      title4: "Legacy",
      pg7: "Baburam Acharya’s lasting impact on Nepal’s historical studies is undeniable. He is regarded as one of the greatest historians in the country, whose works serve as the backbone of modern Nepali history. His legacy lives on through his writings and the foundation of historical study that he built.",
      pg8: "Many historians and scholars consider Acharya’s efforts vital to the preservation of Nepal’s heritage. His ability to blend scholarly rigor with a passion for his country’s history made him an iconic figure, and his work continues to inspire researchers and historians in Nepal and abroad.",
      pg9: "In recognition of his contributions, Baburam Acharya was honored with the title 'Itihas Shiromani' by the government and intellectual community of Nepal.",
    },
    np: {
      title1: "शाह वंश र नेपालको एकीकरण",
      pg1: "उनका सबैभन्दा महत्वपूर्ण योगदानहरूमध्ये एक आधुनिक नेपालको संस्थापक राजा पृथ्वी नारायण शाहको जीवन र समयलाई दस्तावेजीकरण गर्नु थियो। उनका कृतिहरूले नेपालको एकीकरण र शाह वंशको विस्तारमा गहिरो जानकारी प्रदान गरेका छन्। आचार्यले नेपालको एकीकरण प्रक्रियाको वास्तविक कथा प्रस्तुत गर्दै मिथकहरू हटाउन महत्वपूर्ण भूमिका खेले।",
      pg2: "नेपालको पात्रो प्रणालीको स्पष्टता: उनले नेपालको पात्रो प्रणालीलाई प्रवर्द्धन र व्याख्या गर्न र ऐतिहासिक समयरेखाहरूलाई ठीक गर्न महत्वपूर्ण भूमिका खेले, जसले सुनिश्चित गर्यो कि ती सही ऐतिहासिक अभिलेखहरूसँग मेल खाए। उनको अनुसन्धानले पहिले अस्पष्ट रहेका ऐतिहासिक मिति र घटनाहरूलाई मानकीकरण गर्न मद्दत गर्यो।",
      title2: "नेपाली भाषा र साहित्यको प्रवर्द्धन",
      pg3: "आचार्य केवल एक इतिहासकार मात्र नभई नेपाली भाषाका समर्थक पनि थिए। उनले शैक्षिक कार्यहरू र ऐतिहासिक अनुसन्धानमा नेपालीको प्रयोगलाई प्रोत्साहित गरे। उनका लेखनहरूले नेपाली भाषा र सम्पदाको संरक्षण र प्रवर्द्धनको महत्त्वबारे जनचेतना फैलाउन मद्दत गर्यो।",
      pg4: "ऐतिहासिक लेखन र पुस्तकहरू: बाबुराम आचार्यले भविष्यका इतिहासकारहरूको लागि आधारभूत पाठ्यहरू बनेका धेरै पुस्तकहरू र लेखहरू लेखेका छन्। उनका प्रसिद्ध कृतिहरूमा शाह वंशको इतिहास, नेपालको सांस्कृतिक र धार्मिक विकास, र नेपालको प्राचीन राज्यहरू र शासकहरूमा लेखिएका विभिन्न लेखहरू समावेश छन्।",
      title3: "चुनौतीहरू र संघर्षहरू",
      pg5: "आफ्ना ठूला योगदानहरूका बावजुद, बाबुराम आचार्यले आफ्नो करियरभरि धेरै चुनौतीहरूको सामना गरे। २० औं शताब्दीको सुरुमा नेपालमा राणा वंशको शासन थियो, जसले शैक्षिक स्वतन्त्रतालाई निकै सीमित गरेको थियो। ऐतिहासिक अभिलेखहरू प्रायः लुकाइन्थ्यो, र राणाहरूलाई नेपाली इतिहासको एकीकृत भावना प्रवर्द्धन गर्नको लागि थोरै मात्र प्रोत्साहन थियो। बाबुराम आचार्यले भने, आफ्नो निरन्तर प्रयास र विद्वानहरूसँगको गहिरो सम्बन्धमार्फत् महत्वपूर्ण कागजात र हस्तलिखित पुस्तकहरू प्राप्त गर्न सके।",
      pg6: "केही समय त उनका कार्यहरू सेन्सर गरियो र उनले शासक वर्गबाट विरोध पनि सामना गर्नुपर्यो। तैपनि, नेपालको वास्तविक इतिहास पत्ता लगाउने उनको प्रतिबद्धता कहिल्यै टसमस भएन, र उनी एक प्रकारको एक्लोपनमा काम गर्न जारी राखे।",
      title4: "सम्पदा",
      pg7: "नेपालको ऐतिहासिक अध्ययनमा बाबुराम आचार्यको स्थायी प्रभाव अस्वीकार्य छ। उनलाई देशका महान् इतिहासकारहरू मध्ये एक मानिन्छ, जसका कृतिहरू आधुनिक नेपाली इतिहासको मेरुदण्डको रूपमा काम गर्छन्। उनका लेखन र ऐतिहासिक अध्ययनको जगले उनको सम्पदालाई जीवित राखेको छ।",
      pg8: "धेरै इतिहासकार र विद्वानहरूले नेपालको सम्पदाको संरक्षणको लागि आचार्यको प्रयासलाई महत्त्वपूर्ण ठानेका छन्। आफ्नो देशको इतिहासप्रतिको गहिरो लगावका साथ उनी विद्वतापूर्ण अनुशासनलाई मिश्रित गर्न सक्ने क्षमताले उनलाई एक आदर्श व्यक्तित्व बनाएको छ, र उनको कार्यले नेपाल र विदेशमा अनुसन्धानकर्ताहरू र इतिहासकारहरूलाई प्रेरणा दिन जारी राखेको छ।",
      pg9: "उनको योगदानको मान्यता स्वरूप, बाबुराम आचार्यलाई नेपालको सरकार र विद्वान समुदायले 'इतिहास शिरोमणि' को उपाधिबाट सम्मानित गरेका थिए।",
    },
  };

  return (
    <>
      <PageHeader
        lang={lang}
        title={{
          en: "About Foundation",
          np: "फाउन्डेसनको बारेमा",
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
              en: "About Foundation",
              np: "फाउन्डेसनको बारेमा",
            },
            href: "/about/about-foundation",
          },
        ]}
      />
      <section className="section container mx-auto w-full">
        <Image
          src={foundationImage}
          alt="Baburam Acharya Foundation"
          width={1338}
          height={535}
          quality={100}
        />
        <div className="pt-[30px]">
          <p>
            <strong>{content[lang as keyof typeof content].title1}:</strong>{" "}
            {content[lang as keyof typeof content].pg1}{" "}
            <span className="separator"></span>
            {content[lang as keyof typeof content].pg2}
            <span className="separator"></span>
            <strong>
              {content[lang as keyof typeof content].title2}:
            </strong>{" "}
            {content[lang as keyof typeof content].pg3}
            <span className="separator"></span>
            {content[lang as keyof typeof content].pg4}
            <span className="separator"></span>
            <strong>
              {content[lang as keyof typeof content].title3}:
            </strong>{" "}
            <br /> {content[lang as keyof typeof content].pg5}
            <span className="separator"></span>
            {content[lang as keyof typeof content].pg6}
            <span className="separator"></span>
            <strong>
              {content[lang as keyof typeof content].title4}:
            </strong>{" "}
            <br /> {content[lang as keyof typeof content].pg7}
            <span className="separator"></span>
            {content[lang as keyof typeof content].pg8}
            <span className="separator"></span>
            {content[lang as keyof typeof content].pg9}
            <span className="separator"></span>
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
