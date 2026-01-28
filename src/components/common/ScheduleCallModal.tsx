import { useState, useEffect, type FC, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScheduleCallModalProps {
  isOpen: boolean
  onClose: () => void
}

const TIMES = ['09:00', '10:30', '14:00', '16:30']
const DAYS_OF_WEEK = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
const WHATSAPP_PHONE = (import.meta.env.VITE_WHATSAPP_PHONE ?? '').replace(/\D/g, '')

export const ScheduleCallModal: FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('produccion')

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) {
      window.alert('Seleccioná una fecha y horario para continuar.')
      return
    }

    const meetingDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate)
    const formattedDate = meetingDate.toLocaleDateString('es-AR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    })

    const messageLines = [
      'Hola! Quisiera agendar una llamada con Vizion.',
      `Nombre: ${fullName}`,
      `Empresa: ${company}`,
      `Email: ${email}`,
      `Interés: ${interest}`,
      `Fecha seleccionada: ${formattedDate}`,
      `Horario seleccionado: ${selectedTime} hs`
    ]

    const whatsappMessage = encodeURIComponent(messageLines.join('\n'))
    const baseUrl = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}` : 'https://wa.me/'
    const whatsappUrl = `${baseUrl}?text=${whatsappMessage}`

    window.open(whatsappUrl, '_blank')
    setFullName('')
    setCompany('')
    setEmail('')
    setInterest('produccion')
    setSelectedDate(null)
    setSelectedTime(null)
    onClose()
  }

  // Simple calendar logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  const days = getDaysInMonth(currentMonth)

  const changeMonth = (increment: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-4xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] p-6 md:p-8 lg:p-10">

              {/* Left Column: Form */}
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-bold text-slate-900">Agendá una llamada</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Cuéntenos un poco sobre su empresa y coordinamos un horario.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col flex-1 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-800">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      required
                      placeholder="Ingresá tu nombre"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-sm font-medium text-slate-800">
                      Empresa / Marca *
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      required
                      placeholder="Nombre de la empresa o marca"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-800">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      placeholder="Ingresá tu email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-800">
                      ¿Qué te interesa?
                    </label>
                    <select
                      id="interest"
                      value={interest}
                      onChange={(event) => setInterest(event.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition appearance-none"
                    >
                      <option value="produccion">Producción audiovisual</option>
                      <option value="web">Desarrollo web & sistemas</option>
                      <option value="branding">Branding & estrategia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-400 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-110 transition hover:scale-[1.02]"
                  >
                    Confirmar datos
                  </button>
                </form>
              </div>

              {/* Right Column: Calendar & Time */}
              <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-8">

                {/* Time Selector */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Seleccioná un horario</h3>
                  <div className="flex flex-wrap gap-2">
                    {TIMES.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-full border px-3 py-1.5 text-xs md:text-sm transition font-medium
                          ${selectedTime === time
                            ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                            : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calendar */}
                <div className="mt-8">
                  <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-900">
                    <button
                      onClick={() => changeMonth(-1)}
                      className="p-1 hover:bg-slate-100 rounded-full transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <span>
                      {currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase())}
                    </span>
                    <button
                      onClick={() => changeMonth(1)}
                      className="p-1 hover:bg-slate-100 rounded-full transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS_OF_WEEK.map(day => (
                      <div key={day} className="text-center text-xs font-medium text-slate-400 py-1">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {days.map((day, index) => (
                      <div key={index} className="aspect-square">
                        {day && (
                          <button
                            onClick={() => setSelectedDate(day)}
                            className={`w-full h-full rounded-lg text-xs md:text-sm flex items-center justify-center transition font-medium
                              ${selectedDate === day
                                ? "bg-slate-900 text-white shadow-md"
                                : "text-slate-700 hover:bg-slate-100"
                              }`}
                          >
                            {day}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col items-end">
                  <p className="text-xs md:text-sm text-slate-600 flex items-center justify-end gap-2">
                    <span className="font-medium">Fecha:</span>
                    {selectedDate
                      ? `${selectedDate} de ${currentMonth.toLocaleDateString('es-ES', { month: 'long' })}`
                      : "Ninguna"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-slate-600 flex items-center justify-end gap-2">
                    <span className="font-medium">Horario:</span>
                    {selectedTime ?? "Sin seleccionar"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
