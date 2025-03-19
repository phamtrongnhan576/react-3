import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
    return (
        <nav className="my-7">
            <div className="container mx-auto">
                <ol className="flex items-center space-x-2 text-lg font-medium">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {index > 0 && (
                                <span className="mx-2 text-gray-400">/</span>
                            )}
                            {item.link ? (
                                <Link
                                    to={item.link}
                                    className="text-gray-500 hover:text-black"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-black font-medium">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;
