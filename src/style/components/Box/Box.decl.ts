import {
  AlignSelfProps,
  BackgroundsProps,
  BordersProps,
  ColorProps,
  EffectsProps,
  FlexBasisProps,
  FlexGrowProps,
  FlexProps,
  FlexShrinkProps,
  GridAreaProps,
  GridColumnProps,
  GridRowProps,
  InteractivityProps,
  JustifySelfProps,
  LayoutProps,
  OrderProps,
  OverflowProps,
  OverflowXProps,
  OverflowYProps,
  SizingProps,
  SpaceProps,
  TablesProps,
} from "@xstyled/styled-components"

interface FlexBoxItemProps
  extends FlexProps,
    FlexGrowProps,
    FlexShrinkProps,
    FlexBasisProps,
    JustifySelfProps,
    AlignSelfProps,
    OrderProps {}

interface GridItemProps extends GridAreaProps, GridColumnProps, GridRowProps {}

export interface BoxProps
  extends SpaceProps,
    SizingProps,
    LayoutProps,
    InteractivityProps,
    EffectsProps,
    BordersProps,
    TablesProps,
    BackgroundsProps,
    ColorProps,
    FlexBoxItemProps,
    GridItemProps,
    OverflowProps,
    OverflowXProps,
    OverflowYProps {}
