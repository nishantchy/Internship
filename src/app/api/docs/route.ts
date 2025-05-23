import { NextRequest, NextResponse } from "next/server";
import { documentSchema } from "@/schemas/document.schema";
import { formDataToObject } from "@/lib/form";
import { uploadToCloudinary } from "@/lib/cloudinary";
import Doc from "@/server/models/Document";
import connectDB from "@/server/utils/connectDB";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = formDataToObject(formData);
    const parsedData = documentSchema.safeParse(data);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          message: "Invalid data provided",
          errors: parsedData.error.errors,
        },
        { status: 400 },
      );
    }

    const { doc, title } = parsedData.data;

    // Upload to Cloudinary
    const uploadResult = await uploadToCloudinary(doc);

    // Save to database
    await connectDB();
    const newDoc = new Doc({
      title,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      fileType: doc.type,
    });
    await newDoc.save();

    // Revalidate pages
    revalidatePath("/admin/documents");
    revalidatePath("/documents");

    return NextResponse.json(
      {
        message: "Document uploaded successfully",
        document: newDoc,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in POST /api/docs:", error);
    return NextResponse.json(
      {
        message: "Error uploading document. Please try again later.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const documents = await Doc.find().sort({ createdAt: -1 });

    return NextResponse.json({ documents }, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/docs:", error);
    return NextResponse.json(
      {
        message: "Error fetching documents",
        documents: [],
      },
      { status: 500 },
    );
  }
}
