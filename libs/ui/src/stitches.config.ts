import {
  indigo,
  orange,
  sand,
  teal,
  indigoDark,
  orangeDark,
  sandDark,
  tealDark,
} from '@radix-ui/colors';

// Spread the scales in your light and dark themes
import { createStitches } from '@stitches/react';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      ...indigo,
      ...orange,
      ...sand,
      ...teal,
    },
  },
});

const darkTheme = createTheme({
  colors: {
    ...indigoDark,
    ...orangeDark,
    ...sandDark,
    ...tealDark,
  },
});