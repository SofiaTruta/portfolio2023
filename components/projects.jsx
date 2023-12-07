const Projects = () => {
    return (
        <div id="projects" className="py-20">
            <div>
                <p className="text-3xl font-bold mb-5">projects</p>
            </div>
            <div>
                <div className="mb-10 flex flex-col">
                    <p className="text-xl font-bold mb-2">8 bit reviews</p>
                    <p className="text-base leading-relaxed mb-2 xl:text-lg">a video game review website, made using JavaScript (React) on the frontend, Python (Django) with a Postgresql database for the backend and OpenCritic's API for game data fetching.</p>
                    <p className="text-base leading-relaxed mb-2 xl:text-lg">a solo project developed over 1 week, part of General Assembly's Software Engineering Immersive bootcamp.</p>
                    <p className="text-base leading-relaxed mb-2 xl:text-lg">has your favourite video game been added already?</p>
                    <div className="inline-flex">
                        <button className="rounded-full border border-slate-500 p-2 m-1 ml-0"><a href="https://github.com/SofiaTruta/8bitreviews-frontend"></a>GitHub</button>
                        <button className="rounded-full border border-slate-500 p-2 m-1"><a href="https://8bitreviews-frontend-production.up.railway.app/"></a>Website</button>
                    </div>
                    <div className="mt-5 mx-auto">
                        <video controls width="560" height="400" src="/videos/p4.mp4" type="video/mp4" muted></video>
                    </div>
                </div>

                <div className="mb-10 flex flex-col">
                    <p className="text-xl font-bold mb-2">Fitnomenal</p>
                    <p className="text-base leading-relaxed mb-2">do you ever lack the motivation to come up with a workout for that day? press a button and get a freshly generated workout every time based on your preferences. </p>
                    <p className="text-base leading-relaxed mb-2">this was a group project (3 team members) developed over 1 week, part of General Assembly's Software Engineering Immersive bootcamp.</p>
                    <p className="text-base leading-relaxed mb-2">it uses JavaScript (Next.js) for the frontend and Express.js with a MongoDB database for the backend. </p>
                    <div className="inline-flex">
                        <button className="rounded-full border border-slate-500 p-2 m-1 ml-0"><a href="https://github.com/SofiaTruta/fitnomenal-Frontend"></a>GitHub</button>
                        <button className="rounded-full border border-slate-500 p-2  m-1"><a href="https://fitnomenal-workouts.vercel.app/"></a>website</button>
                    </div>
                    <div className="mt-5 mx-auto">
                        <video controls width="560" height="400" src="/videos/p3.mp4" type="video/mp4" muted></video>
                    </div>
                </div>

                <div className="mb-10 flex flex-col">
                    <p className="text-xl font-bold mb-2">Patient Bookr</p>
                    <p className="text-base leading-relaxed mb-2">inspired by my background in healthcare, this is a web app focusing on healthcare professionals and their appointment management needs. </p>
                    <p className="text-base leading-relaxed mb-2">it uses JavaScript (Vue.js) for the frontend and Express.js with a MongoDB database for the backend.</p>
                    <p className="text-base leading-relaxed mb-2">this was a solo project developed over 1 week, part of General Assembly's Software Engineering Immersive bootcamp.</p>
                    <div className="inline-flex">
                        <button className="rounded-full border border-slate-500 p-2 m-1 ml-0"><a href="https://github.com/SofiaTruta/SEI-project02-frontend"></a>GitHub</button>
                        <button className="rounded-full border border-slate-500 p-2 m-1"><a href="https://patient-bookr.netlify.app/"></a>website</button>
                    </div>
                    <div className="mt-5 mx-auto">
                        <video controls width="560" height="400" src="/videos/p2.mp4" type="video/mp4"  muted></video>
                    </div>
                </div>

                <div className="mb-10 flex flex-col">
                    <p className="text-xl font-bold mb-2">Space Invaders clone</p>
                    <p className="text-base leading-relaxed mb-2">I love retro games and arcade machines - so I could not resist cloning this timeless vertical shooter!</p>
                    <p className="text-base leading-relaxed mb-2">using vanilla JavaScript, CSS and HTML, this was a solo project developed over 1 week, part of General Assembly's Software Engineering Immersive bootcamp.</p>
                    <p className="text-base leading-relaxed mb-2">give it a try, you know you want to!</p>
                    <div className="inline-flex">
                        <button className="rounded-full border border-slate-500 p-2 m-1 ml-0"><a href="https://github.com/SofiaTruta/fitnomenal-Frontend"></a>GitHub</button>
                        <button className="rounded-full border border-slate-500 p-2 m-1"><a href="https://fitnomenal-workouts.vercel.app/"></a>website</button>
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