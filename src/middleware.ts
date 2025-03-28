import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";

export default async function middleware(request: Request) {
  const { locales, defaultLocale } = routing;
  const url = new URL(request.url);

  if (url.pathname.startsWith("/_next") || url.pathname.includes(".")) {
    return NextResponse.next();
  }

  const localeFromPath = url.pathname.split("/")[1] as "en" | "es" | undefined;

  if (localeFromPath && locales.includes(localeFromPath)) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const browserLocale = acceptLanguage?.split(",")[0]?.split("-")[0] as
    | "en"
    | "es"
    | undefined;

  const finalLocale =
    browserLocale && locales.includes(browserLocale)
      ? browserLocale
      : defaultLocale;

  return NextResponse.redirect(
    new URL(`/${finalLocale}${url.pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
