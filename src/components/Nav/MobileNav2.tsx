"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "../Header/LanguageSwitcher";
import { menus, about, foreign, provinceMenu } from "./menus"; // Ensure you import provinces
import { MenuIcon, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNav = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  const handleClose = () => {
    setMobileNav(false);
  };

  const toggleMenu = (
    menuSetter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    menuSetter((prevState) => !prevState);
  };

  return (
    <div className="sticky top-0 z-10 md:hidden">
      <div
        className={`flex items-center justify-between bg-primary px-2 py-4 text-white transition-all duration-200 md:hidden`}
      >
        <button
          onClick={() => toggleMenu(setMobileNav)}
          className="text-secondary-400"
        >
          {mobileNav ? <X /> : <MenuIcon />}
        </button>
        <LanguageSwitcher lang={lang} />
      </div>

      <ul
        className={`mobile-nav flex flex-col space-y-2 overflow-auto bg-primary px-2 text-white transition-all duration-300 ${mobileNav ? "h-[300px]" : "h-0"}`}
      >
        {menus[lang as keyof typeof menus].map((m) =>
          m.to == "/about" ? (
            <>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="py-0 text-base font-normal">
                    {m.title}
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <ul className="space-y-4 px-4 text-base">
                      {about[lang as keyof typeof about].map((m) =>
                        m.to === "/foreign" ? (
                          <>
                            <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                <AccordionTrigger className="py-0 text-base font-normal">
                                  {m.title}
                                </AccordionTrigger>
                                <AccordionContent asChild>
                                  <ul className="space-y-4 px-4 text-base">
                                    {foreign[lang as keyof typeof foreign].map(
                                      (m) => (
                                        <li>
                                          <Link
                                            onClick={handleClose}
                                            href={`/about/${m.to}`}
                                            key={`/about/${m.title}`}
                                          >
                                            {m.title}
                                          </Link>
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </>
                        ) : m.to === "/province" ? (
                          <>
                            <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                <AccordionTrigger className="py-0 text-base font-normal">
                                  {m.title}
                                </AccordionTrigger>
                                <AccordionContent asChild>
                                  <ul className="space-y-4 px-4 text-base">
                                    {provinceMenu[
                                      lang as keyof typeof provinceMenu
                                    ].map((m) => (
                                      <li>
                                        <Link
                                          onClick={handleClose}
                                          href={`/about/province/${m.to}`}
                                          key={`/about/province/${m.title}`}
                                        >
                                          {m.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </>
                        ) : (
                          <li>
                            <Link
                              onClick={handleClose}
                              href={`/about/${m.to}`}
                              key={`/about/${m.title}`}
                            >
                              {m.title}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          ) : (
            <Link href={m.to} key={m.title}>
              {m.title}
            </Link>
          ),
        )}
      </ul>
    </div>
  );
};

export default MobileNav;
