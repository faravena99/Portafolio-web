import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

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
export class SkillsComponent implements OnInit {
  t = (key: string) => this.languageService.useTranslation('shared').t(key);

  private static ICONS = ['🎨', '⚙️', '🤖', '🛠️', '🚀'];
  private static FLAGS = [
    { isAI: false, isSoft: false },
    { isAI: false, isSoft: false },
    { isAI: true,  isSoft: false },
    { isAI: false, isSoft: false },
    { isAI: false, isSoft: true  }
  ];

  categories: SkillCategory[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.buildCategories();
    this.languageService.language$.subscribe(() => this.buildCategories());
  }

  private buildCategories(): void {
    const raw = this.languageService.getRaw('shared', 'skills.categories') as any[];
    if (!Array.isArray(raw)) return;
    this.categories = raw.map((cat: any, i: number) => ({
      label: cat.label,
      icon: SkillsComponent.ICONS[i] ?? '',
      ...SkillsComponent.FLAGS[i],
      skills: cat.skills ?? []
    }));
  }
}
