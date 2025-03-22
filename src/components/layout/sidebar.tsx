import React, { ReactNode } from "react";

import Link from "next/link";
import { Menu } from "mm-front-components";

import { menuConfig } from "@/components/config/menuConfig";
import { theme } from "@/styles/theme";

interface SidebarProps {
    isCollapsed: boolean;
    toggleMenu: () => void;
}

interface CustomLinkProps {
    href: string;
    children: ReactNode;
}

const CustomLink = ({ href, children }: CustomLinkProps) => (
    <Link href={href} passHref legacyBehavior>
        {children}
    </Link>
);

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleMenu }) => {
    return (
        <div style={{ flexShrink: 0 }}>
            <Menu
                config={menuConfig}
                LinkComponent={CustomLink}
                theme={theme}
                isCollapsed={isCollapsed}
                toggleMenu={toggleMenu}
            />
        </div>
    );
};

export default Sidebar;
