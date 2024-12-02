"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

export const LocaleContext = React.createContext<string>("en");

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    const locale = "en";

    return (
        <html lang={locale}>
        <body>
        <LocaleContext.Provider value={locale}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </LocaleContext.Provider>
        </body>
        </html>
    );
}
