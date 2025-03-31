import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("authToken");

    // const protectedRoutes = ["/sign-up"];

    // if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    //     return NextResponse.redirect(new URL("/login", req.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: "/sign-up"
};
