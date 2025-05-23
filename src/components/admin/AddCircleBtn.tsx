import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

const AddCircleBtn = ({ title, href }: { title: string; href: string }) => {
  return (
    <Button
      title={title}
      size="icon"
      className="absolute bottom-3 right-3 rounded-full"
      asChild
    >
      <Link href={href}>
        <PlusIcon />
      </Link>
    </Button>
  );
};

export default AddCircleBtn;
