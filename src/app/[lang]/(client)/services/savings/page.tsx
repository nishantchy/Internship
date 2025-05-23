import React from "react";
import { H2 } from "@/components/typography";
import Link from "next/link";
import { ImageLeftContainer, ImageRightContainer } from "@/components/services";
import { ArrowUp } from "lucide-react";

const savings = [
  { img: "/services/savings/general.svg", title: "साधारण बचत", to: "#general" },
  {
    img: "/services/savings/continious.svg",
    title: "क्रमिक बचत",
    to: "#continious",
  },
  { img: "/services/savings/child.svg", title: "बाल बचत", to: "#child" },
  {
    img: "/services/savings/elderly.svg",
    title: "जेष्ठ नागरिक बचत ",
    to: "#elderly",
  },
  { img: "/services/savings/fixed.svg", title: "आवधिक बचत", to: "#fixed" },
  {
    img: "/services/savings/recurrance.svg",
    title: "पुनरावृत्ती बचत",
    to: "#recurrance",
  },
  {
    img: "/services/savings/lakhpati.svg",
    title: "लखपती बचत",
    to: "#lakhpati",
  },
  {
    img: "/services/savings/education.svg",
    title: "शैक्षिक बचत",
    to: "#education",
  },
  {
    img: "/services/savings/satlok.svg",
    title: "सतलोक पेन्सन बचत",
    to: "#satlok",
  },
];

const data = [
  {
    id: "general",
    title: "साधारण बचत",
    image: "/services/savings/general.svg",
    text: "संस्थाका सदस्यहरूले आफूसंग भएको रकमलाई आफ्नो ईच्छाअनुसार राख्ने र झिक्न पाउने सुविधा भएको बचतलाई ऐच्छिक बचत भनिने छ । सदस्य बनेपश्चात सम्पूर्ण सदस्यहरुले यस्तो खाता सञ्चालन गर्नुपर्नेछ । संस्थाले सदस्यलाई भुक्तानी दिनुपर्ने रकमहरु व्याज, लाभांश, संरक्षित पुँजी फिर्ता कोषको रकम यसै खाता मार्फत भुक्तानी दिनेछ । यस्तो बचतमा सदस्यको क्षमता अनुरुप जतिसुकै रकम स्वीकार गर्न सकिने छ । यस बचतमा संस्थाले तोके बमोजिम व्याजदर दैनिक मौज्दात रकममा प्रदान गर्नेछ । यस्तो बचत संस्थामा आई वा संस्थाको प्रतिनिधि मार्फत जम्मा गर्न वा झिक्न सकिनेछ ",
  },

  {
    id: "continious",
    title: "क्रमिक बचत",
    image: "/services/savings/continious.svg",
    text: "प्रत्येक महिना महिनामा वा निश्चित नियमित अवधिमा सदस्य रहँदासम्म अनिवार्य रूपमा सदस्यले जम्मा गर्न कवोल गरेको बचतलाई क्रमिक बचत भनिने छ । यस्तो बचत मासिक भएमा न्युनतम् २०० वा रु.१०० ले भाग जाने गरि जति पनि जम्मा गर्न सकिनेछ ।",
  },

  {
    id: "child",
    title: "बाल बचत ",
    image: "/services/savings/child.svg",
    text: "सदस्यद्वारा संरक्षित १६ वर्षमुनीका बालबालिकाहरुले मासिक वा ऐच्छिक रुपमा जम्मा गर्ने बचतलाई बाल बचत भनिनेछ । यस्तो बचतमा बाल बचतकर्ताले न्युनतम मासिक रु.२०० देखि अधिकतम जतिसुकै रकम जम्मा गर्न सक्नेछन् । मासिक रुपमा जम्मा गर्नुपर्ने रकम बाहेक थप रकम समेत जम्मा गर्न चाहेमा यस्तो खातामा जम्मा गर्न प्रोत्साहित गरिनेछ । यस्तो रकम एकमुष्ट मुद्दती बचतको रुपमा राख्न समते सकिने छ ।  यस बचतमा संस्थाले तोके बमोजिम व्याजदर प्रदान गरिनेछ । मासिक रु.१००० न्युनतम् ५ बर्षे बाल बचत गर्ने सदस्यका वालवालीकाको जम्मदिन वा अन्य विशेष अवसरमा उपहार प्रदान गर्न सक्नेछ । ",
  },

  {
    id: "continious",
    title: "क्रमिक बचत ",
    image: "/services/savings/continious.svg",
    text: "प्रत्येक महिना महिनामा वा निश्चित नियमित अवधिमा सदस्य रहँदासम्म अनिवार्य रूपमा सदस्यले जम्मा गर्न कवोल गरेको बचतलाई क्रमिक बचत भनिने छ । यस्तो बचत मासिक भएमा न्युनतम् २०० वा रु.१०० ले भाग जाने गरि जति पनि जम्मा गर्न सकिनेछ ।",
  },

  {
    id: "elderly",
    title: "जेष्ठ नागरिक बचत",
    image: "/services/savings/elderly.svg",
    text: "संस्थाका सदस्यहरू मध्ये ६० वर्ष उमेर पुगेका सदस्यहरूबाट मासिक वा ऐच्छिक रूपमा जम्मा गरिने बचतलाई जेष्ठ सदस्य बचत भनिने छ ।  राज्यले वा अन्य कुनै माध्यमबाट प्राप्त रकमको व्यवस्थापन गरी वृद्धावस्थामा परिचालन गरी आत्मसम्मान र स्वाभिमानका साथ जीवनयापनको लागि सहयोग पु¥याउने उद्देश्यका साथ यो बचत सञ्चालन गर्न संस्थाले विशेष प्राथमिकता निर्धारण गर्नेछ ।",
  },

  {
    id: "fixed",
    title: "आवधिक बचत",
    image: "/services/savings/fixed.svg",
    text: "संस्थाका सदस्यहरूले निश्चित अवधि सम्मको लागि सम्झौता गरी राखिने बचतलाई आवधिक बचत भनिने छ । यस्तो बचतमा न्यूनतम रू ५००० देखि अधिकतम जतिसुकै रकम बचत गर्न सकिने छ । आवधिक बचत समयको अवधिको आधारमा व्याजदर प्रदान गर्न सकिने छ । यस बचतमा व्याजदर निर्धारण समितिको सिफारिसमा समयसमयमा परिवर्तन गर्न सकिनेछ ।",
  },

  {
    id: "recurrance",
    title: "पुनरावृत्ती बचत",
    image: "/services/savings/recurrance.svg",
    text: "संस्थाका सदस्यहरूले निश्चित अवधि सम्मको लागि सम्झौता साप्ताहिक,पांक्षिक वा मासिक गरी राखिने बचतलाई आवधिक बचत भनिने छ । यस्तो बचतमा न्यूनतम रू.२०० देखि अधिकतम जतिसुकै रकम बचत गर्न सकिने छ । समय अवधीको आधारमा प्राप्त हुने व्याजदर संस्थामा सम्पर्क गरि वा संस्थाको प्रतिनिधि मार्फत जानकारी लिन सकिनेछ ।",
  },

  {
    id: "lakhpati",
    title: "लखपती बचत",
    image: "/services/savings/lakhpati.svg",
    text: "	संस्थामा आवद्ध भएका सदस्यहरुले निश्चित समय सम्म समान दरले मासिक बचत गरी लाखमा बचत फिर्ता लिन सकिने बचतलाई लखपती बचत भनिनेछ । यस्तो रकम न्युनतम् मासिक ५०० देखि अतिकतम् ५०० ले भाग जाने मासिक जतिपनि बचत गर्न सकिनेछ । समय अवधि पश्चात् लाखमा रकम रुपान्तरण गरि उपलब्ध गराइने छ ।",
  },

  {
    id: "education",
    title: "शैक्षिक बचत",
    image: "/services/savings/education.svg",
    text: "आफ्ना बालबच्चालाई माध्यमिक शिक्षा सम्म अध्ययन गर्न यस्तो बचत एकमुष्ठ वा संस्थाले समय समयमा तोकेबमोजिम गरि आफुले गरेको बचत रकम पूर्ण वा आंशिक फिर्ता हुने बचतलाई शैक्षिक बचत भनिनेछ । संस्थाले विभिन्न विद्यालयहरुसंग सहकार्य गर्ने वा आफ्नो शैक्षिक संस्था मार्फत यो कार्यक्रम अघि बढाउन सक्नेछ । मुद्दती बचत वा मासिक बचत दर समय समयमा संस्थाले निर्धारण गरेबमोजिम हुनेछ ।",
  },
  {
    id: "satlok",
    title: "सतलोक पेन्सन बचत",
    image: "/services/savings/satlok.svg",
    text: "आम्दानी गर्ने समयमा नियमित बचत गरि भविश्यमा एकमुष्ठ वा मा मासिक रुपमा आजिवन फिर्ता दिने सुविधा सहितको बचत योजना पेन्सन बचत रहेको छ ।",
  },
];

