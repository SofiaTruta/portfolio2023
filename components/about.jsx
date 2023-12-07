'use client'
import { useState } from "react";
import EmailForm from "./emailForm";

const About = () => {

    const [showEmail, setShowEmail] = useState(false)
    const toggleShowEmail = () => setShowEmail(!showEmail)

    return (
        <>
            <div className="py-20" id="about">
                <h1 className="text-3xl font-bold mb-5">about</h1>
                <p className="text-base leading-relaxed mb-3 xl:text-lg">After 8 years in healthcare and 2 years in healthTech, in my last role I had the opportunity to contribute to product development of a web app for internal use. </p>
                <p className="text-base leading-relaxed mb-3 xl:text-lg">This sparked my curiosity and since then I decided to pursue software engineering! </p>
                <p className="text-base leading-relaxed xl:text-lg">Recently completed General Assembly's Software Engineering bootcamp, I have learned the fundamentals of Full Stack software development (JavaScript, React, Vue.js, Express.js, Python, Django).</p>
            </div>
            <div className="contacts flex justify-center">
                    <button className="rounded-full border border-slate-500 p-2 m-1 ml-0" onClick={toggleShowEmail}>Email</button>
                    <a href="https://github.com/SofiaTruta" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1" >GitHub</button></a>
                    <a href="https://www.linkedin.com/in/sofiatruta/" target="_blank"><button className="rounded-full border border-slate-500 p-2 m-1">LinkedIn</button></a>
                </div>

            {showEmail && (<EmailForm toggleShowEmail={toggleShowEmail}/>)}
            
            </>

    );
}

export default About;