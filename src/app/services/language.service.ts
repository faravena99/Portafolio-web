import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  public currentLanguage$: Observable<string> = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.loadSavedLanguage();
  }

  private loadSavedLanguage(): void {
    const savedLang = localStorage.getItem('language') || 'es';
    this.setLanguage(savedLang);
  }

  public setLanguage(lang: string): void {
    if (['es', 'en'].includes(lang)) {
      this.translate.use(lang);
      this.currentLanguageSubject.next(lang);
      localStorage.setItem('language', lang);
    }
  }

  public getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  public toggleLanguage(): void {
    const newLang = this.getCurrentLanguage() === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }
}
