import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Tools from '@/components/Tools'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ConditionalBlur from '@/components/ConditionalBlur'

export default function Home() {
  // #region agent log
  if (typeof window !== 'undefined') {
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:9',message:'Home component render',data:{isClient:typeof window !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  }
  // #endregion
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

