"use server";
import { vacancySchema, TVacancyForm } from "@/schemas/vacancy.schema";
import Vacancy from "@/server/models/Vacancy";
import connectDB from "@/server/utils/connectDB";
import { revalidatePath } from "next/cache";

export const createNewVacancy = async (data: TVacancyForm) => {
  const parsedData = vacancySchema.safeParse(data);
  if (parsedData.success) {
    try {
      await connectDB();
      const newVacancy = new Vacancy(data);
      await newVacancy.save();
      revalidatePath("/admin/vacancy");
      revalidatePath("/careers");
      return { success: true, message: "Successfully created new vacancy." };
    } catch (err) {
      console.log(err);
      return { success: false, message: "Internal server error !!" };
    }
  } else {
    return { success: false, message: "Please send valid data" };
  }
};

export const updateVacancy = async (id: string, data: TVacancyForm) => {
  console.log(data);
  if (!id) return { success: false, message: "Id is required." };
  const parsedData = vacancySchema.safeParse(data);

  if (parsedData.success) {
    try {
      const edited = await Vacancy.findByIdAndUpdate(id, data);
      console.log("EDITED VACANCY:", edited);

      revalidatePath("/admin/vacancy");
      revalidatePath("/careers");
      return { success: true, message: "Successfylly edited the vacancy." };
    } catch (err) {
      console.log(err);
      return { success: false, message: "Internal server error." };
    }
  } else {
    return { success: false, message: "Please send us a valid data." };
  }
};

export const deleteVacancy = async (id: string) => {
  try {
    await connectDB();
    const deletedVacancy = await Vacancy.findByIdAndDelete(id);
    console.log("DELETED VACANCY:", deletedVacancy);
    revalidatePath("/admin/vacancy");
    revalidatePath("/careers");
  } catch (error) {
    console.log(error);
  }
};
