import type { FC } from 'react'
import { Footer } from '../components/common/Footer'
import Header from '../components/common/Header'
import { Hero } from '../components/Hero'
import ReelShowcase from '../components/ReelShowcase'
import { ServicesSection } from '../sections/ServicesSection'
import { WorkShowcase } from '../sections/WorkShowcase'
import AboutUsSection from '../sections/AboutUsSection'

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReelShowcase />
        <ServicesSection />
        <WorkShowcase />
        <AboutUsSection />
      </main>
      <Footer />
    </>
  )
}
