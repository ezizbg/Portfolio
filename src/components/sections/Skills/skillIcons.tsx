import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

const iconBase = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Hand-drawn minimal monochrome glyphs — keeps the section coherent with the
// rest of the page and avoids importing a heavy icon library.
export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <path d="M3 3l1.6 17 7.4 2 7.4-2L21 3H3z" />
        <path d="M8 8.5h8M8.5 12.5h7l-.5 5-3 1-3-1-.2-2.2" />
      </svg>
    ),
  },
  {
    name: 'CSS · SCSS · BEM',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3z" />
        <path d="M8 8.5h8M8 12.5h8M8 16.5h6" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M10 9v6.5a1.5 1.5 0 0 1-3 0" />
        <path d="M18 10.2c-.5-.7-1.3-1.2-2.3-1.2-1.4 0-2.3.8-2.3 1.8 0 2.2 4.7 1.4 4.7 4 0 1.2-1.2 2.2-2.7 2.2-1.3 0-2.3-.5-3-1.4" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10h6M10 10v8" />
        <path d="M19 10.5c-.7-.5-1.5-.8-2.4-.8-1.3 0-2.1.7-2.1 1.6 0 2 4.6 1.3 4.6 3.7 0 1.1-1 1.9-2.5 1.9-1.1 0-2-.4-2.7-1.1" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <circle cx="12" cy="12" r="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <path d="M3 4l9 17 9-17H3z" />
        <path d="M8 8l4 8 4-8" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <path d="M12 3.5l8.5 8.5L12 20.5 3.5 12 12 3.5z" />
        <circle cx="9" cy="12" r="1.4" />
        <circle cx="15" cy="9" r="1.4" />
        <circle cx="15" cy="15" r="1.4" />
        <path d="M10.4 12h3.2M14.4 10.2l-2.8 3.6" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg {...iconBase} aria-hidden="true">
        <path d="M9 3h3v6H9a3 3 0 0 1 0-6z" />
        <path d="M12 3h3a3 3 0 0 1 0 6h-3V3z" />
        <path d="M9 9h3v6H9a3 3 0 0 1 0-6z" />
        <circle cx="15" cy="12" r="3" />
        <path d="M9 15h3v6H9a3 3 0 0 1 0-6z" />
      </svg>
    ),
  },
];
