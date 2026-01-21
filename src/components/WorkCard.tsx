import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { ProjectMedia } from '../data/projects'
import { t } from '../i18n'

interface WorkCardProps {
    slug: string
    title: string
    description: string
    cover: string
    media: ProjectMedia[]
    tags?: string[]
}

const DEFAULT_TAG_KEYS = [
    'data.projects.services.discoveryStrategy',
    'data.projects.services.webDesign',
    'data.projects.services.ux',
] as const

const coverIsVideo = (media?: ProjectMedia) => media?.type === 'video'

export const WorkCard: FC<WorkCardProps> = ({ slug, title, description, cover, media, tags }) => {
    const coverMedia = media[0]
    const isVideo = coverIsVideo(coverMedia)
    const coverSrc = coverMedia?.src ?? cover
    const coverAlt = coverMedia?.alt ?? t('workCard.alt')
    const tagList = tags && tags.length > 0 ? tags : DEFAULT_TAG_KEYS.map((key) => t(key))

    return (
        <div className="space-y-4">
            <Link
                to={`/projects/${slug}`}
                className="group relative block aspect-[1/1.35] w-full overflow-hidden rounded-[3rem] bg-[#CFA6FF]"
            >
                <div className="absolute inset-0 h-full w-full transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm">
                    {isVideo ? (
                        <video
                            src={coverSrc}
                            className="h-full w-full object-cover"
                            muted
                            loop
                            autoPlay
                            playsInline
                        />
                    ) : (
                        <img src={coverSrc} alt={coverAlt} className="h-full w-full object-cover" loading="lazy" />
                    )}
                </div>

                <div className="absolute left-6 top-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {tagList.map((tag, index) => (
                        <span
                            key={index}
                            className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 shadow-xl">
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-900">
                            {t('workCard.cta')}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-900"
                        >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </div>
                </div>
            </Link>

            <div className="px-1">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
            </div>
        </div>
    )
}
