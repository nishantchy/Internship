"use client";
import React, { useState } from "react";

import { SingleNews } from ".";

export const AllNews = ({ data }: { data: any }) => {
  const dataArr = JSON.parse(data);
  console.log(dataArr);
  return (
    <section className="pt-4">
      <div className="bg-center bg-no-repeat  text-white 2xl:container">
        <div className="mx-1 flex flex-col gap-8 rounded-xl text-center 2xl:container sm:mx-8 md:mx-auto md:w-[80%]">
          <p className="text-3xl font-bold capitalize text-primary md:text-4xl xl:text-5xl">
            All News & Activities
          </p>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto">
        <div className="mx-auto w-[80%] py-24">
          {dataArr ? (
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {dataArr.map((d: any, idx: number) => (
                <SingleNews key={idx} news={d} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
