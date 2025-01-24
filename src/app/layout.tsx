"use client";

import React, { useState } from 'react';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import { Menu } from "web-monorepo-ui-components";


export const LocaleContext = React.createContext<string>("en");

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const locale = "en";

    const customConfig = {
        logo: 'https://example.com/my-logo.png',
        items: [
            {
                label: 'Home',
                icon: 'HomeIcon',
                link: '/',
                children: [
                    { label: 'Sub Home 1', link: '/sub-home-1' },
                    { label: 'Sub Home 2', link: '/sub-home-2' },
                ],
            },
            { label: 'Settings', icon: 'SettingsIcon', link: '/settings' },
        ],
    };
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleMenu = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <html lang={locale} suppressHydrationWarning>
        <body>
        <LocaleContext.Provider value={locale}>

            <ThemeProvider theme={theme}>

                <div style={{display: 'flex', height: '100vh'}}>
                    <div style={{flexShrink: 0}}>
                        <Menu config={customConfig} theme={theme}  isCollapsed={isCollapsed} toggleMenu={toggleMenu}/>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            padding: '20px',
                            backgroundColor: '#ffffff',
                            overflowY: 'auto',
                            marginLeft: isCollapsed ? '60px' : '250px',
                            transition: 'margin-left 0.3s ease',
                        }}
                    >
                        <ChakraProvider value={defaultSystem}>

                            <GlobalStyles/>
                            {children}
                        </ChakraProvider>
                    </div>
                </div>

            </ThemeProvider>
        </LocaleContext.Provider>
        </body>
        </html>
    );
}
