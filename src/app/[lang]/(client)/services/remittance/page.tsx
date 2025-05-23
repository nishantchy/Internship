import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div
        style={{
          background: "url(/services/remittance/bg.webp) center",
          backgroundSize: "cover",
        }}
        className="flex h-[200px] items-center justify-center md:h-[500px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          हाम्रो रेमिट्यान्स सुबिधाहरु
        </div>
      </div>

      <div className="mx-auto flex flex-wrap items-center justify-center gap-y-8 py-20 lg:w-3/4">
        <Image
          src="/home/remmitance/imepay.svg"
          alt="imepay"
          width={300}
          height={40}
        />

        <Image
          src="/home/remmitance/imeremmitance.svg"
          alt="imepay"
          width={300}
          height={40}
        />

        <Image
          src="/home/remmitance/westernunion.svg"
          alt="imepay"
          width={300}
          height={40}
        />
      </div>
    </div>
  );
};

export default page;
