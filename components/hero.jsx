"use client"
import { Link } from "react-scroll";
import { useState } from "react";
import EmailForm from "./emailForm";

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {

    const [showEmail, setShowEmail] = useState(false)
    const toggleShowEmail = () => setShowEmail(!showEmail)

    return (
        <div className="big-hero sticky top-0 px-5 flex-col h-full overflow-y xl:mr-5">
            <div className="my-20 self-center">
                <Link to="landing" spy={true} smooth={true} duration={500} className="hover:cursor-pointer">
                    <p className='name text-6xl mb-2'>Sofia Truta</p>
                </Link>
                <p className='text-xl mb-3'>Junior Software Developer</p>

                <div className='flex'>
                    <button className="a rounded-full border border-slate-500 p-2 m-1 ml-0 hover:border-green-100" onClick={toggleShowEmail}><EmailIcon /></button>
                    <a href="https://github.com/SofiaTruta" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 hover:border-green-200"><GitHubIcon /></button></a>
                    <a href="https://www.linkedin.com/in/sofiatruta/" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 hover:border-green-300"><LinkedInIcon /></button></a>
                </div>

                {showEmail && (
                    <div className="modal-overlay">
                        <div className="modal-box relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={toggleShowEmail}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <EmailForm toggleShowEmail={toggleShowEmail} />
                        </div>
                    </div>
                )}

                <nav className="flex my-20 self-start">
                    <ul>
                        <li className="py-2 hover:cursor-pointer">
                            <Link to="about" spy={true} smooth={true} duration={500}>
                                about
                            </Link>
                        </li>
                        <li className="py-2 hover:cursor-pointer">
                            <Link to="technologies" spy={true} smooth={true} duration={500}>technologies</Link>
                        </li>
                        <li className="py-2 hover:cursor-pointer">
                            <Link to="projects" spy={true} smooth={true} duration={500}>projects</Link>
                        </li>
                        <li className="py-2 hover:cursor-pointer">
                            <Link to="experience" spy={true} smooth={true} duration={500}>experience</Link>
                        </li>
                        <li className="py-2 hover:cursor-pointer">
                            <Link to="learning-now" spy={true} smooth={true} duration={500}>learning now</Link>
                        </li>
                        <li className="py-2 hover:cursor-pointer">
                            <Link to="interests" spy={true} smooth={true} duration={500}>interests</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Hero;