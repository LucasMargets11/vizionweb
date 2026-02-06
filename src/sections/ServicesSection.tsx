import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../i18n'

const SERVICES = [
    {
        titleKey: 'sections.services.cards.production.title',
        descriptionKey: 'sections.services.cards.production.description',
        id: 'production',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-blue-50" />
                <circle cx="50" cy="50" r="30" className="fill-blue-600" />
                <path d="M50 50 L80 50 A30 30 0 0 1 50 80 Z" className="fill-cyan-400" />
            </svg>
        )
    },
    {
        titleKey: 'sections.services.cards.webDev.title',
        descriptionKey: 'sections.services.cards.webDev.description',
        id: 'web-dev',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-cyan-50" />
                <rect x="20" y="20" width="30" height="60" className="fill-slate-900" />
                <rect x="50" y="20" width="30" height="30" className="fill-cyan-500" />
                <circle cx="65" cy="65" r="15" className="fill-blue-400" />
            </svg>
        )
    },
    {
        titleKey: 'sections.services.cards.systemsAutomation.title',
        descriptionKey: 'sections.services.cards.systemsAutomation.description',
        id: 'systems-automation',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-indigo-50" />
                <path d="M20 50 A30 30 0 0 1 80 50 L80 80 L20 80 Z" className="fill-indigo-500" />
                <circle cx="70" cy="30" r="15" className="fill-cyan-300" />
            </svg>
        )
    },
    {
        titleKey: 'sections.services.cards.strategyBranding.title',
        descriptionKey: 'sections.services.cards.strategyBranding.description',
        id: 'strategy-branding',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-slate-50" />
                <circle cx="50" cy="50" r="40" className="fill-slate-200" />
                <path d="M50 50 L90 50 L50 90 Z" className="fill-slate-800" />
                <rect x="20" y="20" width="30" height="30" className="fill-blue-500" />
            </svg>
        )
    },
    {
        titleKey: 'sections.services.cards.marketingGrowth.title',
        descriptionKey: 'sections.services.cards.marketingGrowth.description',
        id: 'marketing-growth',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-emerald-50" />
                <path d="M20 80 L40 60 L60 70 L80 30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="stroke-emerald-500" />
                <circle cx="80" cy="30" r="10" className="fill-emerald-400" />
                <rect x="70" y="70" width="20" height="20" className="fill-teal-300" />
            </svg>
        )
    },
    {
        titleKey: 'sections.services.cards.consultingSupport.title',
        descriptionKey: 'sections.services.cards.consultingSupport.description',
        id: 'consulting-support',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-violet-50" />
                <rect x="25" y="30" width="40" height="40" rx="8" className="fill-violet-200" />
                <rect x="45" y="45" width="40" height="40" rx="8" className="fill-violet-600" />
                <circle cx="75" cy="30" r="10" className="fill-fuchsia-400" />
            </svg>
        )
    }
]

export const ServicesSection: FC = () => {
    return (
        <section className="w-full bg-white py-24 px-6">
            <div className="mx-auto max-w-[90rem]">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-6 lg:pr-12">
                        <div className="sticky top-24">
                            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
                                {t('sections.services.title')}
                            </h2>
                            <p className="mt-8 max-w-sm text-lg leading-relaxed text-slate-600">
                                {t('sections.services.description')}
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-6">
                        <div className="flex flex-col">
                            {SERVICES.map((service) => (
                                <div
                                    key={service.id}
                                    className="group flex flex-col gap-10 border-b border-slate-200 py-16 first:pt-0 last:border-0 sm:flex-row sm:items-start"
                                >
                                    {/* Icon */}
                                    <motion.div
                                        className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-sm"
                                        initial={{ scale: 1 }}
                                        whileInView={{ scale: 1.1 }}
                                        viewport={{ margin: "-45% 0px -45% 0px", once: false }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col pt-2">
                                        <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900">
                                            {t(service.titleKey)}
                                        </h3>
                                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
                                            {t(service.descriptionKey)}
                                        </p>
                                        <Link
                                            to={`/servicios#${service.id}`}
                                            className="mt-4 inline-block w-fit text-sm font-bold uppercase tracking-wider text-slate-900 underline decoration-slate-300 decoration-2 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600"
                                        >
                                            {t('sections.services.linkLabel')}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


