import { v2 as cloudinary } from "cloudinary";

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  resource_type: string;
  format: string;
  width?: number;
  height?: number;
  bytes: number;
  created_at: string;
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (
  file: File,
): Promise<CloudinaryResponse> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Data = buffer.toString("base64");

    const result = await new Promise<CloudinaryResponse>((resolve, reject) => {
      cloudinary.uploader.upload(
        `data:${file.type};base64,${base64Data}`,
        {
          folder: "documents",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          if (result) resolve(result as CloudinaryResponse);
        },
      );
    });

    return result;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw error;
  }
};
