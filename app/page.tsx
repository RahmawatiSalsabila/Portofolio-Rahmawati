import { CursorGlow } from '@/components/site/cursor-glow'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Skills } from '@/components/site/skills'
import { Projects } from '@/components/site/projects'
import { Research } from '@/components/site/research'
import { Experience } from '@/components/site/experience'
import { Certificates } from '@/components/site/certificates'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
