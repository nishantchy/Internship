"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { FC, ReactNode } from "react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

const dictionary = {
  np: {
    contribution_details: "Contribution details",
    bank_name: "Bank Name",
    acc_name: "Account name",
    acc_no: "Account name",
  },
  en: {
    contribution_details: "योगदान को विवरण",
    bank_name: "बैंकको नाम",
    acc_name: "खाताको नाम",
    acc_no: "खाता नम्बर",
  },
};

const ContributionDialog = () => {
  const lang = "np";
  const dict = dictionary[lang as keyof typeof dictionary];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Donate</Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle>To Donate</DialogTitle>
        </DialogHeader>
        <div className="space-y-10">
          <img src="/globalime.svg" alt="QR image" width={400} height={400} />
          <ul className="min-w-[250px]">
            <li className="flex gap-2">
              <Label>{dict.bank_name} :</Label> Global IME Bank (MID Baneshwor
              Bank)
            </li>
            <li className="flex gap-2">
              <Label>{dict.acc_name} :</Label> Kaudaniya Gotriya Mahasamaj
            </li>
            <li className="flex gap-2">
              <Label>{dict.acc_no} :</Label> 02901010008372
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContributionDialog;
