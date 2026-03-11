import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Mono, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

/*
 * Tailwind v4: font variables are declared in @theme inside globals.css.
 * We still load the fonts via next/font so Next.js injects the @font-face
 * rules, but the CSS custom properties are owned by Tailwind's @theme.
 */
const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sophanith Mey — Frontend Developer',
  description: 'Frontend developer crafting thoughtful digital experiences.',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      /*
       * Apply next/font variables so the actual font files are wired up.
       * Tailwind v4's @theme tokens reference these same CSS variable names.
       */
      className={`${dmSerif.variable} ${dmMono.variable} ${dmSans.variable}`}
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
