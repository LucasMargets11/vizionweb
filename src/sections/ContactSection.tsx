import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { t } from '../i18n'

const SERVICES_OPTIONS = [
    { id: 'strategy', labelKey: 'pages.contact.form.serviceOptions.strategy' },
    { id: 'branding', labelKey: 'pages.contact.form.serviceOptions.branding' },
    { id: 'design', labelKey: 'pages.contact.form.serviceOptions.design' },
    { id: 'marketing', labelKey: 'pages.contact.form.serviceOptions.marketing' },
    { id: 'development', labelKey: 'pages.contact.form.serviceOptions.development' },
    { id: 'all', labelKey: 'pages.contact.form.serviceOptions.all' },
] as const

const BUDGET_OPTIONS = [
    { id: 'ongoing', labelKey: 'pages.contact.form.budgetOptions.ongoing' },
    { id: 'tier1', labelKey: 'pages.contact.form.budgetOptions.tier1' },
    { id: 'tier2', labelKey: 'pages.contact.form.budgetOptions.tier2' },
    { id: 'tier3', labelKey: 'pages.contact.form.budgetOptions.tier3' },
    { id: 'tier4', labelKey: 'pages.contact.form.budgetOptions.tier4' },
    { id: 'unsure', labelKey: 'pages.contact.form.budgetOptions.unsure' },
] as const

