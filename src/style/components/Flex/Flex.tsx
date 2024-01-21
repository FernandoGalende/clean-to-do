import {
  compose,
  createCss,
  flexboxes,
  gap,
  StyleGenerator,
} from "@xstyled/styled-components"

import { boxSystem } from "../Box/Box"

import { FlexProps } from "./Flex.decl"

const flexSystem = compose(boxSystem, flexboxes, gap)

const { x } = createCss<StyleGenerator<FlexProps>>(flexSystem)

const Flex = x.div

Flex.defaultProps = {
  display: "flex",
}

export default Flex
