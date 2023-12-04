"use client"
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';

const Landing = () => {

    return (
        <div className="px-10 h-screen flex flex-col" id='landing'>
            <div className='w-1/3 h-screen bg-green-950 fixed z-0'></div>
            <div className='flex-grow flex items-start'>
                <div className='w-1/2 mt-10 self-center z-50'>
                    <img
                        src="/images/pic1.png"
                        alt="picture"
                        className='w-1/2 rounded-full'
                    />
                </div>
                <div className='w-1/2 mt-40 ml-10 self-center'>
                    <p className='text-8xl'>Sofia Truta</p>
                    <TypeAnimation
                        sequence={[
                            "junior software developer", 2000,
                            "rock climber", 2000,
                            "bass player", 2000,
                            "retro gamer", 2000
                        ]}
                        speed={30}
                        repeat={1}
                        deletionSpeed={60}
                        style={{ fontSize: '2em' }}
                    />
                </div>
            </div>
            <div className='self-center justify-self-end mb-10'>
                <Link href="/#about">
                    <button className="rounded-full border border-slate-500 p-2">down</button>
                </Link>
            </div>
        </div>

    );
}

export default Landing;