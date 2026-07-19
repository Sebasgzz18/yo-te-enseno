import { NextResponse, type NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import {
  studentSessionOptions,
  staffSessionOptions,
  type StudentSessionData,
  type StaffSessionData,
} from "@/lib/auth/session-config";

export const config = {
  matcher: ["/portal/:path*", "/admin/:path*"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/portal")) {
    if (pathname === "/portal/login") return NextResponse.next();

    const response = NextResponse.next();
    const session = await getIronSession<StudentSessionData>(
      request,
      response,
      studentSessionOptions
    );
    if (!session.isLoggedIn) {
      return NextResponse.redirect(new URL("/portal/login", request.url));
    }
    return response;
  }

  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") return NextResponse.next();

    const response = NextResponse.next();
    const session = await getIronSession<StaffSessionData>(
      request,
      response,
      staffSessionOptions
    );
    if (!session.isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return response;
  }

  return NextResponse.next();
}
