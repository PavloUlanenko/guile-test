import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { enkelFont } from '@/lib/fonts';
import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Test description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-black-01 text-white-02 ${enkelFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
