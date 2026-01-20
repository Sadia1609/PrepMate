import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // ✅ protect only dashboard routes
  const isDashboard = pathname.startsWith("/dashboard");
  if (!isDashboard) return NextResponse.next();

  const authCookie = request.cookies.get("auth");
  const isLoggedIn = authCookie?.value === "true";

  if (!isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    // Add redirect parameter so login knows where to go back
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
