import type { FC } from 'react'
import { t } from '../i18n'

const VizionLogo3D: FC = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <img
                src="/3d/m.png"
                alt={t('components.logo.alt')}
                className="h-full w-full object-contain drop-shadow-2xl"
            />
        </div>
    )
}

export default VizionLogo3D
