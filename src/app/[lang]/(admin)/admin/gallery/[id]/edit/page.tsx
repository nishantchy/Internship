"use client";
import React from "react";
import { Save, X } from "lucide-react";
import { H2 } from "@/components/typography";
import { Button } from "@/components/ui/button";

const data = [1, 3, 4, 5, 6, 7, 8];

const page = () => {
  return (
    <div>
      <H2 className="py-5">Gallery Title</H2>
      <div className="flex flex-wrap gap-2">
        {data.map((f, idx) => (
          <div className="relative">
            <img
              key={idx}
              src="https://images.unsplash.com/photo-1705833600877-bf0e3865fdd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[200px] w-[300px] object-cover"
              height={300}
              width={200}
            />
            <button
              onClick={() => { }}
              className="absolute right-0 top-0 rounded-full bg-red-600 p-1 text-white"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
      <div>
        <Button>
          <Save /> Update
        </Button>
      </div>
    </div>
  );
};

export default page;
