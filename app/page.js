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
    <div className="landing h-100">
      <Landing />
      <div className="rest flex justify-between h-full px-10">
        <Hero />
        <main className="flex flex-col w-2/3">
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
