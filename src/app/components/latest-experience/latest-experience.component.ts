import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

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
export class LatestExperienceComponent implements OnInit {
  t = (key: string) => this.languageService.useTranslation('shared').t(key);

  experiences: Experience[] = [];

  private static BASE_EXPERIENCES = [
    {
      title: 'Full Stack Developer',
      company: 'Amaris Consulting',
      location: 'Santiago, Chile',
      current: true,
      tags: ['Angular', 'Spring Boot', 'Java', 'MongoDB', 'SQL Server', 'Azure', 'GitHub Copilot', 'Claude', 'Cursor'],
    },
    {
      title: 'Frontend Developer Senior',
      company: '2Brains',
      location: 'Santiago, Chile',
      client: 'Banco de Chile',
      current: false,
      tags: ['Angular', 'TypeScript', 'Redux', 'RxJS', 'Jasmine', 'Google Analytics', 'Scrum'],
    },
    {
      title: 'Frontend Developer',
      company: 'Soho',
      location: 'Santiago, Chile',
      client: 'Gasco',
      current: false,
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'CSS', 'Jasmine', 'Scrum', 'REST APIs'],
    },
    {
      title: 'Fullstack Developer',
      company: 'Mundo Crédito',
      location: 'Santiago, Chile',
      client: 'Créditos Automotrices',
      current: false,
      tags: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL', 'Postman', 'Microservicios'],
    },
    {
      title: 'Frontend Developer',
      company: 'Qintess',
      location: 'Santiago, Chile',
      client: 'Banco Santander',
      current: false,
      tags: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs'],
    }
  ];

  private static PERIODS = [
    { start: '2024', endKey: 'experience.present' },
    { start: 'Marzo 2023', end: '2024' },
    { start: 'Noviembre 2021', end: 'Febrero 2023' },
    { start: 'Enero 2021', end: 'Septiembre 2021' },
    { start: 'Enero 2019', end: 'Abril 2020' }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.buildExperiences();
    this.languageService.language$.subscribe(() => this.buildExperiences());
  }

  private buildExperiences(): void {
    const jobs = this.languageService.getRaw('shared', 'experience.jobs') as any[];
    const present = this.t('experience.present') as string;

    this.experiences = LatestExperienceComponent.BASE_EXPERIENCES.map((base, i) => {
      const job = jobs?.[i] ?? {};
      const periodDef = LatestExperienceComponent.PERIODS[i];
      const end = periodDef.endKey ? present : periodDef.end;
      return {
        ...base,
        period: `${periodDef.start} – ${end}`,
        description: job.description ?? '',
        achievements: job.achievements ?? []
      } as Experience;
    });
  }
}

