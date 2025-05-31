import { NextResponse, type NextRequest } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import { Session } from "@repo/auth/better-auth/auth";
import { ROUTES, CORS, URL as AppURL } from "./lib/config";

export default async function middleware(req: NextRequest) {
    // Check the origin from the request
    const origin = req.headers.get('origin') ?? '';
    const pathName = req.nextUrl.pathname;
    const isAllowedOrigin = CORS.ALLOWED_ORIGINS.includes(origin);
    
    let isLoggedIn = false;
    
    try {
        // Get the full URL for the API request
        const baseUrl = AppURL.BASE || req.nextUrl.origin; // Try env var first, fallback to request origin
        const { data: session } = await betterFetch<Session>(
            "/api/auth/get-session",
            {
                baseURL: baseUrl,
                headers: {
                    cookie: req.headers.get("cookie") ?? "",
                },
                timeout: 5000, // Add a 5 second timeout
            }
        );
        isLoggedIn = !!session;
    } catch (error) {
        console.error("Error fetching session:", error);
        // Continue with isLoggedIn as false
    }

    // Handle preflighted requests
    const isPreflight = req.method === 'OPTIONS';
    
    if (isPreflight) {
        const preflightHeaders = {
            ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
            ...CORS.OPTIONS,
        };
        return NextResponse.json({}, { headers: preflightHeaders });
    }

    const response = NextResponse.next();

    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin);
    }
     
    Object.entries(CORS.OPTIONS).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    const isApiAuthRoute = pathName.startsWith(ROUTES.API_AUTH_PREFIX);
    const isPublicRoute = ROUTES.PUBLIC.some((route) => pathName.startsWith(route));
    const isAuthRoute = ROUTES.AUTH.some((route) => route === pathName);

    if (isApiAuthRoute) {
        return response;
    }

    if (isPublicRoute) {
        return response;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL('/', req.nextUrl));
        }
        return response;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/landing', req.nextUrl));
    }

    return response;
}

export const config = {
    matcher: ['/((?!.+\.[\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};