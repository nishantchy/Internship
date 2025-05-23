import React from "react";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import {
  FaWhatsapp,
  FaFacebook,
  FaViber,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { dictionary } from "@/dictionairy";
import { Phone } from "lucide-react";
import { about } from "./Nav/menus";

const quickLinks = [
  { title: "Nepal Goverment Portal", to: "https://www.nepal.gov.np/" },
  {
    title: "Local Level Government",
    to: "https://sthaniya.gov.np/gis/website/",
  },
  { title: "Tribhuvan University", to: "https://tu.edu.np/" },
  { title: "Nepal Police", to: "https://nepalpolice.gov.np/" },
  { title: "Nepal Stock Exchange", to: "https://nepalstock.com/" },
];

const Footer = ({ lang }: { lang: string }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="z-50 w-full bg-primary px-4 py-10 pb-8 text-white md:px-16">
      <div className="flex flex-col justify-between gap-y-8 xl:flex-row">
        <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-2">
          <div className="mt-8 flex items-center  gap-4 pb-4 md:mt-0">
            <img src="/logo.svg" alt="logo" className="w-[80px]" />
            <h1 className="mb-4 flex flex-col text-xl font-bold md:hidden">
              <span>
                {dictionary[lang as keyof typeof dictionary].companyname}
              </span>
              <span>
                {dictionary[lang as keyof typeof dictionary].cooperativeLtd}
              </span>
            </h1>
          </div>
          <div className="flex w-full flex-col justify-between md:flex-row xl:flex-col">
            <h1 className="hidden pt-4 md:block">
              <span
                className={`flex gap-2 ${lang === "np" ? "text-2xl" : "text-xl"}  font-semibold`}
              >
                <span>
                  {dictionary[lang as keyof typeof dictionary].companyname}
                </span>
                <span>
                  {dictionary[lang as keyof typeof dictionary].cooperativeLtd}
                </span>
              </span>

              <br />
            </h1>
            <ul
              className={`flex flex-col gap-2 ${lang === "np" ? "text-md" : "text-sm"}`}
            >
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt size={16} />
                {dictionary[lang as keyof typeof dictionary].headoffice}
              </li>

              <li className="flex items-center gap-2">
                <Phone fill="white" size={16} />
                9851027283
              </li>

              <li className="flex items-center gap-2">
                <IoMail size={16} />
                kaugmas1@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="min-w-1/2 flex flex-col gap-y-8 md:mx-auto md:flex-row md:gap-x-28 xl:mx-0">
          <div>
            <h3 className="mb-2 font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-xs">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.to} target="_blank">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`mb-2 font-semibold ${lang === "np" ? "text-xl" : "text-md"}`}
            >
              Company
            </h3>

            <ul className="flex flex-col gap-2 text-xs">
              {about.en.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.to} target="_blank">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link target="_blank" href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Join us on Social Medias</h3>
            <ul className="flex gap-8 text-sm md:justify-around">
              <li className="rounded-full border-2 p-2">
                <Link href="https://wa.me/9851027283" target="_blank">
                  <FaWhatsapp size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2">
                <Link
                  href="https://www.facebook.com/Kaugmas/?paipv=0&eav=AfYiUbnRpkcW43qBL5Xb6efXUYmFXX0tNX9c7ienrw5BFo-OXJJGI3hgSoGBLwmL3mA&_rdr"
                  target="blank"
                >
                  <FaFacebook size={20} />
                </Link>
              </li>
              <li className="rounded-full border-2 p-2">
                <Link href="viber://add?number=9851027283" target="_blank">
                  <FaViber size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-y-2 text-sm md:flex-row">
        <span>
          &copy; Copyright {year} Kaudinya Gotriya Maha samaj. All rights
          reserved.
        </span>
        <span>
          Powered by :{" "}
          <Link
            className="text-blue-300"
            href="https://metalogic.com.np"
            target="_blank"
          >
            Metalogic Software
          </Link>{" "}
          Pvt. Ltd
        </span>
      </div>
    </footer>
  );
};

export default Footer;
