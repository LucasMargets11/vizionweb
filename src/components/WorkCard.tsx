import type { FC } from 'react'

interface WorkCardProps {
    image?: string;
    tags?: string[];
}

export const WorkCard: FC<WorkCardProps> = ({ 
    image = "/reelshowcase/vizion.png", 
    tags = ['Discovery & Strategy', 'Web Design', 'UI / UX'] 
}) => {
    return (
        <div className="group relative aspect-[1/1.35] w-full overflow-hidden rounded-[3rem] bg-[#CFA6FF]">
            {/* Background Image with Zoom & Blur on Hover */}
            <div className="absolute inset-0 h-full w-full transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm">
                <img 
                    src={image} 
                    alt="Project Preview" 
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Tags Container - Appears on Hover */}
            <div className="absolute left-6 top-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tags.map((tag, index) => (
                    <span key={index} className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                        {tag}
                    </span>
                ))}
            </div>

            {/* View Project Button - Centered */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 shadow-xl">
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-900">
                        View Project
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
        </div>
    )
}
