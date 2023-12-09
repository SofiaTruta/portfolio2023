"use client"
import { Link } from 'react-scroll';
import { useRouter } from 'next/navigation'
import { useState } from "react";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const router = useRouter()
    const isLandingPage = router.pathname === '/#landing'

    if (isLandingPage) return null

    return (

        <div className={`relative inline-block text-left ${isLandingPage ? 'hidden' : 'navbar sticky top-2 left-0 right-0 z-50'}`}>
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-300 bg-green-950 hover:bg-neutral-950 focus:outline-none"
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
                    <div className="py-1" onClick={toggleDropdown}>
                        <Link to="about" spy={true} smooth={true} duration={500} className="block px-4 py-2 text-sm text-white hover:bg-gray-100" onClick={toggleDropdown}>About</Link>
                        <Link to="technologies" spy={true} smooth={true} duration={500} className="block px-4 py-2 text-sm text-white hover:bg-gray-100" onClick={toggleDropdown}>Technologies</Link>
                        <Link to="projects" spy={true} smooth={true} duration={500} className="block px-4 py-2 text-sm text-white hover:bg-gray-100" onClick={toggleDropdown}>Projects</Link>
                        <Link to="experience" spy={true} smooth={true} duration={500} className="block px-4 py-2 text-sm text-white hover:bg-gray-100" onClick={toggleDropdown}>Experience</Link>
                        <Link to="learning-now" spy={true} smooth={true} duration={500} className="block px-4 py-2 text-sm text-white hover:bg-gray-100" onClick={toggleDropdown}>Learning Now</Link>
                        <Link to="interests" spy={true} smooth={true} duration={500} className="block px-4 py-2 text-sm text-white hover:bg-gray-100" onClick={toggleDropdown}>Interests</Link>
                    </div>
                </div>
            )}
        </div>

    );
}

export default Nav;