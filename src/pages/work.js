import React from "react"
import { Text, useTheme } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"
import Container from "../components/Container"
import CustomHeading from "../components/CustomHeading"

const Work = props => {
  const theme = useTheme()
  return (
    <Layout>
      <Container>
        <CustomHeading
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          theme={theme}
        >
          My Projects and Work Experiences
        </CustomHeading>
        <Text></Text>
      </Container>
    </Layout>
  )
}
const WorkWithProvider = () => (
  <ThemeProvider>
    <Work />
  </ThemeProvider>
)
export default WorkWithProvider
