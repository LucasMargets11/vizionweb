export type ProjectMedia = {
  src: string
  type: 'image' | 'video'
  alt: string
}

export type Project = {
  slug: string
  title: string
  description: string
  cover: string
  media: ProjectMedia[]
}

type ProjectSpec = {
  slug: string
  title: string
  description: string
  assets: string[]
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.arw']
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.webm', '.m4v']

const buildPath = (filename: string) => `/projects/${encodeURIComponent(filename)}`

const buildMedia = (filename: string, title: string): ProjectMedia => {
  const lower = filename.toLowerCase()
  const isVideo = VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext))
  const isImage = IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext))
  const type: ProjectMedia['type'] = isVideo ? 'video' : 'image'
  const cleanedName = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').trim()

  return {
    src: buildPath(filename),
    type,
    alt: `${title} - ${isImage ? 'fotografía' : 'clip'} ${cleanedName}`.trim(),
  }
}

const createProject = ({ slug, title, description, assets }: ProjectSpec): Project => {
  if (!assets.length) {
    throw new Error(`El proyecto "${title}" necesita al menos un asset`)
  }

  const normalizedAssets = assets.map((filename) => ({ filename, media: buildMedia(filename, title) }))
  const coverEntry =
    normalizedAssets.find(({ filename }) => filename.toLowerCase().includes('portada')) ?? normalizedAssets[0]

  const orderedMedia = [
    coverEntry.media,
    ...normalizedAssets.filter((asset) => asset !== coverEntry).map((asset) => asset.media),
  ]

  return {
    slug,
    title,
    description,
    cover: coverEntry.media.src,
    media: orderedMedia,
  }
}

const PROJECT_SPECS: ProjectSpec[] = [
  {
    slug: 'freixenet',
    title: 'Freixenet',
    description: 'Contenido y cobertura visual para campaña/evento. Piezas para redes y material de apoyo.',
    assets: ['freixenet portada.jpg'],
  },
  {
    slug: 'importados',
    title: 'Importados',
    description: 'Fotografía y piezas para catálogo y redes de productos importados.',
    assets: ['improtados portada.ARW', 'importados.mp4'],
  },
  {
    slug: 'karuma',
    title: 'Karuma',
    description: 'Contenido audiovisual para marca: portada, material de video y piezas sociales.',
    assets: ['karuma portada.jpg', 'karuma video.MP4'],
  },
  {
    slug: 'logex',
    title: 'Logex',
    description: 'Fotoproducto para catálogo: set de botellas y packshots listos para e-commerce.',
    assets: ['logex fotoproducto b-4.jpg', 'logex fotoproducto b-7.jpg'],
  },
  {
    slug: 'unaje',
    title: 'Unaje',
    description: 'Cobertura y contenido institucional para marca y activaciones especiales.',
    assets: ['unaje portada.jpg'],
  },
  {
    slug: 'productos',
    title: 'Productos',
    description: 'Serie de fotos de producto y composiciones para catálogo.',
    assets: ['productos-1.jpg', 'productos-2.jpg', 'productos-7.jpg', 'productos-9.jpg'],
  },
  {
    slug: 'flyer-historia',
    title: 'Flyer Historia',
    description: 'Flyer animado para redes y cápsulas de storytelling.',
    assets: ['FLYER HISTORIA.mp4'],
  },
  {
    slug: 'dji-0508-1',
    title: 'DJI 0508 1',
    description: 'Toma aérea capturada con dron DJI para campañas y contenido hero.',
    assets: ['DJI_0508_1.mp4'],
  },
  {
    slug: 'mockup-banner',
    title: 'Mockup Banner',
    description: 'Diseño de banner y mockups para activaciones digitales.',
    assets: ['mockup banner.jpg'],
  },
  {
    slug: 'reels-after-cata-final',
    title: 'Reels After Cata Final',
    description: 'Edición final de reels post cata pensados para redes sociales.',
    assets: ['reels after cata final.mp4'],
  },
]

export const PROJECTS: Project[] = PROJECT_SPECS.map(createProject)
