import React from "react";
import { H2 } from "@/components/typography";
import Link from "next/link";
import { ImageLeftContainer, ImageRightContainer } from "@/components/services";
import { ArrowUp } from "lucide-react";

const savings = [
  {
    img: "/services/loan/general.svg",
    title: "साधारण कर्ज",
    to: "#general",
  },
  {
    img: "/services/loan/business.svg",
    title: "व्यवसायीक कर्जा",
    to: "#business",
  },
  {
    img: "/services/loan/emergency.svg",
    title: "आपत्कालीक कर्जा",
    to: "#emergency",
  },
  {
    img: "/services/loan/home.svg",
    title: "घरायसी कर्जा",
    to: "#home",
  },
  {
    img: "/services/loan/agri.svg",
    title: "कृषी कर्जा",
    to: "#agri",
  },
  {
    img: "/services/loan/entreprenure.svg",
    title: "उद्यमशिलता कर्जा",
    to: "#entreprenure",
  },
  {
    img: "/services/loan/housing.svg",
    title: "आवास कर्जा",
    to: "#housing",
  },

  {
    img: "/services/loan/vehicle.svg",
    title: "सवारी साधन कर्जा",
    to: "#vehicle",
  },
];

const data = [
  {
    id: "general",
    title: "साधारण कर्जा",
    image: "/services/loan/general.svg",
    text: "व्यवसाय÷परियोजनामा संलग्न भएका एवं हुन चाहने सदस्यलाई यो कर्जा उपलब्ध गराइने छ । कुनै पनि व्यापार व्यवसाय नभएतापनी नियमित बचत गर्ने आम्दानीको स्रोत भएका सदस्यहरुलाई समेत यो कर्जा उपलब्ध गराइने छ । ",
  },

  {
    id: "business",
    title: "व्यवसायीक कर्जा",
    image: "/services/loan/business.svg",
    text: "लघु उद्यम÷व्यवसायमा मात्र संलग्न भएका एवं हुन चाहने सदस्यलाई उपलब्ध गराइने छ । व्यापार व्यवसायमा संलग्न भएका सदस्यहरुलाई थप पुँजी आवश्यक भएमा यो कर्जा उपलब्ध गराउन सकिने छ ।",
  },

  {
    id: "emergency",
    title: "आपत्कालीक कर्जा",
    image: "/services/loan/emergency.svg",
    text: "सदस्य वा सदस्यको एकाघरका सदस्य विरामी भएको, हातखुट्टा भाँचीएको , सुत्केरी भएको अवस्थामा तथा तत्कालै उपचार गराउनुपर्ने अवस्थामा यो कर्जा प्रदान गर्न सकिनेछ ।",
  },

  {
    id: "home",
    title: "घरायसी कर्जा",
    image: "/services/loan/home.svg",
    text: "यस सहकारी  संस्थामा आवद्ध सदस्यहरुलाई प्रथम बर्षदेखि नै यो कर्जा उपलब्ध गराइने छ । घरमा प्रयोग हुने उपभोग्य सामाग्रीहरु जस्तै टिभी, फ्रिज, फर्निचरका सामान, मोबाइल, फेन लगायतका सामान खरिद गर्न यो कर्जा उपलब्ध गराइने छ । घरायसी सामान खरिद गर्दा सदस्यहरुलाई सहकारी संस्थाले संचालन गरेको सहकारी पसलबाट उपलब्ध गराइने छ । सहकारी संस्थाले संचालन नगरेको अवस्थामा उपयुक्त सप्लायर्स संग समन्वय गरी उपलब्ध गराइने छ ।",
  },

  {
    id: "agri",
    title: "कृषी कर्जा",
    image: "/services/loan/agri.svg",
    text: "यस सहकारी  संस्थामा आवद्ध सदस्यहरुलाई प्रथम बर्षदेखि नै यो कर्जा उपलब्ध गराइने छ । कृषीमा आधारित कानुनले बन्देज लगाएका बाहेक सबै कृषी उत्पादन वा बजारीकरण वा कृषी जन्य बस्तुको व्यापार गर्न कर्जा प्रदान गर्न सकिने छ ।",
  },

  {
    id: "entreprenure",
    title: "उद्यमशिलता कर्जा ",
    image: "/services/loan/entreprenure.svg",
    text: "लघु उद्यम÷व्यवसायमा मात्र संलग्न भएका एवं हुन चाहने समूहमा आवद्ध भएका वा नभएका सदस्यलाई स्वीकारयोग्य अचल धितो लिई भइरहेको व्यवासयलाई थप व्यवस्थित गर्न तथा नयाँ व्यवसाय सुरुगर्नका लागि उपलब्ध गराइने छ । ",
  },

  {
    id: "housing",
    title: "आवास कर्जा",
    image: "/services/loan/housing.svg",
    text: "सदस्यको घर निर्माण गर्ने÷घरको तला थप गर्ने÷घडेरी खरिद गर्ने÷सौर्य वत्ती , धारा, बाथरुम तथा शौचालय निर्माण गर्ने प्रयोजनको लागि स्वीकारयोग्य अचल धितो लिई उपलब्ध गराईने छ ।",
  },

  {
    id: "vehicle",
    title: "सवारी साधन कर्जा",
    image: "/services/loan/vehicle.svg",
    text: "यो कर्जा व्यवसायीक प्रयोजनमा प्रयोग हुने जस्तै सार्वजनिक यातायात, ढुवानी, सिटी तथा अटो रिक्सा साथै व्यवसायीक प्रयोजनमा प्रयोग हुने मोटरसाइकल आदि खरिद गर्न प्रदान गरिने छ कुल भ्याट मुल्यको अधिकतम् ६० प्रतिशत सम्म यो कर्जा प्रवाह गर्न सकिने तर कुल कर्जा रकमको १५ प्रतिशत भन्दा बढी यो शिर्षकमा कर्जा लगानी गरिने छैन ।",
  },
];

const page = () => {
  return (
    <div>
      <div
        style={{
          background: "url(/services/loan/bg.webp) bottom",
          backgroundSize: "cover",
        }}
        className="flex h-[200px] items-center justify-center md:h-[500px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          हाम्रो कर्जा योजनाहरु
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
              title={d.title}
              text={d.text}
              image={d.image}
              id={d.id}
            />
          ) : (
            <ImageLeftContainer
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
