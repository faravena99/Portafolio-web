import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';

export type Language = 'es' | 'en';
export type TranslationValue = string | TranslationDictionary;
export type TranslationDictionary = { [key: string]: TranslationValue };

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly namespaceCache = new Map<string, TranslationDictionary>();
  private readonly langSubject: BehaviorSubject<Language>;

  readonly language$: Observable<Language>;

  constructor() {
    const stored = this.readStorage();
    this.langSubject = new BehaviorSubject<Language>((stored as Language) ?? 'es');
    this.language$ = this.langSubject.pipe(distinctUntilChanged(), shareReplay(1));
  }

  registerTranslations(lang: Language, namespace: string, translations: TranslationDictionary): void {
    const key = `${lang}:${namespace}`;
    const existing = this.namespaceCache.get(key) ?? {};
    this.namespaceCache.set(key, { ...existing, ...translations });
  }

  useTranslation(namespace: string): { t: (key: string, params?: Record<string, unknown>) => string } {
    const resolveCache = new Map<string, string>();

    return {
      t: (key: string, params?: Record<string, unknown>): string => {
        const cacheKey = `${this.langSubject.value}:${key}:${JSON.stringify(params ?? {})}`;

        if (resolveCache.has(cacheKey)) {
          return resolveCache.get(cacheKey)!;
        }

        const result = this.resolve(key, namespace, params);
        resolveCache.set(cacheKey, result);
        return result;
      },
    };
  }

  changeLanguage(lang: Language): void {
    if (lang === this.langSubject.value) return;
    this.langSubject.next(lang);
    this.writeStorage(lang);
  }

  getCurrentLanguage(): Language {
    return this.langSubject.value;
  }

  private resolve(key: string, namespace: string, params?: Record<string, unknown>): string {
    const lang = this.langSubject.value;
    const dict = this.namespaceCache.get(`${lang}:${namespace}`);

    if (!dict) return `[${namespace}.${key}]`;

    const keys = key.split('.');
    let value: TranslationValue | undefined = dict;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = (value as TranslationDictionary)[k];
      } else {
        return `[${namespace}.${key}]`;
      }
    }

    if (typeof value !== 'string') {
      return `[${namespace}.${key}]`;
    }

    if (params) {
      return value.replace(/\{(\w+)\}/g, (_, p) => String(params[p] ?? `{${p}}`));
    }

    return value;
  }

  private readStorage(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    try {
      return localStorage.getItem('language');
    } catch {
      return null;
    }
  }

  private writeStorage(lang: Language): void {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      localStorage.setItem('language', lang);
    } catch {
      // Ignorar errores de localStorage
    }
  }
}
