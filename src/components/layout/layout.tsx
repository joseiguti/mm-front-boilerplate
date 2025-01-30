"use client";

import React, { useState } from "react";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar isCollapsed={isCollapsed} toggleMenu={toggleMenu} />

        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#ffffff",
            overflowY: "auto",
            marginLeft: isCollapsed ? "60px" : "250px",
            transition: "margin-left 0.3s ease",
          }}
        >
          <ChakraProvider value={defaultSystem}>
            <GlobalStyles />
            {children}
          </ChakraProvider>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
