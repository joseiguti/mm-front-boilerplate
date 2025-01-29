"use client";

import React from "react";
import Layout from "@/components/layout/layout";
import { LocaleContext } from "@/components/context/localeContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const locale = "en";

    return (
        <html lang={locale} suppressHydrationWarning>
        <body>
        <LocaleContext.Provider value={locale}>
            <Layout>{children}</Layout>
        </LocaleContext.Provider>
        </body>
        </html>
    );
}
