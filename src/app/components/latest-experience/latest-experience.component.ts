import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
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
      period: '2024 - Actualidad',
      location: 'Santiago, Chile',
      current: true,
      tags: ['Angular', 'Spring Boot', 'Java', 'MongoDB', 'SQL Server', 'Azure', 'GitHub Copilot', 'IA'],
      description:
        'Desarrollador Full Stack liderando iniciativas de desarrollo con fuerte énfasis en herramientas de Inteligencia Artificial. ' +
        'Trabajo proactivamente integrando GitHub Copilot, Claude y Cursor en el flujo de desarrollo del equipo, acelerando entregas y elevando la calidad del código. ' +
        'Me especializo continuamente en nuevas herramientas de IA, evaluando su aplicabilidad en proyectos reales y capacitando al equipo. ' +
        'Lidero el diseño de arquitecturas Full Stack con Angular en frontend y Spring Boot (Java) en backend, junto a MongoDB y SQL Server como bases de datos.',
    },
    {
      title: 'Frontend Developer Senior',
      company: '2Brains',
      period: 'Marzo 2023 - 2024',
      location: 'Santiago, Chile',
      current: false,
      tags: ['Angular', 'TypeScript', 'RxJS', 'Banca', 'Scrum'],
      description:
        'Desarrollador Frontend Senior en proyectos de alto impacto para el sector bancario. ' +
        'Especializado en Angular y TypeScript, optimizando la experiencia del usuario con interfaces modernas, responsivas y accesibles. ' +
        'Participé activamente en equipos ágiles Scrum, aplicando pair programming, code reviews y mejores prácticas de clean code.',
    },
  ];
}
