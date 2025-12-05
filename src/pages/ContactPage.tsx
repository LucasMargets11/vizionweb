import { useState, type FC, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import { Footer } from '../components/common/Footer'

const SERVICES_OPTIONS = [
  'Strategy',
  'Branding',
  'Design',
  'Marketing',
  'Development',
  'All'
]

const BUDGET_OPTIONS = [
  'Ongoing support',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '50,000+',
  'Not sure'
]

export const ContactPage: FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string>('')

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      services: selectedServices,
      budget: selectedBudget,
      message: formData.get('message')
    }
    console.log('Form submitted:', data)
    // Here you would typically send the data to an API
  }

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
            CONTACTO
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 leading-relaxed"
          >
            Cuéntennos sobre su marca, sus ideas o el proyecto que quieren desarrollar. Podemos ayudar con estrategia, contenido, producción audiovisual y desarrollo digital; empecemos por una buena conversación.
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 h-px w-full bg-slate-200 origin-left" 
          />
        </section>

        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-4xl space-y-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-slate-800">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-slate-800">
                Company name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder="Enter company name"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-800">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition"
            />
          </div>

          {/* Services Checkboxes */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-800">
              What services are you interested in ? *
            </label>
            <div className="flex flex-wrap gap-3">
              {SERVICES_OPTIONS.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs md:text-sm transition
                    ${selectedServices.includes(service)
                      ? 'border-cyan-400 bg-cyan-50 text-cyan-700 font-medium'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-cyan-400 hover:bg-cyan-50'
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>
            {/* Hidden input for validation if needed, or handle in onSubmit */}
            <input 
              type="text" 
              name="services" 
              value={selectedServices.join(',')} 
              readOnly 
              className="sr-only" 
              required={selectedServices.length === 0}
              onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please select at least one service')}
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
            />
          </div>

          {/* Budget Radios */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-800">
              What is your budget range ?
            </label>
            <div className="flex flex-wrap gap-3">
              {BUDGET_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedBudget(option)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs md:text-sm transition
                    ${selectedBudget === option
                      ? 'border-cyan-400 bg-cyan-50 text-cyan-700 font-medium'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-cyan-400 hover:bg-cyan-50'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <input type="hidden" name="budget" value={selectedBudget} />
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-800">
              How can we help ? *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Enter any project specific details..."
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full px-8 md:px-10 py-3.5 text-sm md:text-base font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 text-white shadow-lg shadow-cyan-400/30 hover:scale-[1.02] hover:shadow-cyan-400/40 transition-all duration-300"
            >
              Enviar mensaje
            </button>
          </div>
        </motion.form>
      </main>

      <Footer />
    </div>
  )
}
