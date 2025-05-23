import React from "react";
import { HomeCarousel, Welcome, Mission, Gallery } from "@/components/home";
import DashboardNotice from "@/server/models/DashboardNotice";
import connectDB from "@/server/utils/connectDB";
import GallaryNotice from "@/components/home/Gallary-Notice";
import Parallax from "@/components/parallax/Parallax";
import WelcomeMsg from "@/components/home/WelcomeMsg";
import RecentNews from "@/components/home/News";
import Publications from "@/components/home/publications/Publication";
import GalleryComp from "@/components/home/NewGallery";
import News from "@/server/models/News";

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  await connectDB();
  const notices = await DashboardNotice.find();

  return (
    <main className="font-nunito">
      {/* {notices && notices.length > 0 && (
        <HomeCarousel notices={JSON.stringify(notices)} />
      )} */}
      <Parallax />
      <WelcomeMsg lang={lang} />
      <RecentNews news={News} lang={lang} />
      <Publications lang={lang} />
      <GalleryComp lang={lang} />

      {/* <Welcome lang={lang} />
      <Mission lang={lang} /> */}

      {/* <Gallery lang={lang} />  */}

      {/* <Message lang={lang} /> */}
      {/* <Gallery lang={lang} /> */}
      {/* <GallaryNotice lang={lang} /> */}
    </main>
  );
};

export default page;
