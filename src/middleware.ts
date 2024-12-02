import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

console.log('Hola')

export default async function middleware(request: Request) {
    const { locales, defaultLocale } = routing;
    const url = new URL(request.url);

    if (url.pathname.startsWith("/_next") || url.pathname.includes(".")) {
        return NextResponse.next();
    }

    const localeFromPath = url.pathname.split("/")[1];

    if (locales.includes(localeFromPath)) {
        return NextResponse.next();
    }

    const acceptLanguage = request.headers.get("accept-language");
    const browserLocale = acceptLanguage?.split(",")[0]?.split("-")[0];

    const finalLocale = locales.includes(browserLocale) ? browserLocale : defaultLocale;

    return NextResponse.redirect(new URL(`/${finalLocale}${url.pathname}`, request.url));
}

export const config = {
    matcher: ["/((?!api|_next|static|favicon.ico).*)"], // Aplica a todas las rutas excepto estáticas y APIs
};
