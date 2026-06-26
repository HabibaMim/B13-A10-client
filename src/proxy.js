import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const { pathname } = request.nextUrl;

    if (!session?.user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    const role = session.user.role;

    if (pathname.startsWith('/dashboard/admin') && role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    if (pathname.startsWith('/dashboard/owner') && role !== 'owner') {
        return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    if (pathname.startsWith('/dashboard/tenant') && role !== 'tenant') {
        return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*']
}