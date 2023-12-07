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
    <div className="landing h-screen">
      <Landing />
      <div className="rest flex flex-col sm:flex-row sml:flex-col w-screen h-full px-7 xl:justify-end">
        <Hero className="sm:order-first sml:order-none"/>
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
