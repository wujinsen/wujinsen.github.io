import { site } from '../data/site';

export const pageTitles = site.title;

export function initSiteClient() {
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en', 'zh'] as const;

  function setLang(lang: string) {
    if (!SUPPORTED.includes(lang as (typeof SUPPORTED)[number])) lang = DEFAULT_LANG;
    document.documentElement.setAttribute('lang', lang);
    document.title = pageTitles[lang as keyof typeof pageTitles];

    document.querySelectorAll<HTMLElement>('[data-en]').forEach((el) => {
      const value = el.getAttribute(`data-${lang}`);
      if (value === null) return;
      if (value.includes('<')) el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll<HTMLElement>('[data-set-lang]').forEach((el) => {
      if (el.getAttribute('data-set-lang') === lang) el.classList.add('active');
      else el.classList.remove('active');
    });

    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* ignore */
    }
  }

  function detectInitial() {
    try {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      if (urlLang && SUPPORTED.includes(urlLang as (typeof SUPPORTED)[number])) return urlLang;
    } catch {
      /* ignore */
    }

    try {
      const saved = localStorage.getItem('lang');
      if (saved && SUPPORTED.includes(saved as (typeof SUPPORTED)[number])) return saved;
    } catch {
      /* ignore */
    }

    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('zh')) return 'zh';
    return DEFAULT_LANG;
  }

  function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    els.forEach((el) => io.observe(el));
  }

  document.querySelectorAll('[data-set-lang]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      setLang((e.currentTarget as HTMLElement).getAttribute('data-set-lang') || DEFAULT_LANG);
    });
  });

  setLang(detectInitial());
  initReveal();
}

initSiteClient();
