import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';
import { translationES } from './i18n/es';
import { translationEN } from './i18n/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Registrar traducciones
    this.languageService.registerTranslations('es', 'shared', translationES);
    this.languageService.registerTranslations('en', 'shared', translationEN);
    
    // Detectar idioma del navegador o usar español por defecto
    const browserLang = this.languageService.language$;
    const currentLang = this.languageService.getCurrentLanguage();
    
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  }
}
