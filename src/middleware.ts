import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./server/utils/auth";

function isMatchingPath(requestUrl: URL): boolean {
  const urlString = requestUrl.pathname; // Get the pathname from the URL
  const languageCodeLength = 3;
  const pathWithoutLanguage = urlString.substring(languageCodeLength); // Remove language code from the path
  if (pathWithoutLanguage.startsWith("/admin")) {
    return true;
  }
  return false;
}

export async function middleware(req: NextRequest) {
  const lang = req.cookies.get("lang")?.value || "np";
  const pathname = req.nextUrl.pathname;
  const searchParams = req.nextUrl.searchParams;
  const newUrl = new URL(`/${lang}${pathname}`, req.nextUrl);

  if (isMatchingPath(newUrl)) {
    const token = req.cookies.get("_token")?.value;

    if (!token) {
      console.log(req);
      return NextResponse.redirect(req.nextUrl.origin);
    }
    if (token) {
      const isTokenValid = await verifyAuth(req);
      if (!isTokenValid) {
        const redirectUrl = new URL("/login", req.nextUrl.origin);
        return NextResponse.redirect(redirectUrl);
      }
    }
  }

  // Ignores the files path
  if (/\.(png|svg|jpg|webp)$/.test(pathname)) return;
  // Ignore auth route
  if (pathname === "/api/auth") return;

  const res = NextResponse.rewrite(newUrl);
  res.headers.set("searchParams", searchParams.toString());
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
