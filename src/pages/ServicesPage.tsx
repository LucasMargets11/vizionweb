import type { FC } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { getTranslation, t } from '../i18n'

const SERVICE_KEYS = [
  'strategyBranding',
  'production',
  'webDev',
  'systemsAutomation',
  'marketingGrowth',
  'consultingSupport',
] as const

type ServiceKey = (typeof SERVICE_KEYS)[number]

const SERVICE_ANCHORS: Record<ServiceKey, string> = {
  strategyBranding: 'strategy-branding',
  production: 'production',
  webDev: 'web-dev',
  systemsAutomation: 'systems-automation',
  marketingGrowth: 'marketing-growth',
  consultingSupport: 'consulting-support',
}

type ServiceContent = {
  title: string
  description: string[]
  tags: string[]
}

const SERVICES = SERVICE_KEYS.map((key) => {
  const content = getTranslation<ServiceContent>(`pages.servicesPage.sections.${key}`)
  return {
    id: SERVICE_ANCHORS[key],
    title: content?.title ?? key,
    description: content?.description ?? [],
    tags: content?.tags ?? [],
  }
})

export const ServicesPage: FC = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-20">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            {t('pages.servicesPage.heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 leading-relaxed"
          >
            {t('pages.servicesPage.heroDescription')}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 h-px w-full bg-slate-200 origin-left"
          />
        </section>

        {/* Services List */}
        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <motion.section
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-14 md:py-16 border-b border-slate-200 last:border-b-0"
            >
              <div className="grid gap-10 md:gap-12 lg:grid-cols-2">
                {/* Left Column: Title + Graphic Placeholder */}
                <div className="flex flex-col">
                  <h2 className="text-lg md:text-xl font-semibold tracking-[0.08em] uppercase text-slate-900 mb-6">
                    {service.title}
                  </h2>
                  <div className="flex justify-center lg:justify-start lg:pt-24">
                    <div className="h-56 w-56 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 opacity-90 shadow-xl" />
                  </div>
                </div>

                {/* Right Column: Text & Tags */}
                <div className="flex flex-col h-full">
                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-700">
                    {service.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.03 }}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
