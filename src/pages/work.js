import React from "react"
import { Box, Heading, Text, useTheme } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"

const Work = props => {
  const theme = useTheme()
  return (
    <Layout>
      <Box
        p="20px"
        m="auto"
        w={["100%", "100%", "90%", "70%"]}
        h="100%"
        d="flex"
        flexDir="column"
        justifyContent="start"
      >
        <Heading
          my="20px"
          color={theme.colors.heading}
          fontWeight="400"
          fontSize="5xl"
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          borderBottom="solid 2px"
        >
          My Projects and Work Experiences
        </Heading>
        <Text></Text>
      </Box>
    </Layout>
  )
}
const WorkWithProvider = () => (
  <ThemeProvider>
    <Work />
  </ThemeProvider>
)
export default WorkWithProvider
