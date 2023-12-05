"use client"
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiArrowDownDropCircle } from '@mdi/js';

const Landing = () => {

    return (
        <div className="px-10 h-screen flex flex-col" id='landing'>
            <div className='flex-grow flex items-start'>
                <div className='w-1/2 mt-10 flex justify-center self-center'>
                    <img
                        src="/images/pic1.png"
                        alt="picture"
                        className='w-2/5 rounded-full border-2'
                    />
                </div>
                <div className='w-1/2 justify-center self-center'>
                    <p className='name text-6xl'>Sofia Truta</p>
                    <TypeAnimation
                        sequence={[
                            "junior software developer", 2000,
                            "rock climber", 2000,
                            "bass player", 2000,
                            "retro gamer", 2000
                        ]}
                        speed={30}
                        repeat={Infinity}
                        deletionSpeed={60}
                        style={{ fontSize: '2em' }}
                    />
                </div>
            </div>
            <div className='self-center justify-self-end mb-10'>
                <Link href="/#about">
                    <button className="rounded-full border border-slate-500 p-2"><Icon path={mdiArrowDownDropCircle} size={1} /></button>
                </Link>
            </div>
        </div>

    );
}

export default Landing;