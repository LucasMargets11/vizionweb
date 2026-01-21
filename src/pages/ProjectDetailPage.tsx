import { useEffect, type FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { PROJECTS } from '../data/projects'
import { t } from '../i18n'

export const ProjectDetailPage: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = PROJECTS.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
          <p className="text-xl text-slate-500">{t('pages.projectDetail.notFound', { slug: slug ?? '' })}</p>
          <button
            onClick={() => navigate('/projects')}
            className="mt-6 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:bg-slate-100"
          >
            {t('pages.projectDetail.backToProjects')}
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  const gallery = project.media

  const renderMedia = (mediaSrc: string, type: 'image' | 'video', alt: string, showControls = true) => {
    if (type === 'video') {
      return (
        <video
          controls={showControls}
          className="w-full max-h-[600px] rounded-2xl bg-black object-cover"
          aria-label={alt}
          playsInline
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      )
    }

    return (
      <img
        src={mediaSrc}
        alt={alt}
        className="w-full max-h-[600px] rounded-2xl object-cover"
        loading="lazy"
      />
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-6xl px-6 md:px-10 pt-8 md:pt-16 pb-20">
        <button
          onClick={() => navigate('/projects')}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 transition hover:text-slate-900"
        >
          {t('pages.projectDetail.backToProjects')}
        </button>

        <section className="mt-8 space-y-8 lg:grid lg:grid-cols-12 lg:gap-6 lg:space-y-0">
          <div className="lg:col-span-7 space-y-6">
            <div className="lg:hidden space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Proyecto</p>
              <h1 className="text-3xl font-bold text-slate-900">{project.title}</h1>
              <p className="text-base text-slate-600">{project.description}</p>
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{gallery.length}</span> piezas entre fotos y video
              </p>
            </div>

            <div className="space-y-6">
              {gallery.map((mediaItem, index) => (
                <motion.div
                  key={`${mediaItem.src}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="mx-auto lg:mx-0 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
                >
                  {renderMedia(
                    mediaItem.src,
                    mediaItem.type,
                    mediaItem.alt ?? t('pages.projectDetail.imageAlt', {
                      name: project.title,
                      index: (index + 1).toString(),
                    })
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-4">
            <div className="hidden lg:flex sticky top-24 flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Proyecto</p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900">{project.title}</h1>
              <p className="text-base text-slate-600">{project.description}</p>
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{gallery.length}</span> piezas entre fotos y video
              </p>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  )
}
