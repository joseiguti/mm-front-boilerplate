"use client";

import React from "react";

import { LocaleContext } from "@/components/context/localeContext";
import Layout from "@/components/layout/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
