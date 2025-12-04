import type { FC } from 'react'
import CustomCursor from './components/common/CustomCursor'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import { Hero } from './components/Hero'
import ReelShowcase from './components/ReelShowcase'
import { ServicesSection } from './sections/ServicesSection'
import { WorkShowcase } from './sections/WorkShowcase'

const App: FC = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <ReelShowcase />
        <ServicesSection />
        <WorkShowcase />
      </main>
      <Footer />
    </>
  )
}

export default App
