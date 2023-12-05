const Experience = () => {
    return (
        <div id="experience" className="py-20 px-10">
            <p className="text-3xl font-bold mb-5">experience</p>

            <div className="mb-20 pr-20 mr-20">
                <img src="/images/GA-logo2.jpg" alt="ga logo" className="rounded-full h-12 float-right" />
                <p className="text-xl font-bold mb-2">General Assembly</p>
                <p className="text-base leading-relaxed mb-1">Software Engineering Immersive - student</p>
                <p className="text-base leading-relaxed mb-1">Sept 2023 - Nov 2023</p>
                <p className="text-base leading-relaxed mb-2">A 3 month full stack software engineering bootcamp (420 hours of in-class learning), which included working in an Agile environment with daily stand ups, focusing on the fundamentals of test-driven development and covering UX fundamentals.
                </p>
            </div>

            <div className="mb-20 pl-20 ml-20">
                <img src="/images/hn-logo.png" alt="hn logo" className="rounded h-11 float-left" />
                <p className="text-xl font-bold mb-2 text-right">HN (HealthNavigator Ltd)</p>
                <p className="text-base leading-relaxed mb-1 text-right">Software Clinical Health Coach</p>
                <p className="text-base leading-relaxed mb-1 text-right">2021 - 2023</p>
                <p className="text-base leading-relaxed mb-2 text-right">Delivered a personalised Health Coaching program to enhance patient self-management of chronic conditions. </p>
                <p className="text-base leading-relaxed mb-2 text-right"> Served as a Subject Matter Expert for product development of new  web applications for internal use (HN Predict, HN ProActive) - this was the spark that led me to change into software development!</p>
                <p className="text-base leading-relaxed mb-2 text-right">How cool would it be if I could develop some of these features myself?</p>
            </div>

            <div className="mb-5 pr-20 mr-20">
                <img src="/images/nhs-logo.jpeg" alt="ga logo" className="rounded-full h-12 float-right" />
                <p className="text-xl font-bold mb-2">University Hospitals Bristol and Weston</p>
                <p className="text-base leading-relaxed mb-1">Registered Nurse</p>
                <p className="text-base leading-relaxed mb-1">2019 - 2021</p>
                <p className="text-base leading-relaxed mb-2">Provided nursing care to patients in diverse settings (Accident and Emergency department, Respiratory High Dependency Unit).
                </p>
                <p>Worked with multidisciplinary teams and demonstrated fast problem-solving skills.</p>
            </div>

            <p className="text-base text-center mt-20">For further details on my work history please visit my <a href="https://www.linkedin.com/in/sofiatruta/">LinkedIn</a> profile.</p>
        </div>
    );
}

export default Experience;