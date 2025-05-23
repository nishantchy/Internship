import Speech from "@/server/models/Speech";
import { notFound } from "next/navigation";
import React from "react";
import EditSpeechForm from "./EditForm";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const speech = await Speech.findById(id);
  try {
    if (speech) {
      return (
        <div>
          <EditSpeechForm data={JSON.stringify(speech)} />
        </div>
      );
    } else {
      return <></>;
    }
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
