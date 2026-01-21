import type { FC } from 'react'
import { t } from '../i18n'

export const AboutSection: FC = () => {
    return (
        <section id="about" className="min-h-screen px-6">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-300">{t('sections.about.badge')}</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">{t('sections.about.title')}</h2>
                <p className="text-lg text-slate-300">
                    {t('sections.about.description1')}
                </p>
                <p className="text-base text-slate-400">
                    {t('sections.about.description2')}
                </p>
            </div>
        </section>
    )
}
