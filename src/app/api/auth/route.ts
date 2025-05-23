import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/server/utils/connectDB";
import Admin from "@/server/models/Admin";
import bcrypt from "bcryptjs";

import { nanoid } from "nanoid";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/server/utils/constants";
import { expireUserCookie } from "@/server/utils/auth";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  try {
    await connectDB();
    // Check if the user entered the username and password
    if (!body.username || !body.password) {
      return NextResponse.json(
        {
          message: "Username and Password is required.",
        },
        { status: 401 },
      );
    }

    const user = await Admin.findOne({ username: body.username });

    console.log(user);

    if (user) {
      const isPasswordValid = await bcrypt.compare(
        body.password,
        user.password || "",
      );
      if (isPasswordValid) {
        const token = await new SignJWT({ body })
          .setProtectedHeader({ alg: "HS256" })
          .setJti(nanoid())
          .setIssuedAt()
          .setExpirationTime("2h")
          .sign(new TextEncoder().encode(getJwtSecretKey()));
        const response = NextResponse.json(
          { message: "Logged in successfully" },
          { status: 200 },
        );
        response.cookies.set("_token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 2, // 2 hours in seconds
        });
        return response;
      } else {
        return NextResponse.json(
          { message: "Invalid username or password." },
          { status: 403 },
        );
      }
    }

    return NextResponse.json(
      { message: "Invalid username or password." },
      { status: 403 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const GET = () => {
  const res = new NextResponse();
  expireUserCookie(res);
  return res;
};
