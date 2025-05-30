import React from "react";
import Link from "next/link";
import { H1 } from "../typography";
import { homeDictionary } from "@/dictionary/home";
import { Button } from "../ui/button";
import Image from "next/image";

export const Welcome = ({ lang }: { lang: string }) => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container px-4 md:flex md:space-x-8 lg:px-8">
        <H1 className="lg:hiddenlg:text-4xl mb-8 block text-center text-3xl font-semibold md:hidden md:text-3xl">
          Kaundinya Rishi
        </H1>
        <div className="mb-8 flex-shrink-0 md:mb-0">
          <Image
            alt="Kaundinya Rishi"
            src="/rishi/rishi.svg"
            height={500}
            width={600}
            className="h-[200px] w-full rounded-md md:h-[400px] md:w-[400px] lg:h-[350px] lg:w-[400px]"
          />
        </div>
        <div className="flex-1 space-y-4 md:space-y-6">
          <H1 className="hidden text-2xl font-semibold md:block md:text-3xl lg:block lg:text-4xl">
            {homeDictionary[lang as keyof typeof homeDictionary].welcome}
          </H1>
          <p
            className={`text-justify ${lang === "en" ? "text-base" : "text-lg"} leading-8 md:text-justify md:text-[14px] md:leading-8 lg:text-justify lg:text-lg lg:text-lg lg:leading-8`}
          >
            {homeDictionary[lang as keyof typeof homeDictionary].welcomeContent}
          </p>
          <Button asChild variant="outline" className="border-primary">
            <Link
              href="/kaudinya-rishi"
              className="block py-3 text-center text-lg text-primary md:py-4 md:text-xl"
            >
              View More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
