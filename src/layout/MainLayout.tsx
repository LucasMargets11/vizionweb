import type { FC, PropsWithChildren } from 'react'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { ServicesSection } from '../sections/ServicesSection'
import { ProcessSection } from '../sections/ProcessSection'
import { PortfolioSection } from '../sections/PortfolioSection'
import { ContactSection } from '../sections/ContactSection'

const MainContent: FC<PropsWithChildren> = ({ children }) => (
    <main className="flex flex-col gap-24 pt-24">
        {children}
    </main>
)

export const MainLayout: FC = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header />
            <MainContent>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ProcessSection />
                <PortfolioSection />
                <ContactSection />
            </MainContent>
            <Footer />
        </div>
    )
}
