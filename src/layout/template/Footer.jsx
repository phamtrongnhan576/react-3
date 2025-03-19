import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-12">
            <div className="custom-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-6 uppercase tracking-wide text-white">
                            Customer Care
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Call Now 800 227 8437
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 uppercase tracking-wide text-white">
                            Our Company
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Find a Boutique
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Responsibility
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 uppercase tracking-wide text-white">
                            Legal Area
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Conditions of Sale
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Credits
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 uppercase tracking-wide text-white">
                            Follow Us
                        </h3>
                        <div className="flex sm:flex-row sm:items-center sm:space-x-4 mb-6">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    <i className="fab fa-instagram text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    <i className="fab fa-facebook-f text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    <i className="fab fa-twitter text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    <i className="fab fa-youtube text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    <i className="fab fa-pinterest text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                    © 2025 Sneaker Store. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
