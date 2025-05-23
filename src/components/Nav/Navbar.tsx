"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/logocopy.png";
import { menus, about, committees, aboutBaburam, resources } from "./menuItems";
import Cookie from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

interface MenuItem {
  title: string;
  to: string;
}

const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="relative flex h-6 w-6 flex-col items-center justify-center space-y-1.5 focus:outline-none"
      onClick={onClick}
    >
      <span
        className={`block h-0.5 w-6 transform bg-gray-600 transition duration-300 ease-in-out
          ${isOpen ? "translate-y-2 rotate-45" : ""}`}
      />
      <span
        className={`block h-0.5 w-6 transform bg-gray-600 transition duration-300 ease-in-out
          ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block h-0.5 w-6 transform bg-gray-600 transition duration-300 ease-in-out
          ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
      />
    </button>
  );
};

const Navbar = ({ lang }: { lang: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<string[]>([]);
  const router = useRouter();

  const toggleDropdown = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdowns((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  const getSubMenu = (path: string) => {
    switch (path) {
      case "/about":
        return about[lang as keyof typeof about];
      case "/about-baburam-acharya":
        return aboutBaburam[lang as keyof typeof aboutBaburam];
      case "/resources":
        return resources[lang as keyof typeof resources];
      case "/committees":
        return committees[lang as keyof typeof committees];
      default:
        return null;
    }
  };

  const handleMenuClick = (e: React.MouseEvent, path: string) => {
    if (["/about", "/about-baburam-acharya", "/resources"].includes(path)) {
      e.preventDefault();
    }
  };

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "np" : "en";
    Cookie.set("lang", newLang);
    router.refresh();
  };

  return (
    <div className="sticky top-0 z-30 w-full">
      <nav className="relative w-full bg-white py-4 shadow-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={Logo}
                  alt="Baburam Acharya Foundation"
                  width={84}
                  height={79}
                />
                <span className="text-nameMd font-bold text-primary">
                  {lang === "np"
                    ? "इतिहासशिरोमणि बाबुराम आचार्य स्मृति प्रतिष्ठान"
                    : "Baburam Acharya Memorial Foundation"}
                </span>
              </Link>
            </div>

            <div className="hidden items-center space-x-2 lg:flex">
              {menus[lang as keyof typeof menus].map((item) => (
                <div key={item.title} className="group relative">
                  <div className="flex items-center">
                    <Link
                      href={item.to}
                      onClick={(e) => handleMenuClick(e, item.to)}
                      className="relative flex items-center px-3 py-2 text-navLinks font-semibold text-black hover:text-gray-900 group-hover:text-gray-900"
                    >
                      <span className="relative">
                        {item.title}
                        <span className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-button transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      {getSubMenu(item.to) && (
                        <ChevronDown className="ml-1 h-5 w-5 transform transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </Link>
                  </div>

                  {getSubMenu(item.to) && (
                    <div className="invisible absolute left-0 mt-2 w-48 rounded-md bg-white opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
                      <div className="py-1">
                        {getSubMenu(item.to)?.map((subItem) => (
                          <div
                            key={subItem.title}
                            className="group/sub relative"
                          >
                            <Link
                              href={
                                subItem.to === "/committees"
                                  ? "#"
                                  : item.to + subItem.to
                              }
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {subItem.title}
                              {subItem.to === "/committees" && (
                                <ChevronDown className="h-4 w-4 transform transition-transform duration-300 group-hover/sub:rotate-180" />
                              )}
                            </Link>

                            {subItem.to === "/committees" && (
                              <div className="invisible absolute left-full top-0 mt-0 w-48 rounded-md bg-white opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover/sub:visible group-hover/sub:opacity-100">
                                <div className="py-1">
                                  {committees[
                                    lang as keyof typeof committees
                                  ].map((committee) => (
                                    <Link
                                      key={committee.title}
                                      href={`/committees${committee.to}`}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                      {committee.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={toggleLanguage}
                className="ml-4 rounded-md bg-primary px-3 py-1 text-sm text-white hover:bg-primary/90"
              >
                {lang === "en" ? "नेपाली" : "ENG"}
              </button>
            </div>

            <div className="flex items-center lg:hidden">
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>

        <div
          className={`fixed right-0 top-24 h-[calc(100vh-6rem)] w-64 transform overflow-y-auto bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col">
            {menus[lang as keyof typeof menus].map((item) => (
              <div key={item.title} className="border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.to}
                    onClick={(e) => handleMenuClick(e, item.to)}
                    className="flex-1 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                  {getSubMenu(item.to) && (
                    <button
                      onClick={(e) => toggleDropdown(item.title, e)}
                      className="px-4 py-3"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          activeDropdowns.includes(item.title)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {getSubMenu(item.to) &&
                  activeDropdowns.includes(item.title) && (
                    <div className="animate-slideDown bg-gray-50">
                      {getSubMenu(item.to)?.map((subItem) => (
                        <div key={subItem.title}>
                          <div className="flex items-center justify-between">
                            <Link
                              href={
                                subItem.to === "/committees"
                                  ? "#"
                                  : item.to + subItem.to
                              }
                              className="flex-1 px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                            >
                              {subItem.title}
                            </Link>
                            {subItem.to === "/committees" && (
                              <button
                                onClick={(e) =>
                                  toggleDropdown(`${item.title}-committees`, e)
                                }
                                className="px-4 py-2"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transform transition-transform duration-200 ${
                                    activeDropdowns.includes(
                                      `${item.title}-committees`,
                                    )
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>
                          {subItem.to === "/committees" &&
                            activeDropdowns.includes(
                              `${item.title}-committees`,
                            ) && (
                              <div className="animate-slideDown bg-gray-100">
                                {committees[
                                  lang as keyof typeof committees
                                ].map((committee) => (
                                  <Link
                                    key={committee.title}
                                    href={`/committees${committee.to}`}
                                    className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-200"
                                  >
                                    {committee.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <button
              onClick={toggleLanguage}
              className="m-4 rounded-md bg-primary px-3 py-2 text-center text-white hover:bg-primary/90"
            >
              {lang === "en" ? "नेपाली" : "ENG"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
