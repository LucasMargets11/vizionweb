export interface Project {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  role?: string;
  services?: string[];
  year?: string;
  websiteUrl?: string;
  images: string[];
  tags?: string[];
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'vizion-platform',
    name: 'Vizion Platform',
    shortDescription: 'Una plataforma integral para la gestión de activos digitales y branding corporativo.',
    longDescription: 'Vizion Platform nació de la necesidad de centralizar la gestión de marca en un entorno digital caótico. Trabajamos estrechamente con el cliente para desarrollar una solución que no solo almacena activos, sino que también gestiona flujos de trabajo de aprobación y distribución.\n\nEl resultado es un sistema robusto, escalable y seguro que ha reducido los tiempos de entrega del equipo de marketing en un 40%. La interfaz, diseñada con un enfoque "content-first", permite a los usuarios encontrar lo que necesitan en segundos, gracias a un sistema de etiquetado inteligente y búsqueda semántica.',
    role: 'Full Product Design & Dev',
    services: ['Discovery & Strategy', 'Web Design', 'UI / UX', 'Development'],
    year: '2024',
    websiteUrl: 'https://vizion.agency',
    images: [
      '/reelshowcase/vizion.png',
      '/reelshowcase/vizion.png',
      '/reelshowcase/vizion.png'
    ],
    tags: ['Discovery & Strategy', 'Web Design', 'UI / UX'],
    image: '/reelshowcase/vizion.png'
  },
  {
    id: '2',
    slug: 'neon-branding',
    name: 'Neon Branding',
    shortDescription: 'Identidad visual dinámica para una marca de ropa urbana con presencia global.',
    longDescription: 'Neon buscaba romper con los códigos tradicionales del streetwear. Nuestra propuesta se basó en el concepto de "fluidez digital", creando una identidad que muta y se adapta según el canal y la audiencia.\n\nDesarrollamos un sistema gráfico modular, animaciones para redes sociales y una guía de estilo completa que permite a la marca mantener su coherencia visual mientras explora nuevos territorios estéticos.',
    role: 'Branding & Motion',
    services: ['Brand Identity', 'Motion Graphics', 'Social Media'],
    year: '2023',
    websiteUrl: 'https://example.com',
    images: [
      '/reelshowcase/vizion.png',
      '/reelshowcase/vizion.png'
    ],
    tags: ['Brand Identity', 'Motion Graphics', 'Social Media'],
    image: '/reelshowcase/vizion.png'
  },
  {
    id: '3',
    slug: 'eco-market',
    name: 'Eco Market',
    shortDescription: 'E-commerce de productos sustentables con una experiencia de compra fluida.',
    longDescription: 'El desafío principal de Eco Market era transmitir la calidez y la ética de sus productos a través de una pantalla. Diseñamos una experiencia de usuario centrada en la transparencia y la trazabilidad.\n\nImplementamos un stack tecnológico moderno (Next.js + Shopify) que garantiza tiempos de carga ultrarrápidos y una gestión de inventario en tiempo real, resultando en un aumento del 25% en la tasa de conversión durante el primer trimestre.',
    role: 'E-commerce Dev',
    services: ['E-commerce', 'Development', 'SEO'],
    year: '2023',
    websiteUrl: 'https://example.com',
    images: [
      '/reelshowcase/vizion.png',
      '/reelshowcase/vizion.png',
      '/reelshowcase/vizion.png'
    ],
    tags: ['E-commerce', 'Development', 'SEO'],
    image: '/reelshowcase/vizion.png'
  },
  {
    id: '4',
    slug: 'fintech-app',
    name: 'Fintech App',
    shortDescription: 'Prototipado y diseño de interfaz para la nueva generación de banca móvil.',
    longDescription: 'Rediseñamos la experiencia de banca móvil para centrarla en el usuario joven. Simplificamos flujos complejos como transferencias internacionales e inversiones, haciéndolos accesibles y seguros.\n\nRealizamos múltiples rondas de user testing para validar cada decisión de diseño, logrando una interfaz limpia, intuitiva y altamente funcional que ha recibido excelentes críticas en las tiendas de aplicaciones.',
    role: 'Product Design',
    services: ['App Design', 'Prototyping', 'User Testing'],
    year: '2024',
    websiteUrl: 'https://example.com',
    images: [
      '/reelshowcase/vizion.png',
      '/reelshowcase/vizion.png'
    ],
    tags: ['App Design', 'Prototyping', 'User Testing'],
    image: '/reelshowcase/vizion.png'
  }
]
