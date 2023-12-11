"use client"
import { useEffect } from "react";

const Projects = () => {
    useEffect(() => {
        //what the observer does
        const handleAnimations = (entries, observer) =>{
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate')
                    observer.unobserve(entry.target)
                }
            })
        }
    

    if(typeof window !== 'undefined' && 'IntersectionObserver' in window){ //checks if you are in a window and if the browser supports IntersectionObserver

        const observer = new IntersectionObserver(handleAnimations, { threshold: 0.3}) 
        //three arguments for the observer - a function, threshold, rootMargin
        
        //threshold by default is 0 - how much of my element is on the page. can conflict with margins, so watch out

        //there is also a rootMargin arg which is default 0 which tells where to fire it, rather than just the viewport. just like a margin in CSS. has to be pixels or percentages

        const animatedElements = document.querySelectorAll('.animated-element')

        animatedElements.forEach(element =>{
            observer.observe(element)
        })

        return () => {
            animatedElements.forEach(element => {
                observer.unobserve(element)
            })
        }
    }
    }, [])

    return (
        <div id="projects" className="py-20">
            <div>
                <p className="name text-4xl font-bold mb-5">projects</p>
            </div>
            <div>
                <div className="mb-10 flex flex-col p-1 animate-moveUpwards animated-element">
                    <p className="text-xl font-bold mb-2">8 bit reviews</p>
                    <p className="text-base leading-relaxed mb-2 xl:text-lg">A video game review website, made using JavaScript (React) on the frontend, Python (Django) with a Postgresql database for the backend and OpenCritic&apos;s API for game data fetching.</p>
                    <p className="text-base leading-relaxed mb-2 xl:text-lg">A solo project developed over 1 week, part of General Assembly&apos;s Software Engineering Immersive bootcamp.</p>
                    <p className="text-base leading-relaxed mb-2 xl:text-lg">Has your favourite video game been added already?</p>
                    <div className="inline-flex">
                        <a href="https://github.com/SofiaTruta/8bitreviews-frontend" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 ml-0 hover:border-green-200">GitHub</button></a>
                        <a href="https://8bitreviews-frontend-production.up.railway.app/" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 hover:border-green-200">Website</button></a>
                    </div>
                    <div className="mt-5 mx-auto">
                        <video controls width="560" height="400" src="/videos/p4.mp4" type="video/mp4" muted></video>
                    </div>
                </div>

                <div className="mb-10 flex flex-col p-1 animate-moveUpwards animated-element">
                    <p className="text-xl font-bold mb-2">Fitnomenal</p>
                    <p className="text-base leading-relaxed mb-2">Do you ever lack the motivation to come up with a workout for that day? press a button and get a freshly generated workout every time based on your preferences. </p>
                    <p className="text-base leading-relaxed mb-2">This was a group project (3 team members) developed over 1 week, part of General Assembly&apos;s Software Engineering Immersive bootcamp.</p>
                    <p className="text-base leading-relaxed mb-2">It uses JavaScript (Next.js) for the frontend and Express.js with a MongoDB database for the backend. </p>
                    <div className="inline-flex">
                       <a href="https://github.com/SofiaTruta/fitnomenal-Frontend" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 ml-0 hover:border-green-200">GitHub</button></a>
                        <a href="https://fitnomenal-workouts.vercel.app/" target="_blank"><button className="rounded-full border border-slate-500 p-2  m-1 hover:border-green-200">website</button></a>
                    </div>
                    <div className="mt-5 mx-auto">
                        <video controls width="560" height="400" src="/videos/p3.mp4" type="video/mp4" muted></video>
                    </div>
                </div>

                <div className="mb-10 flex flex-col p-1 animate-moveUpwards animated-element">
                    <p className="text-xl font-bold mb-2">Patient Bookr</p>
                    <p className="text-base leading-relaxed mb-2">Inspired by my background in healthcare, this is a web app focusing on healthcare professionals and their appointment management needs. </p>
                    <p className="text-base leading-relaxed mb-2">It uses JavaScript (Vue.js) for the frontend and Express.js with a MongoDB database for the backend.</p>
                    <p className="text-base leading-relaxed mb-2">This was a solo project developed over 1 week, part of General Assembly&apos;s Software Engineering Immersive bootcamp.</p>
                    <div className="inline-flex">
                        <a href="https://github.com/SofiaTruta/SEI-project02-frontend" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 ml-0 hover:border-green-200">GitHub</button></a>
                        <a href="https://patient-bookr.netlify.app/" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 hover:border-green-200">website</button></a>
                    </div>
                    <div className="mt-5 mx-auto">
                        <video controls width="560" height="400" src="/videos/p2.mp4" type="video/mp4"  muted></video>
                    </div>
                </div>

                <div className="mb-10 flex flex-col p-1 animate-moveUpwards animated-element">
                    <p className="text-xl font-bold mb-2">Space Invaders clone</p>
                    <p className="text-base leading-relaxed mb-2">I love retro games and arcade machines - so I could not resist cloning this timeless vertical shooter!</p>
                    <p className="text-base leading-relaxed mb-2">Using vanilla JavaScript, CSS and HTML, this was a solo project developed over 1 week, part of General Assembly&apos;s Software Engineering Immersive bootcamp.</p>
                    <p className="text-base leading-relaxed mb-2">Give it a try, you know you want to!</p>
                    <div className="inline-flex">
                        <a href="https://github.com/SofiaTruta/fitnomenal-Frontend" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 ml-0 hover:border-green-200">GitHub</button></a>
                        <a href="https://sofiatruta.github.io/space-invaders-clone/" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1 hover:border-green-200">website</button></a>
                    </div>
                    <div className="mt-5 mx-auto">
                        <video controls width="560" height="400" src="/videos/p1.mp4" type="video/mp4" muted></video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;