import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(['de', 'en', 'ru']);

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  // Prüfe, ob die URL schon eine Locale enthält
  if (pathname.startsWith('/de') || pathname.startsWith('/en') || pathname.startsWith('/ru')) {
    return NextResponse.next();
  }
  // Sprache aus Accept-Language-Header ermitteln
  const lang = acceptLanguage.get(request.headers.get('accept-language')) || 'de';
  // Weiterleitung auf die passende Locale
  return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|logo.png|manifest.json|api|public).*)'],
}; 