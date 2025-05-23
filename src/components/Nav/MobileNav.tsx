"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "../Header/LanguageSwitcher";
import { menus, services, about, foreign, provinceMenu } from "./menus"; // Ensure you import provinces
import { MenuIcon, X, ChevronDown } from "lucide-react";

const MobileNav = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [otherCommittee, setOtherCommittee] = useState(false);
  const [provinceOpen, setProvinceOpen] = useState(false);

  const handleClose = () => {
    setMobileNav(false);
    setServiceOpen(false);
    setAboutOpen(false);
    setOtherCommittee(false);
    setProvinceOpen(false);
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
        className={`mobile-nav flex flex-col overflow-auto bg-primary text-white transition-all duration-300 ${mobileNav ? "h-[300px]" : "h-0"}`}
      >
        {menus[lang as keyof typeof menus].map((menu, menuIdx) => {
          if (menu.to === "/about") {
            return (
              <div key={menuIdx} className="text-sm">
                <p
                  onClick={() => toggleMenu(setAboutOpen)}
                  className="flex cursor-pointer items-center px-2 py-2"
                >
                  {lang === "en" ? "About Us" : "हाम्रो बारेमा"}
                  <ChevronDown
                    strokeWidth={1}
                    className={aboutOpen ? "rotate-180" : ""}
                  />
                </p>
                <ul
                  className={`overflow-hidden pl-4 transition-all duration-300 ${aboutOpen ? "min-h-[200px]" : "h-0"}`}
                >
                  {about[lang as keyof typeof about].map((m, aboutIdx) => (
                    <div key={aboutIdx}>
                      {m.to === "/foreign" ? (
                        <div>
                          <p
                            onClick={() => toggleMenu(setOtherCommittee)}
                            className="flex cursor-pointer items-center px-2 py-2"
                          >
                            {lang === "en"
                              ? "Foreign Committee"
                              : "विदेश विभाग"}
                            <ChevronDown
                              strokeWidth={1}
                              className={otherCommittee ? "rotate-180" : ""}
                            />
                          </p>
                          <ul
                            className={`overflow-hidden pl-4 transition-all duration-300 ${otherCommittee ? "min-h-[200px]" : "h-0"}`}
                          >
                            {foreign[lang as keyof typeof foreign].map(
                              (foreignItem, idx) => (
                                <li key={`foreign_${idx}`}>
                                  <Link
                                    onClick={handleClose}
                                    className={`block px-2 py-2 text-sm ${pathname === `/about/${foreignItem.to}` && "bg-yellow-600"}`}
                                    href={`/about/${foreignItem.to}`}
                                  >
                                    {foreignItem.title}
                                  </Link>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      ) : m.to === "/province" ? (
                        <div>
                          <p
                            onClick={() => toggleMenu(setProvinceOpen)}
                            className="flex cursor-pointer items-center px-2 py-2"
                          >
                            {lang === "en"
                              ? "Province Committee"
                              : "प्रदेश समिति"}
                            <ChevronDown
                              strokeWidth={1}
                              className={provinceOpen ? "rotate-180" : ""}
                            />
                          </p>
                          <ul
                            className={`overflow-hidden pl-4 transition-all duration-300 ${provinceOpen ? "min-h-[200px]" : "h-0"}`}
                          >
                            {provinceMenu[
                              lang as keyof typeof provinceMenu
                            ].map((provinceItem, idx) => (
                              <li key={`province_${idx}`}>
                                <Link
                                  onClick={handleClose}
                                  className={`block px-2 py-2 text-sm ${pathname === `/about/province/${provinceItem.to}` && "bg-yellow-600"}`}
                                  href={`/about/province/${provinceItem.to}`}
                                >
                                  {provinceItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <li key={`about_${aboutIdx}`}>
                          <Link
                            onClick={handleClose}
                            className={`block px-2 py-2 text-sm ${pathname === `/about${m.to}` && "bg-yellow-600"}`}
                            href={`/about/${m.to}`}
                          >
                            {m.title}
                          </Link>
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            );
          } else if (menu.to === "/services") {
            return (
              <div key={menuIdx} className="text-sm">
                <p
                  onClick={() => toggleMenu(setServiceOpen)}
                  className="flex cursor-pointer items-center px-2 py-2"
                >
                  {lang === "en" ? "Services" : "हाम्रा सेवाहरु"}
                  <ChevronDown
                    strokeWidth={1}
                    className={serviceOpen ? "rotate-180" : ""}
                  />
                </p>
                <ul
                  className={`overflow-hidden px-4 transition-all duration-300 ${serviceOpen ? "max-h-full" : "h-0"}`}
                >
                  {services[lang as keyof typeof services].map(
                    (m, serviceIdx) => (
                      <li key={`service_${serviceIdx}`}>
                        <Link
                          onClick={handleClose}
                          className={`block px-2 py-2 text-sm ${pathname === `/services/${m.to}` && "bg-yellow-600"}`}
                          href={`/services/${m.to}`}
                        >
                          {m.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            );
          } else {
            return (
              <li key={`menu_${menuIdx}`}>
                <Link
                  onClick={handleClose}
                  className={`block px-2 py-2 text-sm ${pathname === menu.to && "bg-yellow-600"}`}
                  href={menu.to}
                >
                  {menu.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
