"use client"
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-neutral-950 focus:outline-none"
                        id="options-menu"
                    >
                        <svg
                            className="-mr-1 ml-1 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div
                        className="origin-top-right absolute mt-2 w-56 rounded-md bg-green-950"
                        role="menu"
                    >
                        <div className="py-1" role="none">
                            <Link href="/#about" className="block px-4 py-2 text-sm text-white hover:bg-gray-100" role="menuitem">About</Link>
                            <Link href="/#technologies" className="block px-4 py-2 text-sm text-white hover:bg-gray-100" role="menuitem">Technologies</Link>
                            <Link href="/#projects" className="block px-4 py-2 text-sm text-white hover:bg-gray-100" role="menuitem">Projects</Link>
                            <Link href="/#experience" className="block px-4 py-2 text-sm text-white hover:bg-gray-100" role="menuitem">Experience</Link>
                            <Link href="/#learning-now" className="block px-4 py-2 text-sm text-white hover:bg-gray-100" role="menuitem">Learning Now</Link>
                            <Link href="/#interests" className="block px-4 py-2 text-sm text-white hover:bg-gray-100" role="menuitem">Interests</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Nav;