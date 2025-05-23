"use server";
import { TBranchForm, branchSchema } from "@/schemas/branch.schema";
import Branch from "@/server/models/Branches";
import connectDB from "@/server/utils/connectDB";
import { revalidatePath } from "next/cache";

export const addBranch = async (data: TBranchForm) => {
  const parsedData = branchSchema.safeParse(data);
  if (parsedData.success) {
    try {
      await connectDB();
      const newBranch = new Branch(parsedData.data);
      await newBranch.save();

      revalidatePath("/admin/branches");
      revalidatePath("/branch");
      return {
        success: true,
        message: "New branch has been created successfully.",
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: "Something went wrong. Please contact to respective party.",
      };
    }
  } else {
    return {
      success: false,
      message: "Couldn't parse the data in respective format.",
    };
  }
};

export const deleteBranch = async (id: string) => {
  await connectDB();
  try {
    await Branch.findByIdAndDelete(id);
    revalidatePath("/admin/branches");
    revalidatePath("/branch");
  } catch (err) {
    console.log(err);
  }
};

export const updateBranch = async (id: string, data: TBranchForm) => {
  const parsedData = branchSchema.safeParse(data);
  if (parsedData.success) {
    await connectDB();
    try {
      const res = await Branch.findByIdAndUpdate(id, parsedData.data);
      console.log(res);
      revalidatePath("/admin/branches");
      revalidatePath("/branch");
      return {
        success: true,
        message: "Successuflly updated the branch.",
      };
    } catch (err) {
      return {
        success: false,
        message: "Couldn't update the branch. Please contact respective party.",
      };
    }
  }
  return {
    success: false,
    message: "Couldn't parse the data in respective format.",
  };
};
