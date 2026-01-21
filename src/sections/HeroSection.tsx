import type { FC } from 'react'
import { t } from '../i18n'

export const HeroSection: FC = () => {
    return (
        <section
            id="hero"
            className="min-h-screen px-6 text-center sm:text-left"
        >
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-6">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
                    {t('sections.hero.badge')}
                </p>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                    {t('sections.hero.title')}
                </h1>
                <p className="max-w-2xl text-base text-slate-300">
                    {t('sections.hero.description')}
                </p>
            </div>
        </section>
    )
}
