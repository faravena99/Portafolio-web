import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    // Técnicas
    'Angular',
    'Spring Boot',
    'TypeScript',
    'JavaScript',
    'Java',
    'NestJS',
    'NodeJS',
    'MongoDB',
    'SQL Server',
    'RxJS',
    'Redux',
    'Jasmine',
    'Bootstrap',
    'PrimeNG',
    'CSS3',
    'HTML5',
    'Postman',
    'Git',
    'Azure DevOps',
    'Docker',
    // IA & Productividad
    'GitHub Copilot',
    'Claude (Anthropic)',
    'ChatGPT',
    'Cursor AI',
    'Prompt Engineering',
    'AI-Driven Development',
    // Soft skills & liderazgo
    'Liderazgo Técnico',
    'Principios SOLID',
    'Metodologías Ágiles',
    'Scrum',
    'Coaching',
    'Pair Programming',
    'POO',
    'Clean Code',
    'Resolución de problemas',
    'Gestión del cambio',
    'Trabajo en equipo',
    'Aprendizaje continuo',
  ];
}
