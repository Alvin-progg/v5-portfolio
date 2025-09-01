import About from "@/components/About"
import Experience from "@/components/Experience"
import Faq from "@/components/Faq"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"
import Project from "@/components/Project"


const page = () => {
  return (
    < >
    <header>
      <Nav/>
    </header>
    <main>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Faq/>
    </main>
    
    </>
  )
}

export default page