import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Tools from '@/components/Tools'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ConditionalBlur from '@/components/ConditionalBlur'

export default function Home() {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Tools />
      <Footer />
      <ConditionalBlur />
    </main>
  )
}

