import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('typewriter') typewriterElement!: ElementRef;
  
  t = (key: string) => this.languageService.useTranslation('shared').t(key);
  private languageSub: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Actualizar el typer cuando cambia el idioma
    this.languageSub = this.languageService.language$.subscribe(() => {
      this.initTypewriter();
    });
  }

  ngAfterViewInit() {
    this.initTypewriter();
  }

  ngOnDestroy(): void {
    if (this.languageSub) {
      this.languageSub.unsubscribe();
    }
  }

  private initTypewriter() {
    const text = 'Felipe Aravena';
    const element = this.typewriterElement.nativeElement;
    let index = 0;

    element.textContent = '';

    const writeText = () => {
      if (index === 0) {
        element.classList.remove('not-started');
      }
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(writeText, 150);
      } else {
        element.classList.add('finished');
      }
    };

    setTimeout(writeText, 600);
  }
}
