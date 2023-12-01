import Landing from "@/components/landing"
import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import LearningNow from "@/components/learningNow"
import Interests from "@/components/interests"
import Thanks from "@/components/thanks"

export default function Home() {

  return (
    <div className="">
      <Landing />
      <div className="flex justify-between gap-4 h-full"> 
          <Hero />
        <main className="flex flex-col">
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
