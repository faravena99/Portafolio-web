import { Component, OnInit } from '@angular/core';
import { StatItem } from './about.interface';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  t = (key: string) => this.languageService.useTranslation('shared').t(key);

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

  features: string[] = [];
  stats = [
    { number: '6+', label: 'Años' },
    { number: '30+', label: 'Proyectos' },
    { number: '10+', label: 'Tecnologías' }
  ];

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

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.updateFeatures();
    // Actualizar características cuando cambia el idioma
    this.languageService.language$.subscribe(() => {
      this.updateFeatures();
    });
  }

  private updateFeatures(): void {
    const featuresData = this.t('about.features');
    // Intentar parsear si es string JSON
    if (typeof featuresData === 'string' && featuresData.startsWith('[')) {
      try {
        this.features = JSON.parse(featuresData);
      } catch {
        this.features = [
          'Desarrollo Full Stack con Angular & Spring Boot',
          'Liderazgo técnico y mentoring',
          'Integración de IA en pipelines de desarrollo',
          'Arquitectura escalable y clean code',
          'Metodologías ágiles y DevOps'
        ];
      }
    } else if (Array.isArray(featuresData)) {
      this.features = featuresData as string[];
    } else {
      this.features = [
        'Desarrollo Full Stack con Angular & Spring Boot',
        'Liderazgo técnico y mentoring',
        'Integración de IA en pipelines de desarrollo',
        'Arquitectura escalable y clean code',
        'Metodologías ágiles y DevOps'
      ];
    }
  }

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
}

