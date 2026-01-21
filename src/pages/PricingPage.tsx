import { useState, type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header, { type NavItem } from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { AnimatedPrice } from '../components/pricing/AnimatedPrice'
import { t } from '../i18n'

const INDUSTRIES = [
  { id: 'all', labelKey: 'pages.pricing.industries.all' },
  { id: 'development', labelKey: 'pages.pricing.industries.development' },
  { id: 'branding', labelKey: 'pages.pricing.industries.branding' },
  { id: 'video', labelKey: 'pages.pricing.industries.video' },
  { id: 'content', labelKey: 'pages.pricing.industries.content' },
] as const

type IndustryId = typeof INDUSTRIES[number]['id']
type PackageIndustryId = Exclude<IndustryId, 'all'>

type PackageId =
  | 'landing'
  | 'website'
  | 'customSystem'
  | 'brandStarter'
  | 'brandSystem'
  | 'videoSocialPack'
  | 'launchVideo'
  | 'eventCoverage'
  | 'contentRetainer'

type PackageDefinition = {
  id: PackageId
  industries: PackageIndustryId[]
}

const PACKAGE_DEFINITIONS = [
  // 🔹 Desarrollo / Web
  {
    id: 'landing',
    industries: ['development'],
  },
  {
    id: 'website',
    industries: ['development'],
  },
  {
    id: 'customSystem',
    industries: ['development'],
  },

  // 🔹 Marca / Branding
  {
    id: 'brandStarter',
    industries: ['branding'],
  },
  {
    id: 'brandSystem',
    industries: ['branding'],
  },

  // 🔹 Video / Producción
  {
    id: 'videoSocialPack',
    industries: ['video'],
  },
  {
    id: 'launchVideo',
    industries: ['video'],
  },
  {
    id: 'eventCoverage',
    industries: ['video'],
  },

  // 🔹 Generación de contenido mensual
  {
    id: 'contentRetainer',
    industries: ['content'],
  },
] as const satisfies ReadonlyArray<PackageDefinition>

const PACKAGE_FEATURE_KEYS: Record<PackageId, readonly string[]> = {
  landing: [
    'pages.pricing.packages.landing.features.feature1',
    'pages.pricing.packages.landing.features.feature2',
    'pages.pricing.packages.landing.features.feature3',
    'pages.pricing.packages.landing.features.feature4',
  ],
  website: [
    'pages.pricing.packages.website.features.feature1',
    'pages.pricing.packages.website.features.feature2',
    'pages.pricing.packages.website.features.feature3',
    'pages.pricing.packages.website.features.feature4',
  ],
  customSystem: [
    'pages.pricing.packages.customSystem.features.feature1',
    'pages.pricing.packages.customSystem.features.feature2',
    'pages.pricing.packages.customSystem.features.feature3',
    'pages.pricing.packages.customSystem.features.feature4',
  ],
  brandStarter: [
    'pages.pricing.packages.brandStarter.features.feature1',
    'pages.pricing.packages.brandStarter.features.feature2',
    'pages.pricing.packages.brandStarter.features.feature3',
    'pages.pricing.packages.brandStarter.features.feature4',
  ],
  brandSystem: [
    'pages.pricing.packages.brandSystem.features.feature1',
    'pages.pricing.packages.brandSystem.features.feature2',
    'pages.pricing.packages.brandSystem.features.feature3',
    'pages.pricing.packages.brandSystem.features.feature4',
  ],
  videoSocialPack: [
    'pages.pricing.packages.videoSocialPack.features.feature1',
    'pages.pricing.packages.videoSocialPack.features.feature2',
    'pages.pricing.packages.videoSocialPack.features.feature3',
    'pages.pricing.packages.videoSocialPack.features.feature4',
  ],
  launchVideo: [
    'pages.pricing.packages.launchVideo.features.feature1',
    'pages.pricing.packages.launchVideo.features.feature2',
    'pages.pricing.packages.launchVideo.features.feature3',
    'pages.pricing.packages.launchVideo.features.feature4',
  ],
  eventCoverage: [
    'pages.pricing.packages.eventCoverage.features.feature1',
    'pages.pricing.packages.eventCoverage.features.feature2',
    'pages.pricing.packages.eventCoverage.features.feature3',
    'pages.pricing.packages.eventCoverage.features.feature4',
  ],
  contentRetainer: [
    'pages.pricing.packages.contentRetainer.features.feature1',
    'pages.pricing.packages.contentRetainer.features.feature2',
    'pages.pricing.packages.contentRetainer.features.feature3',
    'pages.pricing.packages.contentRetainer.features.feature4',
  ],
}

const MAINTENANCE_FEATURE_KEYS = [
  'pages.pricing.plans.maintenance.features.feature1',
  'pages.pricing.plans.maintenance.features.feature2',
  'pages.pricing.plans.maintenance.features.feature3',
  'pages.pricing.plans.maintenance.features.feature4',
  'pages.pricing.plans.maintenance.features.feature5',
] as const

const GROWTH_FEATURE_KEYS = [
  'pages.pricing.plans.growth.features.feature1',
  'pages.pricing.plans.growth.features.feature2',
  'pages.pricing.plans.growth.features.feature3',
  'pages.pricing.plans.growth.features.feature4',
  'pages.pricing.plans.growth.features.feature5',
  'pages.pricing.plans.growth.features.feature6',
  'pages.pricing.plans.growth.features.feature7',
] as const

const PackageCard: FC<{ pkg: PackageDefinition }> = ({ pkg }) => {
  const baseKey = `pages.pricing.packages.${pkg.id}`
  const featureKeys = PACKAGE_FEATURE_KEYS[pkg.id] ?? []

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-base font-bold uppercase tracking-wider text-slate-900">
        {t(`${baseKey}.title`)}
      </h3>

      <p className="mt-3 text-base text-slate-700 leading-relaxed">
        {t(`${baseKey}.description`)}
      </p>

      <ul className="mt-6 space-y-2 text-sm text-slate-600 flex-1">
        {featureKeys.map((featureKey) => (
          <li key={featureKey}>• {t(featureKey)}</li>
        ))}
      </ul>

      <div className="mt-6 pt-5 border-t border-slate-100">
        <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
          {t(`${baseKey}.priceLabel`)}
        </p>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-slate-900">
            {t(`${baseKey}.price`)}
          </span>
          <span className="text-sm text-slate-500 font-medium">{t(`${baseKey}.suffix`)}</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">
        {t('pages.pricing.packages.button')}
      </button>
    </motion.article>
  )
}

