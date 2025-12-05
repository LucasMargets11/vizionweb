import type { FC } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'

const SERVICES = [
  {
    id: 'strategy-branding',
    title: 'Estrategia & Branding.',
    description: [
      'Construimos marcas con propósito. No solo diseñamos logotipos, sino que creamos sistemas de identidad completos que comunican los valores y la visión de su empresa en cada interacción.',
      'Desde el naming y la arquitectura de marca hasta el tono de voz y el manual de estilo. Nos aseguramos de que su identidad visual sea coherente, moderna y memorable, diferenciándose claramente de la competencia en un mercado saturado.',
      'Realizamos auditorías de marca y workshops de descubrimiento para alinear a todos los stakeholders bajo una misma visión estratégica antes de empezar a diseñar.'
    ],
    tags: [
      'Identidad Visual',
      'Naming & Verbal Identity',
      'Brand Guidelines',
      'Estrategia de Posicionamiento',
      'Rebranding Corporativo',
      'Diseño de Logo'
    ],
  },
  {
    id: 'production',
    title: 'Producción Audiovisual.',
    description: [
      'Llevamos su narrativa al siguiente nivel con contenido audiovisual de alta calidad cinematográfica. Nos encargamos de todo el proceso: guion, casting, rodaje, edición, color grading y postproducción.',
      'Creamos spots publicitarios, videos corporativos, cobertura de eventos y contenido dinámico para redes sociales (Reels/TikToks) que capturan la atención en los primeros segundos.',
      'Contamos con equipos de última generación y drones para tomas aéreas, asegurando que cada pieza tenga un acabado profesional y estético impecable.'
    ],
    tags: [
      'Spots Publicitarios',
      'Videos Corporativos',
      'Fotografía de Producto',
      'Drone & Tomas Aéreas',
      'Edición & Postproducción',
      'Social Media Content'
    ],
  },
  {
    id: 'web-dev',
    title: 'Desarrollo Web & E-commerce.',
    description: [
      'Desarrollamos experiencias digitales rápidas, seguras y escalables. Nos especializamos en sitios web a medida que no solo se ven bien, sino que convierten visitantes en clientes.',
      'Utilizamos tecnologías modernas como React, Next.js y Tailwind CSS para garantizar un rendimiento óptimo y una excelente experiencia de usuario (UX/UI) en todos los dispositivos.',
      'Ya sea una landing page de alto impacto, un sitio corporativo institucional o una tienda online compleja, construimos la base tecnológica sólida que su negocio necesita para crecer.'
    ],
    tags: [
      'Desarrollo Full-Stack',
      'E-commerce (Shopify/Woo)',
      'Landing Pages',
      'UX/UI Design',
      'Optimización SEO',
      'Mantenimiento Web'
    ],
  },
  {
    id: 'systems-automation',
    title: 'Sistemas & Automatizaciones.',
    description: [
      'Optimizamos sus procesos internos mediante el desarrollo de software a medida y la implementación de automatizaciones inteligentes. Reducimos la carga operativa manual para que su equipo se enfoque en lo importante.',
      'Integramos sus herramientas actuales (CRM, ERP, Email Marketing) mediante APIs personalizadas y creamos dashboards de control para visualizar sus métricas clave en tiempo real.',
      'Desarrollamos aplicaciones web progresivas (PWA) y plataformas de gestión interna que mejoran la productividad y reducen errores humanos.'
    ],
    tags: [
      'Software a Medida',
      'Integración de APIs',
      'Automatización de Procesos',
      'Dashboards & Analytics',
      'Chatbots & AI',
      'Cloud Solutions'
    ],
  },
  {
    id: 'marketing-growth',
    title: 'Marketing Digital & Growth.',
    description: [
      'No basta con tener una buena web; hay que llevar tráfico cualificado hacia ella. Diseñamos estrategias de adquisición de usuarios mediante publicidad pagada (Meta Ads, Google Ads) y posicionamiento orgánico.',
      'Analizamos el funnel de conversión completo para detectar fugas y optimizar cada etapa del viaje del cliente, maximizando el retorno de inversión (ROAS).',
      'Gestionamos sus campañas mes a mes, realizando A/B testing constante de creatividades y audiencias para mejorar los resultados continuamente.'
    ],
    tags: [
      'Meta & Google Ads',
      'Estrategia de Contenidos',
      'Email Marketing',
      'CRO (Conversion Rate Opt)',
      'Analítica Web',
      'Growth Hacking'
    ],
  },
  {
    id: 'consulting-support',
    title: 'Consultoría & Soporte Continuo.',
    description: [
      'Nos convertimos en su socio tecnológico a largo plazo. Ofrecemos planes de soporte y mantenimiento para asegurar que sus activos digitales estén siempre actualizados y seguros.',
      'Brindamos consultoría estratégica para la transformación digital de su empresa, ayudándole a elegir las herramientas adecuadas y a capacitar a su equipo en su uso.',
      'Realizamos revisiones trimestrales de objetivos y métricas para ajustar el rumbo y aprovechar nuevas oportunidades en el mercado digital.'
    ],
    tags: [
      'Soporte Técnico 24/7',
      'Consultoría IT',
      'Capacitación de Equipos',
      'Auditoría de Seguridad',
      'Migración de Datos',
      'Roadmap Digital'
    ],
  },
]

export const ServicesPage: FC = () => {
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
            NUESTROS SERVICIOS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 leading-relaxed"
          >
            Somos su equipo all-in-one: trabajamos con ustedes para crear soluciones audiovisuales, de diseño y desarrollo que potencian sus marcas en el entorno digital. Desde la estrategia y la idea creativa, hasta la producción y la implementación técnica.
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
