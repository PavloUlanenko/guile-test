import localFont from 'next/font/local';

export const enkelFont = localFont({
  src: [
    {
      path: '../../public/fonts/Web/Enkel-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Web/Enkel-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Web/Enkel-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Web/Enkel-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-enkel',
  display: 'swap',
});
