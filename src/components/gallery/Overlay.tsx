"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

const Overlay = ({ gallery }: { gallery: any }) => {
  const galleryObj = JSON.parse(gallery);

  const [overlay, setOverlay] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <div className="grid min-h-screen place-items-center gap-6 md:grid-cols-2 lg:mx-10  xl:grid-cols-3">
      {galleryObj.photos.map((photo: any, idx: number) => (
        <Image
          className="h-[286px] w-full max-w-[426px] cursor-pointer object-cover"
          onClick={() => {
            setCurrent(idx);
            setOverlay(true);
          }}
          key={idx}
          src={photo.url}
          alt="image"
          height={423}
          width={286}
          quality={100}
        />
      ))}

      <AnimatePresence>
        {overlay && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { type: "just" } }}
            exit={{ y: -200, opacity: 0 }}
            className="fixed top-0  z-50 h-screen w-full bg-[rgba(0,0,0,0.9)]"
          >
            <button onClick={() => setOverlay(false)}>
              <X size={32} className="absolute right-3 top-3 z-50 text-white" />
            </button>

            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute left-0 flex  h-full  items-center justify-center">
                <button
                  onClick={() => {
                    setCurrent(
                      (prev) =>
                        (prev - 1 + galleryObj.photos.length) %
                        galleryObj.photos.length,
                    );
                  }}
                >
                  <ChevronLeft size={32} className="text-white" />
                </button>
              </div>
              <div className="absolute right-0 flex h-full items-center justify-center">
                <button
                  onClick={() => {
                    setCurrent((prev) => (prev + 1) % galleryObj.photos.length);
                  }}
                >
                  <ChevronRight size={32} className="text-white" />
                </button>
              </div>

              <img
                className="cursor-pointer"
                src={galleryObj.photos[current].url}
                alt="image"
                height={800}
                width={800}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Overlay;
