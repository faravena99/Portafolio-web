import { Component } from '@angular/core';

interface SkillCategory {
  label: string;
  icon: string;
  isAI?: boolean;
  isSoft?: boolean;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      label: 'Frontend', icon: '🎨',
      skills: ['Angular 17+', 'TypeScript', 'RxJS', 'Redux/NgRx', 'PrimeNG', 'HTML5', 'CSS3/SCSS', 'Bootstrap', 'Jasmine', 'Responsive Design']
    },
    {
      label: 'Backend & Datos', icon: '⚙️',
      skills: ['Spring Boot', 'Java', 'Node.js', 'NestJS', 'REST APIs', 'MongoDB', 'SQL Server', 'Apache Camel', 'Azure Storage Queue']
    },
    {
      label: 'Inteligencia Artificial', icon: '🤖', isAI: true,
      skills: ['GitHub Copilot', 'Claude (Anthropic)', 'Cursor AI', 'ChatGPT / GPT-4', 'Prompt Engineering', 'AI-Driven Development', 'LLM Tools', 'Evaluación de herramientas IA']
    },
    {
      label: 'DevOps & Herramientas', icon: '🛠️',
      skills: ['Azure DevOps', 'Git', 'Docker', 'Postman', 'CI/CD Pipelines', 'Scrum / Agile']
    },
    {
      label: 'Liderazgo & Soft Skills', icon: '🚀', isSoft: true,
      skills: ['Liderazgo Técnico', 'Mentoring', 'Code Reviews', 'Pair Programming', 'SOLID Principles', 'Clean Code', 'POO', 'Pensamiento Abstracto', 'Resolución de problemas']
    },
  ];
}
