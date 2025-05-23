// app/api/createAdmin/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/server/utils/connectDB";
import Admin from "@/server/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Validate the input
  if (!username || !password) {
    return NextResponse.json(
      { message: "Username and password are required." },
      { status: 400 },
    );
  }

  try {
    await connectDB();

    // Check if the username already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return NextResponse.json(
        { message: "Admin already exists." },
        { status: 400 },
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    return NextResponse.json(
      { message: "Admin created successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
