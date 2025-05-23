import { ReactNode } from "react";
import BackLink from "@/components/admin/committee/BackLink";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <BackLink />
      {children}
    </div>
  );
};

export default layout;
