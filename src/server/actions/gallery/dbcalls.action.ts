"use server";
import { Gallery, Photo } from "@/server/models/Gallery";
import connectDB from "@/server/utils/connectDB";
import { deleteCloudinaryImage } from "./upload.action";
import { revalidatePath } from "next/cache";

export const addSingleImage = async (title: string, data: any) => {
  if (!title) throw new Error("Title is required");
  try {
    // Connect to the database
    await connectDB();

    console.log(data);
    const { public_id, url } = data;

    // Create a new Photo document
    const newPhoto = new Photo({ public_id, url });

    // Save the new Photo document
    const photo = await newPhoto.save();

    // Find gallery if it is already created
    const gallery = await Gallery.findOne({ title });

    // If the gallery does not exist, create a new one and save it
    if (!gallery) {
      const newGallery = new Gallery({ title });
      newGallery.photos.push(photo._id);
      const savedGallery = await newGallery.save();
      console.log("New Gallery created:", savedGallery);
    } else {
      // If the gallery exists, add the photo to the existing gallery
      gallery.photos.push(photo._id);
      const savedGallery = await gallery.save();
      console.log("Photo added to existing Gallery:", savedGallery);
    }

    console.log("Image added successfully!");
    // Revalidate path
    revalidatePath("/admin/gallery");
    revalidatePath("/gallery");
  } catch (error) {
    console.error("Error adding image:", error);
    throw new Error("Server Error!"); // You might want to handle or log the error in your application
  }
};

export const deleteGallery = async (id: string) => {
  try {
    const existingGallery = await Gallery.findById(id);
    // Delete all photo in this gallery
    const allPhtots = await Photo.find({
      _id: { $in: existingGallery.photos },
    });

    //Loop over each photo and delete from cloudinary
    const promises = allPhtots.map(async (photo) => {
      await deleteCloudinaryImage(photo.public_id);
    });

    await Promise.all(promises);

    //Delete all photos from gallery first
    await Photo.deleteMany({ _id: { $in: existingGallery.photos } });

    // At last delete the gallery
    await Gallery.findByIdAndDelete(id);

    // Revalidate path
    revalidatePath("/admin/gallery");
    revalidatePath("/gallery");
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't delete the gallery");
  }
};
