import React from "react";
import { MenuItems } from "./MenuItems";

export const MobileMenu = ({ onMenuToggle, withoutEvents }) => (
    <div className="mobile-menu">
        <MenuItems withoutEvents={withoutEvents} onMenuToggle={onMenuToggle} />
    </div>
);
