import { Config } from 'tailwindcss';

const fonts: NonNullable<Config['theme']>['fontSize'] = {
  h0: [
    '5.875rem', // 94px
    {
      lineHeight: '5.875rem', // 94px
      fontWeight: 500,
    },
  ],
  h1: [
    '3rem', // 48px
    {
      lineHeight: '3.6rem',
      fontWeight: 700,
      letterSpacing: '-0.03rem',
    },
  ],
  h2: [
    '2rem', // 32px
    {
      lineHeight: '2.25rem', // 36px
      fontWeight: 600,
      letterSpacing: '-0.04rem',
    },
  ],
  h3: [
    '1.75rem', // 28px
    {
      lineHeight: '2rem', // 32px
      fontWeight: 500,
      letterSpacing: '-0.035rem',
    },
  ],
  h4: [
    '1.5rem', // 24px
    {
      lineHeight: '1.8rem',
      fontWeight: 700,
      letterSpacing: '-0.015rem',
    },
  ],
  h5: [
    '1.125rem', // 18px
    {
      lineHeight: '1.5rem', // 24px
      fontWeight: 500,
    },
  ],
  'body-20': [
    '1.25rem', // 20px
    {
      lineHeight: 'auto',
      fontWeight: 400,
    },
  ],
  'body-16': [
    '1rem', // 16px
    {
      lineHeight: '1.5rem', // 24px
      fontWeight: 700,
      letterSpacing: '-0.01rem',
    },
  ],
  'body-16m': [
    '1rem', // 16px
    {
      lineHeight: '1.2rem', // 19.2px
      fontWeight: 700,
      letterSpacing: '0.03rem',
    },
  ],
  'body-14': [
    '0.875rem', // 14px
    {
      lineHeight: '1.05rem',
      fontWeight: 500,
      letterSpacing: '-0.00875rem',
    },
  ],
  'title-16': [
    '1rem', // 16px
    {
      lineHeight: '1.5rem', // 24px
      fontWeight: 500,
    },
  ],
  'title-14': [
    '0.875rem', // 14px
    {
      lineHeight: '1.05rem',
      fontWeight: 700,
      letterSpacing: '-0.0175rem',
    },
  ],
  'title-12': [
    '0.75rem', // 12px
    {
      lineHeight: '0.9rem',
      fontWeight: 500,
      letterSpacing: '0.15rem',
    },
  ],
  button: [
    '0.75rem', // 12px
    {
      lineHeight: '1.125rem', // 18px
      fontWeight: 500,
    },
  ],
  'body-12': [
    '0.75rem', // 12px
    {
      lineHeight: '0.875rem', // 14px
      fontWeight: 400,
    },
  ],
  'h5-m': [
    '1.125rem', // 18px
    {
      lineHeight: '1.4625rem',
      fontWeight: 500,
      letterSpacing: '0.01125rem',
    },
  ],
};

export default fonts;