export const PricingPage: FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly')
  const [pricingView, setPricingView] = useState<'monthly' | 'packages'>('monthly')
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId>('all')

  const narrowedIndustry: PackageIndustryId | null = selectedIndustry === 'all' ? null : selectedIndustry

  const filteredPackages =
    narrowedIndustry === null
      ? PACKAGE_DEFINITIONS
      : PACKAGE_DEFINITIONS.filter((pkg) => pkg.industries.some((industry) => industry === narrowedIndustry))

  const industryNavItems: NavItem[] =
    pricingView === 'packages'
      ? INDUSTRIES.map((item) => ({
        id: item.id,
        label: t(item.labelKey),
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
            {t('pages.pricing.heroTitle').toUpperCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 leading-relaxed"
          >
            {t('pages.pricing.heroDescription')}
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
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${pricingView === 'monthly'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              {t('pages.pricing.toggles.monthly')}
            </button>
            <button
              onClick={() => setPricingView('packages')}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${pricingView === 'packages'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              {t('pages.pricing.toggles.packages')}
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
                    className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${billingCycle === 'monthly'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                      }`}
                  >
                    {t('pages.pricing.billing.monthly')}
                  </button>
                  <button
                    onClick={() => setBillingCycle('quarterly')}
                    className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${billingCycle === 'quarterly'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                      }`}
                  >
                    {t('pages.pricing.billing.quarterly')}{' '}
                    <span className="ml-1 text-[10px] text-emerald-500 font-bold">{t('pages.pricing.billing.discount')}</span>
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
                      <h3 className="text-lg font-bold uppercase tracking-wider text-slate-500">{t('pages.pricing.plans.maintenance.name')}</h3>
                      <AnimatedPrice
                        value={billingCycle === 'monthly' ? 900 : 2400}
                        prefix={t('pages.pricing.currencyPrefix')}
                        suffix={billingCycle === 'monthly' ? t('pages.pricing.billing.monthlySuffix') : t('pages.pricing.billing.quarterlySuffix')}
                        className="mt-4"
                        textClassName="text-4xl md:text-5xl font-bold text-slate-900"
                        prefixClassName="text-2xl md:text-3xl font-semibold text-slate-900"
                        suffixClassName="text-slate-500"
                      />
                      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        {t('pages.pricing.plans.maintenance.description')}
                      </p>

                      <ul className="mt-8 space-y-4">
                        {MAINTENANCE_FEATURE_KEYS.map((featureKey) => (
                          <li key={featureKey} className="flex items-start gap-3 text-sm text-slate-700">
                            <svg className="h-5 w-5 shrink-0 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {t(featureKey)}
                          </li>
                        ))}
                      </ul>

                      <button className="mt-8 w-full rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:border-cyan-400 hover:text-cyan-600 transition-colors">
                        {t('pages.pricing.plans.maintenance.button')}
                      </button>
                    </motion.div>

                    {/* Questions / Contact Card */}
                    <motion.div
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      className="rounded-3xl border border-slate-100 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                      <div>
                        <h4 className="font-bold text-slate-900">{t('pages.pricing.plans.helper.title')}</h4>
                        <p className="text-sm text-slate-500 mt-1">{t('pages.pricing.plans.helper.description')}</p>
                      </div>
                      <a
                        href="/contact"
                        className="shrink-0 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                      >
                        {t('pages.pricing.plans.helper.button')}
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
                      {t('pages.pricing.plans.growth.badge')}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400">{t('pages.pricing.plans.growth.name')}</h3>
                      <AnimatedPrice
                        value={billingCycle === 'monthly' ? 2500 : 6750}
                        prefix={t('pages.pricing.currencyPrefix')}
                        suffix={billingCycle === 'monthly' ? t('pages.pricing.billing.monthlySuffix') : t('pages.pricing.billing.quarterlySuffix')}
                        className="mt-6"
                        textClassName="text-5xl md:text-6xl font-bold text-white"
                        prefixClassName="text-3xl md:text-4xl font-semibold text-white"
                        suffixClassName="text-slate-400"
                      />
                      <p className="mt-6 text-base text-slate-300 leading-relaxed">
                        {t('pages.pricing.plans.growth.description')}
                      </p>

                      <div className="mt-10 h-px w-full bg-slate-800" />

                      <ul className="mt-10 space-y-5">
                        {GROWTH_FEATURE_KEYS.map((featureKey) => (
                          <li key={featureKey} className="flex items-start gap-3 text-base text-slate-200">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            {t(featureKey)}
                          </li>
                        ))}
                      </ul>

                      <button className="mt-12 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 px-8 py-4 text-base font-bold text-white shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all">
                        {t('pages.pricing.plans.growth.button')}
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
                          className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs transition ${isActive
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                            }`}
                        >
                          {t(item.labelKey)}
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
