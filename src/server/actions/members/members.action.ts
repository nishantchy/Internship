"use server";

import { TServerMember, memberServer } from "@/schemas/member.schema";
import Member from "@/server/models/Member";
import ProvinceMember from "@/server/models/ProvinceMember";
import connectDB from "@/server/utils/connectDB";
import { revalidatePath } from "next/cache";
import { deleteCloudinaryImage } from "../gallery/upload.action";

export const addNewMember = async (data: TServerMember) => {
  const parsedData = memberServer.safeParse(data);
  if (parsedData.success) {
    try {
      await connectDB();
      const newMember = new Member(parsedData.data);
      const res = await newMember.save();
      console.log(res);
      revalidatePath("/admin/committee/bod");
      revalidatePath("/about/bod");
      return {
        success: true,
        message: "Successfully added member.",
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: "Internal Server Error",
      };
    }
  }
  return {
    success: false,
    message: "Invalid data. Please send us valid data",
  };
};

export const addNewProvinceMember = async (data: any) => {
  try {
    await connectDB();
    const newMember = new ProvinceMember(data);
    const res = await newMember.save();
    console.log(res);
    revalidatePath("/admin", "layout");
    revalidatePath("/about", "layout");
    return {
      success: true,
      message: "Successfully added member.",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};

export const updateProvinceMember = async (id: string, data: any) => {
  try {
    await connectDB();
    const updatedMember = await ProvinceMember.findByIdAndUpdate(id, data);
    console.log("UPDATED", updatedMember);
    revalidatePath("/admin", "layout");
    revalidatePath("/about", "layout");
    return {
      success: true,
      message: "Successfully added member.",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};

export const updateMember = async (id: string, data: TServerMember) => {
  console.log(data);
  const parsedData = memberServer.safeParse(data);
  if (parsedData.success) {
    try {
      await connectDB();
      const updatedMember = await Member.findByIdAndUpdate(id, data);
      console.log("UPDATED", updatedMember);
      revalidatePath("/admin/");
      revalidatePath("/about/");
      return {
        success: true,
        message: "Successfully added member.",
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: "Internal Server Error",
      };
    }
  }
  return {
    success: false,
    message: "Invalid data. Please send us valid data",
  };
};

export const deleteMember = async (id: string) => {
  try {
    await connectDB();
    const member = await Member.findById(id);
    await deleteCloudinaryImage(member.image.public_id);
    const deletedMember = await Member.findByIdAndDelete(id);
    console.log("DELETED MEMBER", deletedMember);
    revalidatePath("/admin");
    revalidatePath("/about");
  } catch (err) {
    console.log(err);
  }
};

export const deleteProvinceMember = async (id: string) => {
  try {
    await connectDB();
    const member = await ProvinceMember.findById(id);
    await deleteCloudinaryImage(member.image.public_id);
    const deletedMember = await ProvinceMember.findByIdAndDelete(id);
    console.log("DELETED MEMBER", deletedMember);
    revalidatePath("/admin", "layout");
    revalidatePath("/about", "layout");
  } catch (err) {
    console.log(err);
  }
};
