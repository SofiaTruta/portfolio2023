import Landing from "@/components/landing"
import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import LearningNow from "@/components/learningNow"
import Interests from "@/components/interests"
import Thanks from "@/components/thanks"
import Nav from "@/components/smallNav"

export default function Home() {

  return (
    <div className="landing h-screen">
      <Landing />
      <div className="rest flex flex-col gap-4 sm:flex-row sml:flex-col w-screen px-7 xl:justify-end">
        <Hero />
        <main className="flex flex-col">
          <div className="pt-40">
            <Nav />
            <About />
            <Technologies />
            <Projects />
            <Experience />
            <LearningNow />
            <Interests />
            <Thanks />
          </div>
        </main>
      </div>
    </div>
  )
}
