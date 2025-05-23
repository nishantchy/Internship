import { Mail, Navigation } from "lucide-react";
import React from "react";
import Branch from "@/server/models/Branches";
import connectDB from "@/server/utils/connectDB";

const BranchCard = async ({
  name,
  manager,
  phone,
  email,
}: {
  name: string;
  manager: string;
  phone: string;
  email: string;
}) => {
  await connectDB();
  const branches = await Branch.find();
  console.log(branches);
  return (
    <div
      style={{
        background:
          "url(/branches/dots.svg) top left no-repeat, url(/branches/triangleRight.svg) 80% 5% no-repeat, url(/branches/triangleUp.svg) 95% 95% no-repeat, #E0E0E0",
        backgroundSize: "30% 30%, auto auto, auto auto",
      }}
      className="flex w-fit min-w-[300px] flex-col items-center justify-center rounded-xl p-4 text-center"
    >
      <div className="px-12 py-4">
        <h2 className="text-2xl font-semibold text-[#BA0000]">{name}</h2>
        <h3 className="text-xl font-semibold text-[#015739]">{manager}</h3>
        <p>Branch Manager</p>
        <p className="font-medium">{phone}</p>
        <p>
          <Mail size={16} className="inline-block" /> {email}
        </p>
      </div>
      {/* <div className="w-full">
          <div className="w-fit rounded-full bg-[#0061ff] p-3 text-white">
            <span>
              <Navigation fill="white" />
            </span>
          </div>
        </div> */}
    </div>
  );
};

const page = async () => {
  await connectDB();
  const branches = await Branch.find();
  console.log(branches);

  return (
    <div>
      <div
        style={{
          background: "url(/branches/bg.webp) center",
          backgroundSize: "",
        }}
        className="flex h-[200px] items-center justify-center md:h-[500px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          हाम्रो शाखाहरु:
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 px-4 py-6 md:px-20 md:py-20">
        {branches &&
          branches.length > 0 &&
          branches.map((branch) => (
            <BranchCard
              key={branch._id}
              name={branch.name}
              manager={branch.manager}
              phone={branch.phone}
              email={branch.email}
            />
          ))}
      </div>
    </div>
  );
};

export default page;
