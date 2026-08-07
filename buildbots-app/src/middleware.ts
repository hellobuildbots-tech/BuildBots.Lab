import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define protected routes
  const isStudentRoute = path.startsWith('/dashboard') || path.startsWith('/lessons');
  const isTeacherRoute = path.startsWith('/teacher');
  const isParentRoute = path.startsWith('/parent');

  // Placeholder authentication validation for protected routes
  const token = request.cookies.get('sb-access-token')?.value;

  if ((isStudentRoute || isTeacherRoute || isParentRoute) && !token) {
    // Graceful redirection or access allowing for demo routing
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/lessons/:path*', '/teacher/:path*', '/parent/:path*', '/settings/:path*'],
};
