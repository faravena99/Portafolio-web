import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Establecer idiomas soportados
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    
    // Detectar idioma del navegador o usar español por defecto
    const browserLang = this.translate.getBrowserLang();
    const lang = (browserLang && ['es', 'en'].includes(browserLang)) ? browserLang : 'es';
    this.translate.use(lang);
    
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
