import React from "react"
import { Heading } from "@chakra-ui/core"

const CustomHeading = props => (
  <Heading
    flexDir="row"
    flexWrap="wrap"
    my="20px"
    fontWeight="400"
    fontSize="5xl"
    color={props.theme.colors.heading}
    borderBottom="solid 2px"
    {...props}
  >
    {props.children}
  </Heading>
)

export default CustomHeading
