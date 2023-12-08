"use client"
import { Link } from "react-scroll";


const Hero = () => {
    return (
        <div className="big-hero sticky top-0 px-5 flex-col h-full xl:mr-5">
            <div className="my-20 self-center">
                <Link to="landing" spy={true} smooth={true} duration={500}>
                    <p className=' name text-5xl mb-1'>Sofia Truta</p>
                    <p className='text-xl mb-3'>Junior Software Developer</p>
                </Link>
                <div className='flex'>
                    <button className="rounded-full border border-slate-500 p-2 m-1 ml-0">Email</button>
                    <button className="rounded-full border border-slate-500 p-2 m-1">GitHub</button>
                    <button className="rounded-full border border-slate-500 p-2 m-1">LinkedIn</button>
                </div>

                <nav className="flex my-20 self-start">
                    <ul>
                        <li className="py-2">
                            <Link to="about" spy={true} smooth={true} duration={500}>
                                about
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="technologies" spy={true} smooth={true} duration={500}>technologies</Link>
                        </li>
                        <li className="py-2">
                            <Link to="projects" spy={true} smooth={true} duration={500}>projects</Link>
                        </li>
                        <li className="py-2">
                            <Link to="experience" spy={true} smooth={true} duration={500}>experience</Link>
                        </li>
                        <li className="py-2">
                            <Link to="learning-now" spy={true} smooth={true} duration={500}>learning now</Link>
                        </li>
                        <li className="py-2">
                            <Link to="interests" spy={true} smooth={true} duration={500}>interests</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Hero;