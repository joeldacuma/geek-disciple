import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { HeaderNavigationArea, Navbar, Navitem } from "./style";

const MainMenu = ({ allmenuData }) => {
    const menuarr = allmenuData;
    return (
        <HeaderNavigationArea>
            <Navbar className="main-menu">
                {menuarr.map((menu) => {
                    const hasSubmenu = menu.isSubmenu ? true : false;
                    const submenu = menu.submenu;
                    return (
                        <Navitem
                            key={`menu-${menu.id}`}
                            className={`${hasSubmenu ? "has-submenu" : ""}`}
                        >
                            <Link activeClassName="active" to={menu.link}>
                                {menu.text}
                            </Link>
                            {hasSubmenu && (
                                <ul className="submenu-nav">
                                    {submenu.map((submenu, i) => {
                                        return (
                                            <li key={`submenu${i}`}>
                                                <Link to={submenu.link}>
                                                    {submenu.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </Navitem>
                    );
                })}
            </Navbar>
        </HeaderNavigationArea>
    );
};

MainMenu.propTypes = {
    allmenuData: PropTypes.array,
};

export default MainMenu;
