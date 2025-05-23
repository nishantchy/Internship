import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logocopy.png";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import backgroundImage from "../../public/home/bb.png";

export default function Footer({ lang }: { lang: string }) {
  return (
    <section
      className="relative bg-primary bg-center  bg-no-repeat py-7 text-white"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "603px auto",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="relative z-10">
        <div className="mx-auto max-w-[1440px] px-4 pb-[59px] pt-[12px]">
          <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
            <Image
              src={Logo}
              width={84}
              height={79}
              alt="Baburam Acharya Foundation"
            />
            <h1 className="text-footerTitle font-semibold text-white">
              {lang === "np"
                ? "इतिहासशिरोमणि बाबुराम आचार्य स्मृति प्रतिष्ठान"
                : "Baburam Acharya Memorial Foundation"}
            </h1>
          </div>

          {/* Main Content */}
          <div className="mx-auto mt-6 flex w-full max-w-[1240px] flex-col space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0">
            {/* Contact Information */}
            <div className="space-y-[16px] text-description text-white">
              <div className="flex items-center space-x-2">
                <Phone />
                <p>{lang === "np" ? "+977 ९८४१३२८१२५" : "+977 9841328125"}</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin />
                <p>{lang === "np" ? "ठेगाना" : "Address"}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail />
                <p>email@gmail.com</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-6 text-description sm:grid-cols-3 sm:gap-10">
              <div className="flex flex-col space-y-[16px]">
                <Link href="/about/about-foundation">
                  <span className="text-cardTitle font-semibold">
                    {lang === "np" ? "हाम्रो बारेमा" : "About Us"}
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="block ">Feedback</span>
                </Link>
                <Link href="/login" target="_blank">
                  <span className="block ">Admin</span>
                </Link>
              </div>
              <div className="flex flex-col space-y-[16px]">
                <Link href="" target="_blank">
                  <span className="text-cardTitle font-semibold">
                    {lang === "np" ? "सहयोग केन्द्र" : "Help Center"}
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="block">Contact</span>
                </Link>
              </div>
              <div>
                <Link href="" target="_blank">
                  <span className="text-cardTitle font-semibold">
                    {lang === "np" ? "शर्त र नीति" : "Terms and Policy"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <span className="block h-1 bg-yellow-400/50"></span>
        {/* Bottom Section */}
        <div className="mx-auto flex max-w-[1440px] flex-col space-y-4 px-4  pt-5 text-white sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <p className="text-center sm:text-left">
            © Copyright 2023 MetaLogic Software Pvt. Ltd All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-3 text-white">
            <Link href="">
              <FaFacebookSquare
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Link>
            <Link href="">
              <RiInstagramFill
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Link>
            <Link href="">
              <FaSquareXTwitter
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Link>
            <Link href="">
              <FaYoutube
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
