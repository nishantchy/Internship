"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { menus, services, about, foreign, provinceMenu } from "./menus";
import MobileNav from "./MobileNav2";

const DesktopNav = ({ lang }: { lang: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <MobileNav lang={lang} />
      <nav className="sticky top-0 z-10 hidden w-full items-center justify-center bg-primary px-8 py-5 text-white md:flex lg:font-semibold">
        <ul className="flex items-center gap-4 text-xs md:text-sm xl:gap-12">
          {menus[lang as keyof typeof menus].map((m, idx) =>
            m.to === "/services" ? (
              <DropdownMenu key={idx + 322}>
                <DropdownMenuTrigger className="flex outline-none">
                  {m.title} <ChevronDown size={18} strokeWidth={1} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {services[lang as keyof typeof services].map((s, idx) => (
                    <DropdownMenuItem asChild key={idx}>
                      <Link
                        className="h-full w-full"
                        href={`/services/${s.to}`}
                      >
                        {s.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : m.to === "/about" ? (
              <DropdownMenu key={idx + 444}>
                <DropdownMenuTrigger className="flex outline-none">
                  {m.title} <ChevronDown size={18} strokeWidth={1} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {about[lang as keyof typeof about].map((a, idx) =>
                    a.to === "/foreign" ? (
                      <DropdownMenuSub key={idx}>
                        <DropdownMenuSubTrigger>
                          {a.title}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {foreign[lang as keyof typeof foreign].map(
                              (menu: any, idx: number) => (
                                <DropdownMenuItem key={idx} asChild>
                                  <Link
                                    className="h-full w-full"
                                    href={`/about/${menu.to}`}
                                  >
                                    {menu.title}
                                  </Link>
                                </DropdownMenuItem>
                              ),
                            )}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    ) : a.to === "/province" ? (
                      <DropdownMenuSub key={idx}>
                        <DropdownMenuSubTrigger>
                          {a.title}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {provinceMenu[
                              lang as keyof typeof provinceMenu
                            ].map((menu: any, idx: number) => (
                              <DropdownMenuItem key={idx} asChild>
                                <Link
                                  className="h-full w-full"
                                  href={`/about/province/${menu.to}`}
                                >
                                  {menu.title}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    ) : (
                      <DropdownMenuItem asChild key={idx + 3232}>
                        <Link className="h-full w-full" href={`/about/${a.to}`}>
                          {a.title}
                        </Link>
                      </DropdownMenuItem>
                    ),
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <li key={idx + 555}>
                <Link
                  href={m.to}
                  className={`${styles.link} ${
                    pathname === m.to ? styles.active : null
                  } relative pb-1`}
                >
                  {m.title}
                </Link>
              </li>
            ),
          )}
          <li>
            <Link
              className="block rounded-md border-2 px-4 py-2 text-xs transition-all duration-300 hover:bg-white hover:text-primary"
              href="/contact"
            >
              {lang === "en" ? <span>Contact Us</span> : "सम्पर्क गर्नुहोस"}
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center uppercase"
            onClick={() => {
              if (lang == "np") {
                Cookie.set("lang", "en");
                router.refresh();
              } else {
                Cookie.set("lang", "np");
                router.refresh();
              }
            }}
          >
            <img
              src={lang !== "np" ? "/nep.svg" : "/eng.svg"}
              height={24}
              width={24}
              alt=""
            />
            {lang === "np" ? "en" : "np"}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
