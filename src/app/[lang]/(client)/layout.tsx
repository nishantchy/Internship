import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
// import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import DesktopNav from "@/components/Nav/DesktopNav";
import dynamic from "next/dynamic";
import Footer from "@/components/NewFooter";
import { Toaster } from "@/components/ui/toaster";

const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});

import PopupNotice from "@/server/models/PopupNotice";
import connectDB from "@/server/utils/connectDB";
import Navbar from "@/components/Nav/Navbar";
const NoticeOverlay = dynamic(() => import("@/components/Notice"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baburam Foundation",
  description: "Federation of Baburam Society",
};

export default async function RootLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  await connectDB();
  const { lang } = params;
  const notices = await PopupNotice.find().sort({ createdAt: -1 });

  return (
    <html className="scroll-smooth" lang={lang}>
      <body className={inter.className + " " + "relative bg-background"}>
        <ProgressBar />

        {notices &&
          notices.length > 0 &&
          notices.map((notice) => (
            <NoticeOverlay key={notice._id} imgurl={notice.image.secure_url} />
          ))}
        <main className="">
          {/* <Header />
          <DesktopNav lang={lang} /> */}
          <Navbar lang={lang} />
          {children}
          {/* <Footer lang={lang} /> */}
          <Footer lang={lang} />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