const page = () => {
  return (
    <div>
      <div
        style={{
          background: "url(/services/savings/bg.webp) center",
          backgroundSize: "cover",
        }}
        className="flex h-[200px] items-center justify-center md:h-[500px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          हाम्रो बचत योजनाहरू :
        </div>
      </div>
      <div
        id="services"
        className="grid  place-items-center gap-y-10 bg-[e8fdf5] py-10 md:grid-cols-2 lg:mx-auto lg:w-3/4 xl:grid-cols-3"
      >
        {savings.map((s, idx) => (
          <Link
            href={s.to}
            key={idx}
            className="w-[300px] rounded-md bg-green-500 bg-gradient-to-b from-[#d6fca6] to-[#00a652] py-8"
          >
            <img src={s.img} className="mx-auto h-[200px] w-[200px]" />
            <H2 className="py-4 text-center font-semibold text-white">
              {s.title}
            </H2>
          </Link>
        ))}
      </div>

      <div>
        {data.map((d, idx) =>
          idx % 2 === 0 ? (
            <ImageRightContainer
              key={idx}
              title={d.title}
              text={d.text}
              image={d.image}
              id={d.id}
            />
          ) : (
            <ImageLeftContainer
              key={idx}
              id={d.id}
              title={d.title}
              image={d.image}
              text={d.text}
            />
          ),
        )}
      </div>
      <Link
        href="#services"
        className="fixed bottom-3 right-3 rounded-full bg-primary p-4 text-white"
      >
        <span>
          <ArrowUp />
        </span>
      </Link>
    </div>
  );
};

export default page;
