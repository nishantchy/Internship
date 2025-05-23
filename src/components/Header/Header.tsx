import React from "react";
import { Mail, Phone } from "lucide-react";
import ContributionDialog from "../DonationDialog";

const Header = () => {
  return (
    <header className="relative">
      <div className="flex flex-wrap items-center justify-between gap-y-2 px-1 py-4 md:px-8">
        <div className="flex items-center gap-6 lg:gap-16">
          <img
            src="/logo.svg"
            alt=""
            height={100}
            width={100}
            className="h-[50px] w-[50px]  sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px]"
          />
          <div className="md:space-y-2">
            <h1 className="text-2xl font-medium text-primary sm:text-3xl md:text-4xl">
              कौण्डिन्य गोत्रिय महासमाज
            </h1>
            <h1 className="text-sm uppercase text-yellow-500 sm:text-lg md:text-[1.32rem]">
              Kaudinya Gotriya MahaSamaj
            </h1>
            <div>
              <div className=" h-[1px] bg-primary md:h-[3px]" />
              <div className="mt-[1px] h-[1px] bg-yellow-600 md:h-[3px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between px-4">
          <div className="hidden lg:block"></div>
          <div className="flex flex-col gap-x-4 md:gap-y-3">
            <span className="flex items-center gap-2 text-sm lg:text-base">
              <Phone className="w-4 lg:w-5" />
              <span>9851027283</span>
            </span>
            <span className="flex items-center gap-2 text-sm lg:text-base">
              <Mail className="w-4 lg:w-5" />
              <span>kaugmas1@gmail.com</span>
            </span>
          </div>
          <div className="hidden lg:block">का.जि.प्र. दर्ता न. : 173/078</div>
          <ContributionDialog />
        </div>
      </div>
    </header>
  );
};

export default Header;
