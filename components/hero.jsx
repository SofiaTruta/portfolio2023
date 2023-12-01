import Link from "next/link";

const Hero = () => {
    return (
        <>
            <div className="w-2/3 pt-10 sticky top-0 max-h-screen">
                <div className="m-10">
                    <p className='text-6xl mb-1'>Sofia Truta</p>
                    <p className='text-3xl mb-3'>Junior Software Developer</p>
                    <div className='flex'>
                        <button className="rounded-full border border-slate-500 p-2">Email</button>
                        <button className="rounded-full border border-slate-500 p-2">GitHub</button>
                        <button className="rounded-full border border-slate-500 p-2">LinkedIn</button>
                    </div>
                </div>
                <nav className="flex m-20">
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
        </>
    );
}

export default Hero;