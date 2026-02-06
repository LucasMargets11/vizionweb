import { useState, useEffect, type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScheduleCallModal } from './ScheduleCallModal'
import { t } from '../../i18n'

export type NavItem = {
    id: string
    label: string
    href?: string
    onClick?: () => void
    active?: boolean
}

const NAV_LINKS = [
    { labelKey: 'nav.services', href: '/servicios' },
    { labelKey: 'nav.pricing', href: '/pricing' },
    { labelKey: 'nav.projects', href: '/projects' },
    { labelKey: 'nav.contact', href: '/contact' },
    { labelKey: 'nav.about', href: '/about' },
] as const

interface HeaderProps {
    secondaryNavItems?: NavItem[]
    secondaryNavClassName?: string
}

const Header: FC<HeaderProps> = ({ secondaryNavItems, secondaryNavClassName }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <>
            <header className="bg-white relative z-40">
                <div className="flex w-full items-start justify-between px-6 py-6 md:px-12">
                    <a href="/" className="flex items-center pt-1">
                        <img src="/icon/logovizion.svg" alt="Vizion Studio" className="h-10 w-auto md:h-14" />
                    </a>

                    <div className="hidden items-start gap-8 md:flex">
                        <button
                            onClick={() => setIsScheduleModalOpen(true)}
                            className="hidden md:inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_20px_rgba(0,87,255,0.25)] hover:bg-blue-700 transition"
                        >
                            {t('header.scheduleCallDesktop')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                                <path d="m22 8-6 4 6 4V8Z" />
                                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                            </svg>
                        </button>
                        <nav className="relative hidden flex-col items-start text-left text-xs font-bold tracking-[0.15em] uppercase leading-loose gap-1 md:flex mr-8">
                            {NAV_LINKS.map((link) => (
                                <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
                                    {t(link.labelKey)}
                                </a>
                            ))}

                            <AnimatePresence>
                                {secondaryNavItems && secondaryNavItems.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className={`absolute left-0 hidden lg:flex flex-col items-start gap-1 ${secondaryNavClassName || 'top-full mt-4'}`}
                                    >
                                        {secondaryNavItems.map((item) => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={item.onClick}
                                                className={`transition-colors hover:text-blue-600 ${item.active ? 'text-blue-600' : 'text-slate-900'
                                                    }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </nav>
                    </div>

                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-900 md:hidden"
                        aria-label="Abrir menú"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span className="sr-only">Abrir menú</span>
                        <span className="flex flex-col gap-1">
                            <span className="block h-0.5 w-5 bg-slate-900" />
                            <span className="block h-0.5 w-5 bg-slate-900" />
                            <span className="block h-0.5 w-5 bg-slate-900" />
                        </span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex h-[100dvh] flex-col bg-white"
                    >
                        {/* Mobile Header (Logo + Close) */}
                        <div className="flex w-full shrink-0 items-start justify-between px-6 py-6 pt-7">
                            <a href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                                <img src="/icon/logovizion.svg" alt="Vizion Studio" className="h-10 w-auto" />
                            </a>
                            <button
                                type="button"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="sr-only">Cerrar menú</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Links */}
                        <nav className="flex flex-1 flex-col justify-center gap-6 overflow-y-auto px-6 pb-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-2xl font-bold uppercase tracking-[0.1em] text-slate-900 transition-colors hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t(link.labelKey)}
                                </a>
                            ))}
                        </nav>

                        {/* Sticky Bottom CTA */}
                        <div className="sticky bottom-0 mt-auto w-full border-t border-slate-100 bg-white px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-4">
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    setIsScheduleModalOpen(true)
                                }}
                                className="w-full rounded-full bg-blue-600 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-blue-700"
                            >
                                {t('header.scheduleCallMobile')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ScheduleCallModal
                isOpen={isScheduleModalOpen}
                onClose={() => setIsScheduleModalOpen(false)}
            />
        </>
    )
}

export default Header
