import { Component } from '@angular/core';
import { StatItem } from './about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  personalInfo = {
    name: 'Felipe Alejandro Aravena Ponce',
    title: 'Full Stack Developer | AI-Driven Development',
    location: 'Santiago, Región Metropolitana',
    contact: {
      phone: '(56)973665437',
      email: 'felipe.aravena99@gmail.com',
      linkedin:
        'https://linkedin.com/in/felipe-alejandro-aravena-ponce-174430163/',
      github: 'https://github.com/faravena99',
    },
    description:
      'Desarrollador Full Stack con más de 6 años de experiencia construyendo soluciones de alto rendimiento. Especializado en Angular y Spring Boot, con un enfoque profundo en el desarrollo asistido por IA. Lidero equipos técnicos adoptando proactivamente herramientas como GitHub Copilot, Claude y Cursor para acelerar entregas y elevar la calidad del código.',
  };

  skills = [
    'Angular',
    'Spring Boot',
    'TypeScript',
    'JavaScript',
    'Node JS',
    'Java',
    'MongoDB',
    'SQL Server',
    'Bootstrap',
    'CSS',
    'HTML',
    'Redux',
    'SOLID Principles',
  ];

  education = [
    {
      course: 'Angular Developer',
      institution: 'Escalab Tech Talent Hub',
      location: 'Santiago Centro',
      date: 'Mayo 2022',
      credential:
        'https://www.credly.com/badges/83535e78-400a-4e48-8181-6c026b24d368?source=linked_in_profile',
    },
  ];

  features: string[] = [
    'Desarrollo Full Stack Moderno',
    'Liderazgo Técnico de Equipos',
    'Desarrollo Asistido por IA',
    'Especialización en Herramientas de IA',
    'Integración de AI en Workflows',
    'Clean Code & SOLID Principles',
  ];

  stats: StatItem[] = [
    { number: '6+', label: 'Años de Experiencia' },
    { number: '30+', label: 'Proyectos Completados' },
    { number: '10+', label: 'Herramientas de IA' },
  ];
}
