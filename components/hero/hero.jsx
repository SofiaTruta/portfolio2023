import Icon from '@mdi/react'
import { mdiEmail } from '@mdi/js'

const Hero = () => {
    return (
        <>
            <div className='top-0 flex max-h-screen w-1/2 flex-col justify-between py-24'>
                <p className='text-6xl'>Sofia Truta</p>
                <p className='text-4xl'>Junior Software Developer</p>
                <div className='flex'>
                    <i className="devicon-google-plain"></i>
                    <i className="devicon-github-original"></i>
                    <i className="devicon-linkedin-plain"></i>
                </div>

                <nav>
                    <div className='vertical-line'></div>
                 
                </nav>
            </div>
        </>
    );
}

export default Hero;