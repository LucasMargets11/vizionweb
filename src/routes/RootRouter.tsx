import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { ServicesPage } from '../pages/ServicesPage'
import { PricingPage } from '../pages/PricingPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'

export const RootRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}