export const ContactSection = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [selectedBudget, setSelectedBudget] = useState<string>('')
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle')

    const handleServiceToggle = (serviceId: string) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(s => s !== serviceId)
                : [...prev, serviceId]
        )
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormState('loading')

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            services: selectedServices,
            budget: selectedBudget,
            message: formData.get('message')
        }

        // Simulating API call matching previous logic pattern roughly
        console.log('Form submitted:', data)

        // Artificial delay for UX
        await new Promise(resolve => setTimeout(resolve, 1500))
        setFormState('success')
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section id="contact" className="relative min-h-screen overflow-hidden bg-slate-50 px-6 py-24 dark:bg-slate-900 lg:px-12">
            {/* Background Blobs */}
            <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-200/40 blur-[100px] md:bg-violet-500/10" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-200/40 blur-[100px] md:bg-cyan-500/10" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
                >
                    {/* Left Column: Info */}
                    <div className="space-y-10">
                        <motion.div variants={itemVariants} className="space-y-4">
                            <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-600 dark:bg-violet-500/20 dark:text-violet-300">
                                {t('sections.contact.badge')}
                            </span>
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                                {t('sections.contact.title')}
                            </h2>
                            <p className="max-w-md text-lg text-slate-600 dark:text-slate-400">
                                {t('sections.contact.description')}
                            </p>
                        </motion.div>

                        {/* What happens next */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                                ¿Qué pasa después?
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { title: 'Análisis', desc: 'Revisamos tu brief y objetivos.' },
                                    { title: 'Kick-off', desc: 'Agendamos una call para conocernos.' },
                                    { title: 'Propuesta', desc: 'Creamos un plan a medida para vos.' }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-slate-900 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:text-white dark:ring-slate-700">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:gap-8">
                            <div>
                                <span className="block font-semibold text-slate-900 dark:text-white">Tiempo de respuesta</span>
                                <span>Max. 24hs hábiles</span>
                            </div>
                            <div className="h-px w-10 bg-slate-200 dark:bg-slate-700 sm:h-8 sm:w-px" />
                            <div className="flex gap-4">
                                <a href="mailto:hola@vizion.studio" className="flex items-center gap-2 transition-colors hover:text-violet-600 dark:hover:text-violet-400">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email
                                </a>
                                <a href="#" className="flex items-center gap-2 transition-colors hover:text-violet-600 dark:hover:text-violet-400">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div variants={itemVariants}>
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 text-slate-900 shadow-2xl dark:border-white/10 dark:bg-slate-800/80 dark:text-white dark:backdrop-blur-xl">
                            <AnimatePresence mode="wait">
                                {formState === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex min-h-[400px] flex-col items-center justify-center space-y-4 px-8 py-12 text-center"
                                    >
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            Listo, les respondemos en 24 hs hábiles.
                                        </p>
                                        <button
                                            onClick={() => setFormState('idle')}
                                            className="mt-6 rounded-full bg-slate-100 px-6 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                                        >
                                            Enviar otro
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 px-6 py-8 sm:px-8"
                                    >
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                    {t('pages.contact.form.fields.name.label')}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:border-violet-500 focus:ring-violet-500/20 dark:border-white/10 dark:bg-slate-900/50 dark:focus:border-violet-400"
                                                    placeholder={t('pages.contact.form.fields.name.placeholder')}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                    {t('pages.contact.form.fields.company.label')}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    required
                                                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:border-violet-500 focus:ring-violet-500/20 dark:border-white/10 dark:bg-slate-900/50 dark:focus:border-violet-400"
                                                    placeholder={t('pages.contact.form.fields.company.placeholder')}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                {t('pages.contact.form.fields.email.label')}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:border-violet-500 focus:ring-violet-500/20 dark:border-white/10 dark:bg-slate-900/50 dark:focus:border-violet-400"
                                                placeholder={t('pages.contact.form.fields.email.placeholder')}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <span className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                {t('pages.contact.form.fields.services.label')}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {SERVICES_OPTIONS.map((service) => {
                                                    const isSelected = selectedServices.includes(service.id)
                                                    return (
                                                        <button
                                                            key={service.id}
                                                            type="button"
                                                            onClick={() => handleServiceToggle(service.id)}
                                                            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200
                                                                ${isSelected
                                                                    ? 'border-violet-500 bg-violet-500 text-white shadow-md shadow-violet-500/30'
                                                                    : 'border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:bg-violet-50 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:bg-slate-800'
                                                                }`}
                                                            aria-pressed={isSelected}
                                                        >
                                                            {t(service.labelKey)}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <span className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                {t('pages.contact.form.fields.budget.label')}
                                            </span>
                                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                                {BUDGET_OPTIONS.map((option) => {
                                                    const isSelected = selectedBudget === option.id
                                                    return (
                                                        <button
                                                            key={option.id}
                                                            type="button"
                                                            onClick={() => setSelectedBudget(option.id)}
                                                            className={`relative flex cursor-pointer items-center justify-center rounded-xl border p-3 text-center text-xs font-medium transition-all duration-200
                                                                ${isSelected
                                                                    ? 'border-violet-500 bg-violet-50/50 text-violet-700 ring-1 ring-violet-500 dark:bg-violet-500/10 dark:text-violet-300'
                                                                    : 'border-slate-200 bg-white text-slate-600 hover:border-violet-300 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:bg-slate-800'
                                                                }`}
                                                            aria-checked={isSelected}
                                                            role="radio"
                                                        >
                                                            {t(option.labelKey)}
                                                            {isSelected && (
                                                                <motion.div
                                                                    layoutId="budget-check"
                                                                    className="absolute right-1 top-1 h-2 w-2 rounded-full bg-violet-500"
                                                                />
                                                            )}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                {t('pages.contact.form.fields.message.label')}
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                className="w-full resize-none rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:border-violet-500 focus:ring-violet-500/20 dark:border-white/10 dark:bg-slate-900/50 dark:focus:border-violet-400"
                                                placeholder={t('pages.contact.form.fields.message.placeholder')}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formState === 'loading'}
                                            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-violet-500/30 transition-all hover:scale-[1.01] hover:shadow-violet-500/40 disabled:opacity-70"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {formState === 'loading' ? (
                                                    <>
                                                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Enviando...
                                                    </>
                                                ) : (
                                                    t('pages.contact.form.submit')
                                                )}
                                            </span>
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
