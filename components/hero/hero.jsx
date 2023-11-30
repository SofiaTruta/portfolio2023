const Hero = () => {
    return (
        <>
            <div className="bg-gray-700 w-1/2 pt-10 sticky top-0 max-h-screen">
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
                            <a href="">about</a>
                        </li>
                        <li className="py-2">
                            <a href="">technologies</a>
                        </li>
                        <li className="py-2">
                            <a href="">projects</a>
                        </li>
                        <li className="py-2">
                            <a href="">experience</a>
                        </li>
                        <li className="py-2">
                            <a href="">learning now</a>
                        </li>
                        <li className="py-2">
                            <a href="">interests</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Hero;