import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const url = request.nextUrl.clone()
  
  // Exclude the home page, API routes, and static files
  if (
    url.pathname === '/' ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/_next') ||
    url.pathname.includes('.') || // matches static files like .jpg, .css, etc.
    url.pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // Redirect all other requests to the home page
  url.pathname = '/'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
