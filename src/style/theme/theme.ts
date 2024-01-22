import { defaultTheme as xdDefaultTheme } from '@xstyled/styled-components';

import { colorTokens } from './color';

export const defaultTheme = {
  ...xdDefaultTheme,
  ...colorTokens
};

type BaseTheme = typeof defaultTheme;

export interface DefaultTheme extends BaseTheme {}
