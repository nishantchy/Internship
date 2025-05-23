import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const publicId = req.nextUrl.searchParams.get("publicId");

    if (!publicId) {
      return NextResponse.json(
        { error: "Public ID is required" },
        { status: 400 },
      );
    }

    // generateSignedUrl is not implemented, so return an error for now
    return NextResponse.json(
      { error: "Download URL generation is not implemented." },
      { status: 500 },
    );
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to generate download URL" },
      { status: 500 },
    );
  }
}
