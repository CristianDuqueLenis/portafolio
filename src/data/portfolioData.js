export const profile = {
  name: 'Cristian Duque Lenis',
  role: 'Estudiante de Ingeniería informática',
  city: 'Bello, Colombia',
  email: 'cristianduquelenis@gmail.com',
  phone: '3104831674',
  summary:
    'Estudiante de Ingeniería informática con formación técnica en gestión del riesgo y atención de emergencias, enfocado en desarrollar soluciones de software útiles para fortalecer la seguridad, la prevención y la toma de decisiones en contextos reales.',
  tagline: 'Cada problema es una oportunidad para descubrir una solución diferente.',
  photoAlt: 'Fotografía de Cristian Duque Lenis',
  photoUrl: 'https://avatars.githubusercontent.com/CristianDuqueLenis?v=4'
}

export const navItems = [
  { id: 'sobre-mi', text: 'Sobre mí' },
  { id: 'formacion', text: 'Formación' },
  { id: 'proyectos', text: 'Proyectos' },
  { id: 'tecnologias', text: 'Tecnologías' },
  { id: 'intereses', text: 'Intereses' },
  { id: 'contacto', text: 'Contacto' }
]

export const studies = [
  {
    program: 'Bachiller académico',
    status: 'Finalizado',
    extra: 'Formación media académica completa.'
  },
  {
    program: 'Formación técnica integral en emergencias y seguridad',
    status: 'Finalizado',
    extra:
      'Integra atención de incendios, rescates y otras emergencias; seguridad y salud en el trabajo; y gestión de emergencias y desastres.'
  },
  {
    program: 'Inspector de seguridad y Bombero (Niveles I y II)',
    status: 'Finalizado',
    extra:
      'Certificación operativa y normativa para inspección de seguridad y atención de emergencias, avalada por la Dirección Nacional de Bomberos de Colombia.'
  },
  {
    program: 'Ingeniería informática',
    status: 'Actualmente estudiante',
    extra: 'Proceso formativo universitario en Unilasallista enfocado en desarrollo de software.'
  }
]

export const projects = [
  {
    name: 'PySL (Prevención y Seguridad Locativa)',
    type: 'fullstack',
    status: 'En progreso',
    problem:
      'Ayuda a establecimientos de comercio a cumplir con la Ley 1801 (artículos 86 y 87) para obtener concepto favorable y operar formalmente.',
    contribution:
      'Diseño e implementación del software para estructurar inspecciones de seguridad locativa y registrar evidencia técnica.',
    description:
      'Proyecto en progreso orientado a digitalizar procesos de inspección, mejorar trazabilidad y agilizar la evaluación de requisitos de seguridad.',
    technologies: ['Python', 'MongoDB'],
    repository: 'https://github.com/CristianDuqueLenis',
    demo: ''
  }
]

export const projectFilters = [
  { value: 'all', label: 'Todos' },
  { value: 'fullstack', label: 'FullStack' }
]

export const techGroups = [
  {
    title: 'Lenguajes de programación',
    items: ['Python', 'JavaScript']
  },
  {
    title: 'Bases de datos',
    items: ['MongoDB']
  },
  {
    title: 'Frontend',
    items: ['React', 'Tailwind', 'CSS', 'HTML']
  },
]

export const techLogos = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  }
]

export const interests = [
  {
    title: 'Informática aplicada a emergencias',
    description:
      'Uso de software para fortalecer prevención, respuesta y seguimiento en escenarios de riesgo.'
  },
  {
    title: 'Telecomunicaciones en emergencias',
    description:
      'Interés en soluciones tecnológicas que mejoren coordinación y flujo de información en eventos críticos.'
  }
]

export const contactLinks = [
  { label: 'Celular', value: '3104831674', href: '' },
  {
    label: 'Correo',
    value: 'cristianduquelenis@gmail.com',
    href: 'mailto:cristianduquelenis@gmail.com'
  },
  {
    label: 'GitHub',
    value: 'https://github.com/CristianDuqueLenis',
    href: 'https://github.com/CristianDuqueLenis'
  }
]
