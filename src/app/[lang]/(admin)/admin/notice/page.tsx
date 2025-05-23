import React from "react";
import DashboardNotice from "./DashboardNotice";
import PopUp from "./PopUp";

const page = () => {
  return (
    <div className="space-y-10">
      <DashboardNotice />
      <PopUp />
    </div>
  );
};

export default page;
