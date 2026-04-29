import { TranslationDictionary } from '../services/language.service';

export const translationES: TranslationDictionary = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto'
  },
  hero: {
    available: 'Disponible para nuevos proyectos',
    title: 'Hola, soy',
    subtitle: 'Construyo soluciones de alto impacto con Angular, Spring Boot y el poder de la Inteligencia Artificial. Lidero equipos adoptando proactivamente GitHub Copilot, Claude y Cursor para acelerar entregas y elevar la calidad del código.',
    downloadCV: 'Descargar CV',
    viewProjects: 'Ver Proyectos',
    scroll: 'Scroll',
    yearsExp: 'Años de Experiencia',
    projects: 'Proyectos Completados',
    aiTools: 'Herramientas de IA'
  },
  about: {
    title: 'Sobre Mí',
    subtitle: 'Full Stack Developer | Desarrollo Asistido por IA',
    description: 'Soy un desarrollador Full Stack apasionado por construir soluciones de alto impacto combinando código limpio, liderazgo técnico y el poder de la Inteligencia Artificial. Con más de 6 años de experiencia, me especializo en Angular y Spring Boot, integrando proactivamente herramientas de IA como GitHub Copilot, Claude y Cursor en cada etapa del desarrollo para multiplicar la productividad del equipo y la calidad del producto final.',
    features: [
      'Desarrollo Full Stack con Angular & Spring Boot',
      'Liderazgo técnico y mentoring',
      'Integración de IA en pipelines de desarrollo',
      'Arquitectura escalable y clean code',
      'Metodologías ágiles y DevOps'
    ],
    statsYears: 'Años de Exp.',
    statsProjects: 'Proyectos',
    statsTech: 'Tecnologías'
  },
  experience: {
    title: 'Experiencia Profesional',
    subtitle: '+6 años construyendo soluciones en banca, energía, fintech y minería',
    achievements: 'Logros destacados',
    current: '🤖 IA + Liderazgo',
    present: 'Actualidad',
    jobs: [
      {
        description: 'Desarrollador Full Stack liderando iniciativas con fuerte énfasis en Inteligencia Artificial. Integro proactivamente GitHub Copilot, Claude y Cursor en el flujo del equipo, evaluando y adoptando continuamente nuevas herramientas de IA. Lidero el diseño de arquitecturas Full Stack y capacito al equipo en desarrollo asistido por IA.',
        achievements: [
          'Reducción de tiempos de implementación ~35% mediante integración de GitHub Copilot y Claude en el workflow',
          'Resolución de bug crítico de exportación masiva optimizando queries SQL (batching SQL Server 2100 params limit)',
          'Capacitación de 5+ desarrolladores en herramientas de IA especializadas',
          'Diseño e implementación de arquitecturas Full Stack para sistemas de monitoreo industrial y minero'
        ]
      },
      {
        description: 'Desarrollador Frontend Senior en proyectos de alto impacto para el sector bancario. Desarrollé componentes reutilizables con principios SOLID, integré Google Analytics avanzado y lideré despliegues en producción garantizando continuidad operativa.',
        achievements: [
          'Mejora del 25% en tiempo de carga mediante optimización de gestión de estado y estrategias de rendimiento',
          'Suite de pruebas con cobertura superior al 90% con Jasmine',
          'Integración de Google Analytics avanzado con informes para toma de decisiones basadas en datos',
          'Proceso de despliegue eficiente y automatizado reduciendo tiempos y riesgos en cada release'
        ]
      },
      {
        description: 'Desarrollo de componentes reutilizables en Angular con principios SOLID para el sector energético. Layouts responsivos con Bootstrap, integración de servicios backend y participación activa en ceremonias Scrum.',
        achievements: [
          'Componentes reutilizables que redujeron el tiempo de implementación en futuros módulos',
          'Layouts altamente responsivos mejorando la experiencia en dispositivos móviles',
          'Participación activa en Scrum logrando iteraciones eficientes y entregas puntuales'
        ]
      },
      {
        description: 'Rol Fullstack en dos etapas: primero desarrollando microservicios backend con Java y Spring Boot + PostgreSQL; luego construyendo el frontend con Angular, integrando ambos sistemas para la plataforma de créditos automotrices.',
        achievements: [
          'Desarrollo de microservicios escalables con Java + Spring Boot',
          'Gestión e implementación de base de datos PostgreSQL',
          'Plataformas responsivas con Angular adaptadas a múltiples dispositivos'
        ]
      },
      {
        description: 'Migración del terminal financiero bancario de Banco Santander. Primera etapa: análisis funcional y técnico del sistema legacy. Segunda etapa: desarrollo del nuevo frontend con Angular, diseño de interfaces intuitivas y modernas.',
        achievements: [
          'Migración exitosa del terminal financiero mediante análisis detallado y desarrollo técnico alineado con cliente',
          'Diseño adaptativo y optimizado para el usuario final incrementando la usabilidad del sistema',
          'Integración fluida de servicios backend en la plataforma renovada'
        ]
      }
    ]
  },
  projects: {
    title: 'Mis Proyectos Destacados',
    subtitle: 'Proyectos open source y contribuciones en GitHub',
    viewProject: 'Ver Proyecto'
  },
  skills: {
    title: 'Stack & Competencias',
    subtitle: 'Tecnologías, herramientas de IA y habilidades blandas',
    categories: [
      { label: 'Frontend', skills: ['Angular 17+', 'TypeScript', 'RxJS', 'Redux/NgRx', 'PrimeNG', 'HTML5', 'CSS3/SCSS', 'Bootstrap', 'Jasmine', 'Diseño Responsivo'] },
      { label: 'Backend & Datos', skills: ['Spring Boot', 'Java', '.NET', 'Node.js', 'NestJS', 'REST APIs', 'MongoDB', 'SQL Server', 'Apache Camel', 'Azure Storage Queue'] },
      { label: 'Inteligencia Artificial', skills: ['GitHub Copilot', 'Claude (Anthropic)', 'Cursor AI', 'ChatGPT / GPT-4', 'Prompt Engineering', 'AI-Driven Development', 'LLM Tools', 'Evaluación de herramientas IA'] },
      { label: 'DevOps & Herramientas', skills: ['Azure DevOps', 'Git', 'Docker', 'Kubernetes', 'Postman', 'CI/CD Pipelines', 'Scrum / Agile'] },
      { label: 'Liderazgo & Soft Skills', skills: ['Liderazgo Técnico', 'Mentoring', 'Code Reviews', 'Pair Programming', 'SOLID Principles', 'Clean Code', 'POO', 'Pensamiento Abstracto', 'Resolución de problemas'] }
    ]
  },
  footer: {
    description: 'Full Stack Developer especializado en Angular, Spring Boot y desarrollo asistido por IA',
    navigation: 'Navegación',
    home: 'Inicio',
    about: 'Sobre mí',
    contact: 'Contacto',
    contactLabel: 'Contacto',
    projectQuestion: '¿Tienes un proyecto en mente?',
    workTogether: 'Trabajemos juntos',
    copyright: 'Todos los derechos reservados.',
    madeWith: 'Hecho con',
    usingAngular: 'usando Angular'
  }
};

