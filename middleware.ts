import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	
	// Public routes that don't require authentication
	const publicRoutes = ["/", "/sign-in", "/sign-up", "/track"];
	const isPublicRoute = publicRoutes.some(route => 
		pathname.startsWith(route) || pathname.startsWith("/api/track")
	);

	// If it's a public route, allow access
	if (isPublicRoute) {
		return NextResponse.next();
	}

	// For protected routes (dashboard), check if user has a session cookie
	const sessionCookie = getSessionCookie(request);

    // THIS IS NOT SECURE!
    // This is the recommended approach to optimistically redirect users
    // We recommend handling auth checks in each page/route
	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder
		 */
		"/((?!_next/static|_next/image|favicon.ico|public).*)",
	],
};
