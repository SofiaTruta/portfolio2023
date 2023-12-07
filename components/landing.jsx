"use client"
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll';
import Icon from '@mdi/react';
import { mdiArrowDownDropCircle } from '@mdi/js';

const Landing = () => {
    return (
        <div className="px-10 h-screen flex flex-col" id='landing'>
            <div className='flex-grow flex flex-col items-center
            '>
                {/* div for image */}
                <div className='justify-center self-center text-center mt-10'>
                    <img
                        src="/images/pic1.png"
                        alt="picture"
                        className='picture rounded-full border-2'
                    />
                </div>
                {/* div for text */}
                <div className='justify-center self-center text-center mt-6
                '>
                    <p className='name text-5xl mb-9'>Sofia Truta</p>
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
                        style={{ fontSize: '1.5em'}}
                    />
                </div>
            </div>
            <div className='self-center justify-self-end mb-10 xl:ml-5'>
                <Link to="about" spy={true} smooth={true} duration={500}>
                    <button className="rounded-full border border-slate-500 p-2 "><Icon path={mdiArrowDownDropCircle} size={1} /></button>
                </Link>
            </div>
        </div>

    );
}

export default Landing;