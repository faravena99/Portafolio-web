import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <span class="logo-text">Felipe Aravena</span>
        </div>
        
        <div class="language-selector">
          <button 
            class="lang-btn" 
            [class.active]="currentLanguage === 'es'"
            (click)="changeLanguage('es')"
            title="Español">
            🇪🇸 ES
          </button>
          <span class="lang-separator">|</span>
          <button 
            class="lang-btn" 
            [class.active]="currentLanguage === 'en'"
            (click)="changeLanguage('en')"
            title="English">
            🇺🇸 EN
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentLanguage: Language = 'es';
  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageSubscription = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  changeLanguage(lang: Language): void {
    this.languageService.changeLanguage(lang);
  }
}
