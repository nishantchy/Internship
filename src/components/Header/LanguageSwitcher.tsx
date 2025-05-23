"use client";
import React from "react";
import { setCookie } from "@/lib/cookies";
import { useRouter } from "next/navigation";

const LanguageSwitcher = ({ lang }: { lang: string }) => {
  const router = useRouter();
  const switchLanguage = () => {
    if (lang === "np") {
      setCookie("lang", "en", 100);
      router.refresh();
      return;
    }
    setCookie("lang", "np", 100);
    router.refresh();
    return;
  };

  return (
    <div className="flex items-center gap-4 text-sm md:pt-4 md:text-base">
      {lang === "en" ? (
        <button onClick={switchLanguage}>🇳🇵 Nepali</button>
      ) : (
        <button onClick={switchLanguage}>🇬🇧 English</button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
