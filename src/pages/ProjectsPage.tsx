import type { FC } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { WorkCard } from '../components/WorkCard'
import { PROJECTS } from '../data/projects'
import { t } from '../i18n'

export const ProjectsPage: FC = () => {
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
            {t('pages.projects.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 leading-relaxed"
          >
            {t('pages.projects.intro')}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 h-px w-full bg-slate-200 origin-left"
          />
        </section>

        {/* Projects Grid */}
        <section className="mt-12 md:mt-16">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {PROJECTS.map((project) => (
              <WorkCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                cover={project.cover}
                media={project.media}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
