import Hero from "@/components/hero/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import LearningNow from "@/components/learningNow"
import Interests from "@/components/interests"
import Thanks from "@/components/thanks"

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 ">
      <div className="flex justify-between gap-4"> 
          <Hero />
        <main className="pt-24 w-1/2 py-24">
          <About />
          <Technologies />
          <Projects />
          <Experience />
          <LearningNow />
          <Interests />
          <Thanks />
        </main>
      </div>
    </div>
  )
}
