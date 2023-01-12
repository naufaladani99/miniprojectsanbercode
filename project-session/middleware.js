import { NextRequest, NextResponse } from "next/server";

export default function middleware(req, res) {
  //   authorisasi jika sudah login / register
  if (req.nextUrl.pathname.startsWith("/auth/user-login")) {
    if (req.cookies.get("token_user") !== undefined) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/auth/user-register")) {
    if (req.cookies.get("token_user") !== undefined) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  // ====================================================
  if (req.nextUrl.pathname.startsWith("/user/checkout")) {
    if (req.cookies.get("token") === undefined) {
      return NextResponse.redirect(new URL("/auth/user-login", req.url));
    }
  }
}
