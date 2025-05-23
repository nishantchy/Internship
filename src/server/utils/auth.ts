import type { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { getJwtSecretKey } from "./constants";

interface UserJwtPayload {
  jti: string;
  iat: number;
}

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 */
export async function verifyAuth(req: NextRequest) {
  const token = req.cookies.get("_token")?.value;

  if (!token) {
    console.log("No token provided !!");
    return false;
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey()),
    );
    return verified.payload as UserJwtPayload;
  } catch (err) {
    console.log(err);
    return;
  }
}

/**
 * Expires the user token cookie
 */
export function expireUserCookie(res: NextResponse) {
  res.cookies.delete("_token");
  return res;
}
