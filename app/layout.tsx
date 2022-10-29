import { Space_Grotesk } from '@next/font/google';

const font = Space_Grotesk({
  fallback: ['system-ui', 'sans-serif'],
  display: 'auto',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐞</text></svg>"
        />
        <title>Buggy bug</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export const dynamic = 'error';
