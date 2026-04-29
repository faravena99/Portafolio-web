import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  client?: string;
  description: string;
  achievements: string[];
  tags: string[];
  current: boolean;
}

@Component({
  selector: 'app-latest-experience',
  templateUrl: './latest-experience.component.html',
  styleUrls: ['./latest-experience.component.scss']
})
export class LatestExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Full Stack Developer',
      company: 'Amaris Consulting',
      period: '2024 – Actualidad',
      location: 'Santiago, Chile',
      current: true,
      tags: ['Angular', 'Spring Boot', 'Java', 'MongoDB', 'SQL Server', 'Azure', 'GitHub Copilot', 'Claude', 'Cursor'],
      description: 'Desarrollador Full Stack liderando iniciativas con fuerte énfasis en Inteligencia Artificial. Integro proactivamente GitHub Copilot, Claude y Cursor en el flujo del equipo, evaluando y adoptando continuamente nuevas herramientas de IA. Lidero el diseño de arquitecturas Full Stack y capacito al equipo en desarrollo asistido por IA.',
      achievements: [
        'Reducción de tiempos de implementación ~35% mediante integración de GitHub Copilot y Claude en el workflow',
        'Resolución de bug crítico de exportación masiva optimizando queries SQL (batching SQL Server 2100 params limit)',
        'Capacitación de 5+ desarrolladores en herramientas de IA especializadas',
        'Diseño e implementación de arquitecturas Full Stack para sistemas de monitoreo industrial y minero'
      ]
    },
    {
      title: 'Frontend Developer Senior',
      company: '2Brains',
      period: 'Marzo 2023 – 2024',
      location: 'Santiago, Chile',
      client: 'Banco de Chile',
      current: false,
      tags: ['Angular', 'TypeScript', 'Redux', 'RxJS', 'Jasmine', 'Google Analytics', 'Scrum'],
      description: 'Desarrollador Frontend Senior en proyectos de alto impacto para el sector bancario. Desarrollé componentes reutilizables con principios SOLID, integré Google Analytics avanzado y lideré despliegues en producción garantizando continuidad operativa.',
      achievements: [
        'Mejora del 25% en tiempo de carga mediante optimización de gestión de estado y estrategias de rendimiento',
        'Suite de pruebas con cobertura superior al 90% con Jasmine',
        'Integración de Google Analytics avanzado con informes para toma de decisiones basadas en datos',
        'Proceso de despliegue eficiente y automatizado reduciendo tiempos y riesgos en cada release'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Soho',
      period: 'Noviembre 2021 – Febrero 2023',
      location: 'Santiago, Chile',
      client: 'Gasco (Industria Energética)',
      current: false,
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'CSS', 'Jasmine', 'Scrum', 'REST APIs'],
      description: 'Desarrollo de componentes reutilizables en Angular con principios SOLID para el sector energético. Layouts responsivos con Bootstrap, integración de servicios backend y participación activa en ceremonias Scrum.',
      achievements: [
        'Componentes reutilizables que redujeron el tiempo de implementación en futuros módulos',
        'Layouts altamente responsivos mejorando la experiencia en dispositivos móviles',
        'Participación activa en Scrum logrando iteraciones eficientes y entregas puntuales'
      ]
    },
    {
      title: 'Fullstack Developer',
      company: 'Mundo Crédito',
      period: 'Enero 2021 – Septiembre 2021',
      location: 'Santiago, Chile',
      client: 'Créditos Automotrices',
      current: false,
      tags: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL', 'Postman', 'Microservicios'],
      description: 'Rol Fullstack en dos etapas: primero desarrollando microservicios backend con Java y Spring Boot + PostgreSQL; luego construyendo el frontend con Angular, integrando ambos sistemas para la plataforma de créditos automotrices.',
      achievements: [
        'Desarrollo de microservicios escalables con Java + Spring Boot',
        'Gestión e implementación de base de datos PostgreSQL',
        'Plataformas responsivas con Angular adaptadas a múltiples dispositivos'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Qintess',
      period: 'Enero 2019 – Abril 2020',
      location: 'Santiago, Chile',
      client: 'Banco Santander',
      current: false,
      tags: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs', 'Análisis Funcional'],
      description: 'Migración del terminal financiero bancario de Banco Santander. Primera etapa: análisis funcional y técnico del sistema legacy. Segunda etapa: desarrollo del nuevo frontend con Angular, diseño de interfaces intuitivas y modernas.',
      achievements: [
        'Migración exitosa del terminal financiero mediante análisis detallado y desarrollo técnico alineado con cliente',
        'Diseño adaptativo y optimizado para el usuario final incrementando la usabilidad del sistema',
        'Integración fluida de servicios backend en la plataforma renovada'
      ]
    },
  ];
}
