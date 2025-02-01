import React from "react";
import Link from "next/link";
import { Menu } from "web-monorepo-ui-components";

import { menuConfig } from "@/components/config/menuConfig";
import { theme } from "@/styles/theme";

interface SidebarProps {
    isCollapsed: boolean;
    toggleMenu: () => void;
}

const CustomLink = ({ href, children }) => (
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
