import { useState, type FC } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { AnimatedPrice } from '../components/pricing/AnimatedPrice'

export const PricingPage: FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly')

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-20 relative z-10">
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
        <section className="flex flex-col items-center">
          
          {/* Toggle Selector */}
          <div className="mb-12 flex items-center gap-4 rounded-full border border-slate-200 bg-slate-50 p-1.5">
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
          </div>

          {/* Cards Grid */}
          <div className="grid w-full gap-8 lg:grid-cols-2">
            
            {/* Left Column: Standard Plan + Contact Card */}
            <div className="flex flex-col gap-8 h-full justify-between">
              
              {/* Standard Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
