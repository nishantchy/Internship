import { NextRequest, NextResponse } from "next/server";
import { generateSignedUrl } from "@/server/actions/document/constants";

export async function GET(req: NextRequest) {
  try {
    const publicId = req.nextUrl.searchParams.get("publicId");

    if (!publicId) {
      return NextResponse.json(
        { error: "Public ID is required" },
        { status: 400 },
      );
    }

    const signedUrl = await generateSignedUrl(publicId);

    if (!signedUrl) {
      return NextResponse.json(
        { error: "Failed to generate download URL" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: signedUrl });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to generate download URL" },
      { status: 500 },
    );
  }
}
