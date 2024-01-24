import {
  alignSelf,
  backgrounds,
  borders,
  color,
  compose,
  createCss,
  effects,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  gridArea,
  gridColumn,
  gridRow,
  interactivity,
  justifySelf,
  layout,
  order,
  sizing,
  space,
  tables,
  overflow,
  overflowX,
  overflowY
} from '@xstyled/styled-components';

import { BoxProps } from './Box.decl';

const flexboxItem = compose(flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order);

const gridItem = compose(gridArea, gridColumn, gridRow);

export const boxSystem = compose<BoxProps>(
  space,
  sizing,
  layout,
  interactivity,
  effects,
  borders,
  tables,
  backgrounds,
  flexboxItem,
  gridItem,
  color,
  overflow,
  overflowX,
  overflowY
);

const { x } = createCss(boxSystem);

const Box = x.div;

export default Box;
