import React, { ReactNode } from "react";
import "../../globals.css";
import SideNav from "@/components/admin/SideNav";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <ProgressBar />
        <div className="flex">
          <div className="relative">
            <SideNav />
          </div>
          <div className="ml-[250px] min-h-screen flex-1 p-4 2xl:container">
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
};

export default layout;
