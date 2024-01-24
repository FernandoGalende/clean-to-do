import { getColor } from '@xstyled/styled-components';

export const colorTokens = {
  //backgrounds
  'surface-background-primary':
    'linear-gradient(33deg, rgba(147,24,204,0.5033514492753624) 35%, rgba(255,255,255,1) 100%)',
  'surface-background': getColor('warm-gray-50'),

  // interactive elements
  'surface-interactive-active': getColor('violet-800'),

  // icons and borders
  'graphic-interactive-default': getColor('warm-gray-200'),

  // text
  'text-base': getColor('warm-gray-800')
};
