import { TranslationDictionary } from '../services/language.service';

export const translationEN: TranslationDictionary = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
  },
  hero: {
    available: 'Available for new projects',
    title: 'Hi, I am',
    subtitle: 'I build high-impact solutions with Angular, Spring Boot and the power of Artificial Intelligence. I lead teams proactively adopting GitHub Copilot, Claude and Cursor to accelerate deliveries and elevate code quality.',
    downloadCV: 'Download CV',
    viewProjects: 'View Projects',
    scroll: 'Scroll',
    yearsExp: 'Years of Experience',
    projects: 'Completed Projects',
    aiTools: 'AI Tools'
  },
  about: {
    title: 'About Me',
    subtitle: 'Full Stack Developer | AI-Driven Development',
    description: 'I am a passionate Full Stack developer focused on building high-impact solutions combining clean code, technical leadership and the power of Artificial Intelligence. With over 6 years of experience, I specialize in Angular and Spring Boot, proactively integrating AI tools like GitHub Copilot, Claude and Cursor at every stage of development to multiply team productivity and final product quality.',
    features: [
      'Full Stack Development with Angular & Spring Boot',
      'Technical leadership and mentoring',
      'AI integration in development pipelines',
      'Scalable architecture and clean code',
      'Agile methodologies and DevOps'
    ],
    statsYears: 'Years of Exp.',
    statsProjects: 'Projects',
    statsTech: 'Technologies'
  },
  experience: {
    title: 'Professional Experience',
    subtitle: '+6 years building solutions in banking, energy, fintech and mining',
    achievements: 'Key Achievements',
    current: '🤖 AI + Leadership',
    present: 'Present',
    jobs: [
      {
        description: 'Full Stack Developer leading initiatives with a strong emphasis on Artificial Intelligence. I proactively integrate GitHub Copilot, Claude and Cursor into the team workflow, continuously evaluating and adopting new AI tools. I lead Full Stack architecture design and train the team on AI-assisted development.',
        achievements: [
          '~35% reduction in implementation time by integrating GitHub Copilot and Claude into the workflow',
          'Critical mass export bug fix by optimizing SQL queries (batching SQL Server 2100 params limit)',
          'Training 5+ developers on specialized AI tools',
          'Design and implementation of Full Stack architectures for industrial and mining monitoring systems'
        ]
      },
      {
        description: 'Senior Frontend Developer on high-impact projects for the banking sector. Developed reusable components with SOLID principles, integrated advanced Google Analytics, and led production deployments ensuring operational continuity.',
        achievements: [
          '25% improvement in load time through state management optimization and performance strategies',
          'Test suite with over 90% coverage using Jasmine',
          'Advanced Google Analytics integration with data-driven decision reports',
          'Efficient automated deployment process reducing time and risk per release'
        ]
      },
      {
        description: 'Development of reusable Angular components with SOLID principles for the energy sector. Responsive layouts with Bootstrap, backend service integration and active participation in Scrum ceremonies.',
        achievements: [
          'Reusable components that reduced implementation time in future modules',
          'Highly responsive layouts improving mobile device experience',
          'Active Scrum participation achieving efficient iterations and on-time deliveries'
        ]
      },
      {
        description: 'Fullstack role in two stages: first developing backend microservices with Java and Spring Boot + PostgreSQL; then building the frontend with Angular, integrating both systems for the automotive credit platform.',
        achievements: [
          'Scalable microservices development with Java + Spring Boot',
          'PostgreSQL database management and implementation',
          'Responsive Angular platforms adapted to multiple devices'
        ]
      },
      {
        description: 'Migration of Banco Santander financial terminal. First stage: functional and technical analysis of the legacy system. Second stage: development of the new Angular frontend, designing intuitive and modern interfaces.',
        achievements: [
          'Successful financial terminal migration through detailed analysis and client-aligned technical development',
          'Adaptive design optimized for end users increasing system usability',
          'Seamless backend service integration into the renewed platform'
        ]
      }
    ]
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Open source projects and GitHub contributions',
    viewProject: 'View Project'
  },
  skills: {
    title: 'Stack & Competencies',
    subtitle: 'Technologies, AI tools and soft skills',
    categories: [
      { label: 'Frontend', skills: ['Angular 17+', 'TypeScript', 'RxJS', 'Redux/NgRx', 'PrimeNG', 'HTML5', 'CSS3/SCSS', 'Bootstrap', 'Jasmine', 'Responsive Design'] },
      { label: 'Backend & Data', skills: ['Spring Boot', 'Java', '.NET', 'Node.js', 'NestJS', 'REST APIs', 'MongoDB', 'SQL Server', 'Apache Camel', 'Azure Storage Queue'] },
      { label: 'Artificial Intelligence', skills: ['GitHub Copilot', 'Claude (Anthropic)', 'Cursor AI', 'ChatGPT / GPT-4', 'Prompt Engineering', 'AI-Driven Development', 'LLM Tools', 'AI Tool Evaluation'] },
      { label: 'DevOps & Tools', skills: ['Azure DevOps', 'Git', 'Docker', 'Kubernetes', 'Postman', 'CI/CD Pipelines', 'Scrum / Agile'] },
      { label: 'Leadership & Soft Skills', skills: ['Technical Leadership', 'Mentoring', 'Code Reviews', 'Pair Programming', 'SOLID Principles', 'Clean Code', 'OOP', 'Abstract Thinking', 'Problem Solving'] }
    ]
  },
  footer: {
    description: 'Full Stack Developer specialized in Angular, Spring Boot and AI-assisted development',
    navigation: 'Navigation',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    contactLabel: 'Contact',
    projectQuestion: 'Do you have a project in mind?',
    workTogether: 'Let\'s work together',
    copyright: 'All rights reserved.',
    madeWith: 'Made with',
    usingAngular: 'using Angular'
  }
};
