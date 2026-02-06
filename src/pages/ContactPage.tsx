import type { FC } from 'react'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { ContactSection } from '../sections/ContactSection'

export const ContactPage: FC = () => {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
