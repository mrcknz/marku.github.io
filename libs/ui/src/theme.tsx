import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'cyan',
  headings: { fontFamily: '"Kufam", sans-serif', fontWeight: 100 },
  other: {
    fib: (values, suffix = '', factor = 1) => {
      const params: Array<number | string> =
        typeof values === 'number' ? [values] : values;
      const res: Array<number | string> = [];
      for (const val of params) {
        if (typeof val === 'number')
          res.push(
            `${Math.round(0.618 ** -val * factor * 1000) / 1000}${suffix}`
          );
        else res.push(val);
      }
      return res.join(' ');
    },
  },
};

export const styles = {
  // Text: { root: { fontSize: '12px' } },
  Title: { root: { fontSize: '1.618rem' } },
};

declare module '@mantine/core' {
  export interface MantineThemeOther {
    fib: (
      values: Array<number | string> | number,
      suffix?: string,
      factor?: number
    ) => string;
  }
}
