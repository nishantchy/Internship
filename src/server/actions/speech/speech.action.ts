"use server";
import { TSpeechSchema, speechSchema } from "@/schemas/speech.schema";
import Speech from "@/server/models/Speech";
import connectDB from "@/server/utils/connectDB";
import { revalidatePath } from "next/cache";

export const addNewSpeech = async (data: TSpeechSchema) => {
  const validatedData = speechSchema.safeParse(data);
  if (validatedData.success) {
    try {
      const { speech } = validatedData.data;
      await connectDB();
      const newSpeech = new Speech({ speech });
      const res = await newSpeech.save();
      console.log("NEW SPEECH:", res);
      revalidatePath("/admin/speech");
      revalidatePath("/about/chairman");
      return {
        success: true,
        message: "Successfully created voice of chairman.",
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: "Internal server error.",
      };
    }
  } else {
    return {
      success: false,
      message: "Invalid data. Please send us valid data.",
    };
  }
};

export const updateSpeech = async (id: string, data: TSpeechSchema) => {
  const validatedData = speechSchema.safeParse(data);
  if (validatedData.success) {
    try {
      const { speech } = validatedData.data;
      await connectDB();
      const res = await Speech.findByIdAndUpdate(id, { speech });
      console.log("EDITED SPEECH:", res);
      revalidatePath("/admin/speech");
      revalidatePath("/about/chairman");
      return {
        success: true,
        message: "Successfully updated voice of chairman.",
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: "Internal server error.",
      };
    }
  } else {
    return {
      success: false,
      message: "Invalid data. Please send us valid data.",
    };
  }
};

export const deleteSpeech = async (id: string) => {
  if (!id) throw new Error("Must have an id.");
  try {
    const res = await Speech.findByIdAndDelete(id);
    console.log("DELETED SPEECH:", res);
    revalidatePath("/admin/speech");
    revalidatePath("/about/chairman");
  } catch (err) {
    console.log(err);
  }
};
