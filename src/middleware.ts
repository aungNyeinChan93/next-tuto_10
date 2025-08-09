import { NextRequest, NextResponse } from "next/server";


// auth middleware
export async function middleware(request: NextRequest) {
    const role = 'guest';
    if (role === 'guest') {
        return NextResponse.redirect(new URL('/login', request.url), {
            status: 302,
        })
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/quotes/:path*']
}