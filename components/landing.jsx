"use client"
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';

const Landing = () => {

    return (
        <div className="px-10 h-screen grid grid-cols-2 grid-rows-3" id='landing'>
            <div className='row-span-2 justify-self-center self-center'>
                <p className='text-8xl'>Sofia Truta</p>
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
            <div className='row-span-2 self-end'>
                <img src="/images/pic2.png"
                    alt="picture"
                    className='picture'
                />
            </div>
            <div className='col-span-2 self-end justify-self-center pb-7'>
                <Link href="/#about"><button className="rounded-full border border-slate-500 p-2">down</button></Link>
            </div>
        </div>
    );
}

export default Landing;