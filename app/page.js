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
    <div className="">
      <div className="flex justify-between gap-4 h-full"> 
          <Hero />
        <main className="bg-gray-700 flex flex-col pt-60">
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
