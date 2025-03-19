import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Deals", path: "/deals" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-white py-7 fixed w-full top-0 z-20">
            <div className="custom-container flex justify-between items-center">
                <div className="text-3xl font-bold text-gray-800">
                    <NavLink to={menuItems[0].path}> Sneaker Shop</NavLink>
                </div>
                <nav className="space-x-4 sm:space-x-8 text-lg">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                `font-medium ${
                                    isActive
                                        ? "text-gray-900 border-b-2 border-gray-900"
                                        : "text-gray-600"
                                } hover:text-gray-900`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
                <div className="flex space-x-4 sm:space-x-8 items-center text-lg">
                    <div className="search-container">
                        <i className="fas fa-search text-gray-600 hover:text-gray-900 search-icon" />
                        <input
                            type="text"
                            className="search-input text-black"
                            placeholder="Search"
                        />
                    </div>
                    <NavLink to="/cart">
                        <i className="fas fa-shopping-cart text-gray-600 cursor-pointer hover:text-gray-900" />
                    </NavLink>
                    <NavLink to="/user">
                        <i className="fas fa-user text-gray-600 cursor-pointer hover:text-gray-900" />
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
