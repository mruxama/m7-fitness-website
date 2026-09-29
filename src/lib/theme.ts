'use client';

// Theme management
export const THEME_KEY = 'm7-theme';

export function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(THEME_KEY) as 'dark' | 'light' | null;
  if (stored) return stored;
  return 'dark';
}

export function applyTheme(theme: 'dark' | 'light') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

// Inline script for no-flash dark mode default theme init — inject into <head>
export const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('m7-theme');
    var theme = stored || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

