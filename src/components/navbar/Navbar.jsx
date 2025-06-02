import {NavbarMenu} from "../../mockData/menu.js";
import {FaSuperpowers} from "react-icons/fa";
import {MdMenu} from "react-icons/md";
import React from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return(
        <nav className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-amber-500 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                            <svg
                                className="block size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                            <svg
                                className="hidden size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
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
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                {
                                    NavbarMenu.map((item) => {
                                        return (
                                            <a key={item.id} href={item.link} aria-current="true" className="inline-block py-1 px-3 hover:text-amber-500 font-semibold">{item.title}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="hover:bg-amber-500 text-amber-500 font-semibold hover:text-white rounded-md border-2 border-amber-500 px-6 py-2 duration-150 hidden md:block" onClick={()=>window.location.href = "/login"}>
                            Login
                        </button>
                        {/* Profile dropdown */}

                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    {
                        NavbarMenu.map((item) => {
                            return (
                                <a key={item.id} href={item.link} className="block py-1 px-3 hover:text-amber-500 font-semibold">{item.title}</a>
                            )
                        })
                    }
                </div>
            </div>
        </nav>

    )
}

export default Navbar;