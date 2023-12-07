"use client"
import Link from "next/link";
import Nav from "./smallNav";

const Hero = () => {
    return (
        <>
            <Nav />
            <div className="big-hero pt-10 sticky top-0 max-h-screen flex-col xl:mr-5">
                <div className="my-10 self-center">
                    <Link href="/#landing">
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
                                <Link href="/#about">about</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/#technologies">technologies</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/#projects">projects</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/#experience">experience</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/#learning-now">learning now</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/#interests">interests</Link>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>
        </>
    );
}

export default Hero;