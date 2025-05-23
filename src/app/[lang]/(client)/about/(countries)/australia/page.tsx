import PersonCard from "@/components/about/PersonCard";
import Member from "@/server/models/Member";
import { notFound } from "next/navigation";
import connectDB from "@/server/utils/connectDB";
import { unstable_noStore as noStore } from "next/cache";

const content = {
  np: "विदेश विभाग (अष्ट्रेलिया)",
  en: "Foreign Department (Australia)",
};

const page = async ({ params }: { params: { lang: string } }) => {
  noStore();
  try {
    await connectDB();
    const members = await Member.find({
      group: "austrilia",
      isChairman: false,
    });
    const chairman = await Member.findOne({
      group: "australia",
      isChairman: true,
    });

    return (
      <div>
        <div
          style={{
            background: "url(/about/bg/bod.webp) center",
            backgroundSize: "",
          }}
          className="flex h-[200px] items-center justify-center md:h-[300px]"
        >
          <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
            {content[params.lang as keyof typeof content]}
          </div>
        </div>

        <div
          style={{
            background:
              "url(/about/bod/dots.svg) no-repeat 5% 5% /8%, url(/about/bod/circleHalf.svg) no-repeat 100% 0% / 10%, url(/about/bod/random.svg) no-repeat 0% 100% /15%, url(/about/bod/circles.svg) no-repeat 50% 95% / 20%",
          }}
          className="pb-32"
        >
          <div className="flex justify-center py-20">
            <PersonCard
              main
              name={chairman.name}
              position={chairman.position}
              public_id={chairman.image.public_id}
            />
          </div>
          <div className="item-center mx-auto flex max-w-[80%] flex-wrap justify-center gap-24">
            {members.map((m, i) => (
              <PersonCard
                name={m.name}
                position={m.position}
                public_id={m.image.public_id}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return notFound();
  }
};

export default page;
