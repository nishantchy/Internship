"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FileText,
  Newspaper,
  BookImage,
  ScrollText,
  LogOutIcon,
  BookUser,
  MessageCircleMore,
  Settings,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const navsLinks = [
  {
    title: "News & Activities",
    icon: <Newspaper size={20} strokeWidth={1} />,
    to: "/admin/news",
  },
  {
    title: "Gallery",
    icon: <BookImage size={20} strokeWidth={1} />,
    to: "/admin/gallery",
  },
  {
    title: "Manage Documents",
    icon: <FileText size={20} strokeWidth={1} />,
    to: "/admin/documents",
  },
  {
    title: "Notices",
    icon: <ScrollText size={20} strokeWidth={1} />,
    to: "/admin/notice",
  },
  {
    title: "Committees",
    icon: <BookUser size={20} strokeWidth={1} />,
    to: "/admin/committee",
  },
  {
    title: "Voice of Chairman",
    icon: <MessageCircleMore size={20} strokeWidth={1} />,
    to: "/admin/speech",
  },
  {
    title: "Settings",
    icon: <Settings size={20} strokeWidth={1} />,
    to: "/admin/settings",
  },
];

const SideNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    const res = await fetch("/api/auth");
    if (res.ok) {
      router.push("/");
    } else return;
  };

  return (
    <div className="flex h-screen w-[220px] flex-col bg-neutral-100">
      <div>
        <Link className="flex items-center gap-2 p-2" href="/">
          <Image src="/logocopy.png" alt="logo" width={50} height={50} />
          <span className="font-bold text-primary">Baburam Foundation</span>
        </Link>
      </div>

      <div className="mt-8">
        {navsLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.to}
            className={cn(
              "flex w-full cursor-pointer gap-2 px-2 py-3",
              pathname.startsWith(link.to)
                ? "bg-orange-100 "
                : "hover:bg-orange-100",
            )}
          >
            {link.icon} {link.title}
          </Link>
        ))}
      </div>
      <div className="mt-auto pb-4 text-white">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              // variant="destructive"
              className="mx-auto flex w-[80%] gap-2 bg-primary text-white"
            >
              <LogOutIcon size={20} />
              <span>Logout</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout} className="text-white">
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default SideNav;
