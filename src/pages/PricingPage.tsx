import { useState, type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header, { type NavItem } from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { AnimatedPrice } from '../components/pricing/AnimatedPrice'

const INDUSTRIES = [
  { id: 'all', label: 'ALL' },
  { id: 'development', label: 'DEVELOPMENT' },
  { id: 'branding', label: 'BRANDING' },
  { id: 'video', label: 'VIDEO' },
  { id: 'content', label: 'CONTENT' },
]

const PACKAGES = [
  // 🔹 Desarrollo / Web
  {
    id: 'landing',
    title: 'Landing page de lanzamiento',
    description:
      'Ideal para campañas específicas, lanzamientos de producto o captación de leads con una sola página clara y enfocada en la conversión.',
    features: [
      'Diseño a medida',
      'Sección de beneficios + CTA principal',
      'Integración con formulario / WhatsApp',
      '1 ronda de ajustes incluida',
    ],
    priceLabel: 'Desde',
    price: '$800',
    suffix: 'por proyecto',
    industries: ['development'],
  },
  {
    id: 'website',
    title: 'Sitio web institucional',
    description:
      'Para marcas que necesitan una presencia sólida: home, servicios, sobre nosotros y contacto, lista para escalar en el tiempo.',
    features: [
      'Hasta 5 secciones',
      'Diseño responsive',
      'Optimización básica SEO',
      'Integración con analítica',
    ],
    priceLabel: 'Desde',
    price: '$1,800',
    suffix: 'por proyecto',
    industries: ['development'],
  },
  {
    id: 'custom-system',
    title: 'Sistema a medida / MVP',
    description:
      'Desarrollo de funcionalidades específicas o un MVP para validar ideas de producto digital con usuarios reales.',
    features: [
      'Definición funcional y arquitectura',
      'Panel de administración básico',
      'Integraciones con APIs / servicios externos',
      'Soporte para iterar luego del lanzamiento',
    ],
    priceLabel: 'A partir de',
    price: '$3,000',
    suffix: 'según alcance',
    industries: ['development'],
  },

  // 🔹 Marca / Branding
  {
    id: 'brand-starter',
    title: 'Brand Starter',
    description:
      'Paquete para marcas nuevas o emprendimientos que necesitan una identidad visual clara y lista para salir al mercado.',
    features: [
      'Logo principal + versión secundaria',
      'Paleta de color y tipografías',
      'Aplicaciones básicas (perfil redes, firma mail)',
      'Mini brand board en PDF',
    ],
    priceLabel: 'Desde',
    price: '$900',
    suffix: 'por proyecto',
    industries: ['branding'],
  },
  {
    id: 'brand-system',
    title: 'Brand System Pro',
    description:
      'Sistema de marca más completo para proyectos que necesitan consistencia en múltiples puntos de contacto.',
    features: [
      'Sistema de logo y variantes',
      'Paleta extendida y sistema tipográfico',
      'Lineamientos de uso en redes y piezas digitales',
      'Manual de marca en PDF (10–15 páginas)',
    ],
    priceLabel: 'Desde',
    price: '$1,600',
    suffix: 'por proyecto',
    industries: ['branding'],
  },

  // 🔹 Video / Producción
  {
    id: 'video-social-pack',
    title: 'Social Video Pack',
    description:
      'Pack de piezas en formato vertical para redes sociales, ideal para mantener la marca activa y consistente en el feed.',
    features: [
      '1 jornada de filmación local',
      'Edición de 4–6 videos cortos (Reels / TikTok)',
      'Versiones con y sin texto / subtítulos',
      'Entrega optimizada para redes',
    ],
    priceLabel: 'Desde',
    price: '$1,200',
    suffix: 'por pack',
    industries: ['video'],
  },
  {
    id: 'launch-video',
    title: 'Video de lanzamiento',
    description:
      'Pieza audiovisual principal para comunicar un nuevo producto, servicio o campaña con un look cuidado y profesional.',
    features: [
      'Guión + propuesta creativa',
      'Filmación en 1 jornada',
      'Edición + corrección de color',
      'Versión principal + corte corto para redes',
    ],
    priceLabel: 'Desde',
    price: '$1,800',
    suffix: 'por proyecto',
    industries: ['video'],
  },
  {
    id: 'event-coverage',
    title: 'Cobertura de evento',
    description:
      'Registro audiovisual de eventos, activaciones o lanzamientos para tener contenido reutilizable en redes y web.',
    features: [
      'Cobertura en foto y/o video (medio día o día completo)',
      'Edición de aftermovie',
      'Selección de clips cortos para redes',
      'Entrega en formatos listos para publicar',
    ],
    priceLabel: 'Desde',
    price: '$1,500',
    suffix: 'por evento',
    industries: ['video'],
  },

  // 🔹 Generación de contenido mensual
  {
    id: 'content-retainer',
    title: 'Content Partner mensual',
    description:
      'Acompañamiento mensual para mantener las redes y la comunicación digital activas con contenido consistente y alineado a la marca.',
    features: [
      'Reunión de planning mensual',
      'Calendario de contenido (8–12 piezas)',
      'Mix de piezas estáticas + video corto',
      'Soporte para adaptar contenido a campañas pagas',
    ],
    priceLabel: 'Desde',
    price: '$1,200',
    suffix: 'por mes',
    industries: ['content'],
  },
]

const PackageCard: FC<{ pkg: typeof PACKAGES[0] }> = ({ pkg }) => (
  <motion.article
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
  >
    <h3 className="text-base font-bold uppercase tracking-wider text-slate-900">
      {pkg.title}
    </h3>

    <p className="mt-3 text-base text-slate-700 leading-relaxed">
      {pkg.description}
    </p>

    <ul className="mt-6 space-y-2 text-sm text-slate-600 flex-1">
      {pkg.features.map((f) => (
        <li key={f}>• {f}</li>
      ))}
    </ul>

    <div className="mt-6 pt-5 border-t border-slate-100">
      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
        {pkg.priceLabel}
      </p>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-slate-900">
          {pkg.price}
        </span>
        <span className="text-sm text-slate-500 font-medium">{pkg.suffix}</span>
      </div>
    </div>

    <button className="mt-6 w-full rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">
      Consultar por este paquete
    </button>
  </motion.article>
)

export const PricingPage: FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly')
  const [pricingView, setPricingView] = useState<'monthly' | 'packages'>('monthly')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')

  const filteredPackages =
    selectedIndustry === 'all'
      ? PACKAGES
      : PACKAGES.filter((pkg) => pkg.industries.includes(selectedIndustry))

  const industryNavItems: NavItem[] =
    pricingView === 'packages'
      ? INDUSTRIES.map((item) => ({
          id: item.id,
          label: item.label,
          onClick: () => setSelectedIndustry(item.id),
          active: selectedIndustry === item.id,
        }))
      : []

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header 
        secondaryNavItems={industryNavItems} 
        secondaryNavClassName="top-[38rem]"
      />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="mb-16 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            PRICING
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 leading-relaxed"
          >
            Planes flexibles diseñados para escalar su negocio. Desde mantenimiento continuo hasta desarrollo a medida y estrategias de crecimiento. Elija el modelo que mejor se adapte a sus objetivos.
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 h-px w-full bg-slate-200 origin-left" 
          />
        </section>

        {/* Pricing Section */}
        <section className="flex flex-col items-center w-full">
          
          {/* View Toggle */}
          <div className="mb-10 flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setPricingView('monthly')}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${
                pricingView === 'monthly' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              PLANES MENSUALES
            </button>
            <button
              onClick={() => setPricingView('packages')}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${
                pricingView === 'packages' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              PAQUETES
            </button>
          </div>

          <AnimatePresence mode="wait">
            {pricingView === 'monthly' ? (
              <motion.div
                key="monthly"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                  exit: { opacity: 0, y: -20 }
                }}
                className="flex flex-col items-center w-full"
              >
          
          {/* Toggle Selector */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mb-12 flex items-center gap-4 rounded-full border border-slate-200 bg-slate-50 p-1.5"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                billingCycle === 'quarterly' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Quarterly <span className="ml-1 text-[10px] text-emerald-500 font-bold">-10%</span>
            </button>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid w-full gap-8 lg:grid-cols-2">
            
            {/* Left Column: Standard Plan + Contact Card */}
            <div className="flex flex-col gap-8 h-full justify-between">
              
              {/* Standard Plan */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-500">Maintenance</h3>
                <AnimatedPrice 
                  value={billingCycle === 'monthly' ? 900 : 2400}
                  prefix="$"
                  suffix={billingCycle === 'monthly' ? '/mo' : '/qtr'}
                  className="mt-4"
                  textClassName="text-4xl md:text-5xl font-bold text-slate-900"
                  prefixClassName="text-2xl md:text-3xl font-semibold text-slate-900"
                  suffixClassName="text-slate-500"
                />
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Ideal para negocios que necesitan mantener su sitio seguro, rápido y actualizado sin complicaciones técnicas.
                </p>
                
                <ul className="mt-8 space-y-4">
                  {[
                    'Hosting de alto rendimiento',
                    'Actualizaciones de seguridad',
                    'Backups diarios',
                    'Soporte técnico prioritario',
                    '1 hora de cambios mensuales'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                      <svg className="h-5 w-5 shrink-0 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:border-cyan-400 hover:text-cyan-600 transition-colors">
                  Comenzar ahora
                </button>
              </motion.div>

              {/* Questions / Contact Card */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div>
                  <h4 className="font-bold text-slate-900">¿Dudas sobre qué plan elegir?</h4>
                  <p className="text-sm text-slate-500 mt-1">Hablemos sobre sus necesidades específicas.</p>
                </div>
                <a 
                  href="/contact"
                  className="shrink-0 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                >
                  Agendar llamada
                </a>
              </motion.div>

            </div>

            {/* Right Column: Featured Plan */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative rounded-[2.5rem] bg-[#0F172A] p-8 md:p-12 text-white shadow-2xl shadow-slate-900/20 overflow-hidden"
            >
              {/* Abstract Shapes Decoration */}
              <div className="pointer-events-none absolute -right-12 -bottom-16 flex gap-4 opacity-80">
                <div className="h-24 w-24 rounded-full bg-emerald-400 blur-2xl" />
                <div className="h-40 w-10 rounded-full bg-cyan-500 blur-xl" />
              </div>

              <div className="absolute top-0 right-0 rounded-bl-3xl bg-gradient-to-r from-blue-600 to-teal-400 px-6 py-2 text-xs font-bold uppercase tracking-wider text-white">
                Best Value
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400">Growth Partner</h3>
                <AnimatedPrice 
                  value={billingCycle === 'monthly' ? 2500 : 6750}
                  prefix="$"
                  suffix={billingCycle === 'monthly' ? '/mo' : '/qtr'}
                  className="mt-6"
                  textClassName="text-5xl md:text-6xl font-bold text-white"
                  prefixClassName="text-3xl md:text-4xl font-semibold text-white"
                  suffixClassName="text-slate-400"
                />
                <p className="mt-6 text-base text-slate-300 leading-relaxed">
                  Un equipo completo de diseño, desarrollo y marketing a su disposición. Funciona como su departamento digital externo para escalar agresivamente.
                </p>

                <div className="mt-10 h-px w-full bg-slate-800" />
                
                <ul className="mt-10 space-y-5">
                  {[
                    'Todo lo incluido en Maintenance',
                    'Diseño UX/UI ilimitado',
                    'Desarrollo de nuevas features',
                    'Gestión de campañas (Ads)',
                    'Creación de contenido mensual',
                    'Reportes de rendimiento quincenales',
                    'Slack directo con el equipo'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base text-slate-200">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-12 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 px-8 py-4 text-base font-bold text-white shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all">
                  Empezar Growth Plan
                </button>
              </div>
            </motion.div>

          </div>
              </motion.div>
            ) : (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <section className="mt-10">
                  {/* Mobile: chips horizontales encima de los paquetes */}
                  <div className="mb-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
                    {INDUSTRIES.map((item) => {
                      const isActive = selectedIndustry === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedIndustry(item.id)}
                          className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs transition ${
                            isActive
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Cards Grid */}
                  <motion.div layout className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                      {filteredPackages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </div>
  )
}
