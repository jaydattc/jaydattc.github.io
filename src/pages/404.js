import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "@chakra-ui/core"

const Page404 = props => {
  return (
    <Box w="100vw" h="100vh" d="flex" flexDirection="column" justifyContent="center">
      <Heading>Oops</Heading>
      <Text>
        Looks like you're lost, Go to <Link to="/">Home</Link>
      </Text>
    </Box>
  )
}

export default Page404
