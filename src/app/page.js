import About from "@/components/About"
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
    </main>
    
    </>
  )
}

export default page