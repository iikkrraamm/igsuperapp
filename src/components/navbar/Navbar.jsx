import { NavbarMenu } from "../../mockData/menu.js";
import { FaSuperpowers } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="bg-gray-50 fixed top-0 left-0 right-0 z-50 shadow">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                // Close icon
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Menu icon
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo & Desktop Menu */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                                <FaSuperpowers />
                                <p>IG</p>
                                <p className="text-amber-500">Superapp</p>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {NavbarMenu.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        className="inline-block py-1 px-3 hover:text-amber-500 font-semibold"
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link to="/login">
                            <button className="hover:bg-amber-500 text-amber-500 font-semibold hover:text-white rounded-md border-2 border-amber-500 px-6 py-2 duration-150 hidden md:block">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className={`sm:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="space-y-1 px-2 pt-2 pb-3 transition-opacity duration-300 ease-in-out">
                        {NavbarMenu.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className="block py-1 px-3 hover:text-amber-500 font-semibold"
                                onClick={() => setIsOpen(false)} // optional: close after click
                            >
                                {item.title}
                            </a>
                        ))}
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <div className="mt-2 block px-3 py-2 text-amber-500 hover:bg-amber-500 hover:text-white rounded-md border border-amber-500 font-semibold">
                                Login
                            </div>
                        </Link>
                    </div>
                </div>

            )}
        </nav>
    );
};

export default Navbar;
