const Interests = () => {
    return (
        <div id="interests" className="py-20">
            <p className="name text-4xl font-bold mb-5">interests</p>
            <div className="mb-3">
                <p className="text-xl font-bold mb-1">rock climbing</p>
                <p className="text-base leading-relaxed mb-4">I tried climbing for the first time around 7 years ago and I have not stopped since. You can find me mostly at my local rock climbing gym, but occasionally I&apos;ll go up with friends to the Peak District and hop on some real rock!</p>
            </div>
            <div className="mb-3">
                <p className="text-xl font-bold mb-1">music</p>
                <p className="text-base leading-relaxed mb-4">I have been playing the bass since I was a teenager and love trying out new instruments and having a jam.</p>
            </div>
            <div className="mb-3">
                <p className="text-xl font-bold mb-1">video games</p>
                <p className="text-base leading-relaxed mb-1">it all started with a Sega Saturn for Christmas - that stopped working in 2018 unfortunately (rip). Nowadays I tend to play retro games - mostly GameBoy and GameBoy Advance but also farming simulators like Stardew Valley and some Minecraft every once in a while.</p>
            </div>
        </div>
    );
}

export default Interests;