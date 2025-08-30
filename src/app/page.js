import About from "@/components/About"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"


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
    </main>
    
    </>
  )
}

export default page