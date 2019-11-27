import React from "react"
import { Box } from "@chakra-ui/core"

const Container = props => (
  <Box
    p="20px"
    m="auto"
    w={["100%", "90%", "80%", "60%"]}
    d="flex"
    flexDir="column"
    justifyContent="start"
    {...props}
  >
    {props.children}
  </Box>
)

export default Container
