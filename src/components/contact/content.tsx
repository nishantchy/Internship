import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaFax } from "react-icons/fa";

const content = {
  np: {
    secretary: "सचिव",
    foundation: "बाबुराम आचार्य फाउन्डेसन",
    programOfficer: "कार्यक्रम अधिकृत",
    asstProgramOfficer: "सहायक कार्यक्रम अधिकृत",
    address: "३३६, कपुरधारा मार्ग",
    location: "काठमाडौं, नेपाल",
    poBox: "पो.ब.नं. २९२",
    officeHours: "कार्यालय समय: सोमबार-शुक्रबार, ०९:००-१७:३० बजे",
  },
  en: {
    secretary: "Secretary",
    foundation: "Baburam Acharya Foundation",
    programOfficer: "Program Officer",
    asstProgramOfficer: "Asst. Program Officer",
    address: "336, Kapurdhara Marg",
    location: "Kathmandu, Nepal",
    poBox: "P.O. Box No 292",
    officeHours: "(Office hours: Monday-Friday, 0900-1730 hrs)",
  },
};

export const Content = ({ lang }: { lang: string }) => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-10 xl:px-20">
      <div className="">
        {/* Secretary Section */}
        <div className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">
            {content[lang as keyof typeof content].secretary},{" "}
            {content[lang as keyof typeof content].foundation}
          </h2>
          <div className="flex flex-col gap-1 pl-1">
            <p>{content[lang as keyof typeof content].address}</p>
            <p>{content[lang as keyof typeof content].location}</p>
            <p>{content[lang as keyof typeof content].poBox}</p>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-600" />
              <span>Tel: +977-1-4413174</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-600" />
              <span>Email: secretary.baf@foundation.org.np</span>
            </div>
          </div>
        </div>

        {/* Program Officer Section */}
        <div className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">
            {content[lang as keyof typeof content].programOfficer}
          </h2>
          <div className="flex flex-col gap-1 pl-1">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-600" />
              <span>Tel: +977-1-4423006</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-600" />
              <span>Email: programofficer.baf@foundation.org.np</span>
            </div>
          </div>
        </div>

        {/* Assistant Program Officer Section */}
        <div>
          <h2 className="mb-2 text-lg font-semibold">
            {content[lang as keyof typeof content].asstProgramOfficer}
          </h2>
          <div className="flex flex-col gap-1 pl-1">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-600" />
              <span>Tel: +977-01-4446247</span>
            </div>
            <div className="flex items-center gap-2">
              <FaFax size={16} className="text-gray-600" />
              <span>Fax: +977-01-4420129</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-600" />
              <span>Email: asstpo.baf@foundation.org.np</span>
            </div>
            <p className="mt-1 text-gray-600">
              {content[lang as keyof typeof content].officeHours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
