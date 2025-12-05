import { useEffect, type FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { PROJECTS } from '../data/projects'

export const ProjectDetailPage: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  
  console.log('ProjectDetailPage slug:', slug)
  const project = PROJECTS.find((p) => p.slug === slug)
  console.log('Project found:', project)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Header />
        <div className="pt-32 text-center">
            <p className="text-slate-500 text-xl">Proyecto "{slug}" no encontrado.</p>
            <button onClick={() => navigate('/projects')} className="mt-4 text-blue-600 underline">Volver a proyectos</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20">
          
          {/* Main Grid */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            
            {/* Left Column: Images (Scrollable) */}
            <div className="space-y-6">
              {project.images.map((src, index) => (
                <motion.div
                  key={`${src}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
                >
                  <img
                    src={src}
                    alt={`${project.name} - view ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Column: Sticky Info */}
            <aside className="lg:sticky lg:top-28 self-start">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Header Info */}
                <div>
                  <p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
                    Proyecto
                  </p>
                  <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    {project.name}
                  </h1>
                  <p className="mt-3 text-sm md:text-base text-slate-700 font-medium">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Long Description */}
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 text-xs md:text-sm text-slate-600">
                  {project.role && (
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Rol</p>
                      <p>{project.role}</p>
                    </div>
                  )}
                  
                  {project.services && project.services.length > 0 && (
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Servicios</p>
                      <ul className="space-y-1">
                        {project.services.map((service) => (
                          <li key={service}>• {service}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.year && (
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Año</p>
                      <p>{project.year}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </aside>

          </div>

          {/* Bottom Section: Link & CTA */}
          <section className="mt-16 md:mt-24 border-t border-slate-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">
            <div className="text-slate-600">
              <p className="font-bold text-slate-900 mb-1">Sitio del proyecto</p>
              {project.websiteUrl ? (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 hover:text-cyan-700 hover:underline break-all font-medium"
                >
                  {project.websiteUrl}
                </a>
              ) : (
                <p className="text-slate-400 italic">Próximamente</p>
              )}
            </div>

            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Navegar al sitio
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </a>
            )}
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
