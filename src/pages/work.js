import React from "react"
import { Text, Box, Stack, useTheme } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"
import Container from "../components/Container"
import CustomHeading from "../components/CustomHeading"
import Helmet from "react-helmet"

const Work = props => {
  const theme = useTheme()
  return (
    <Layout>
      <Helmet
        title="Jaydattsinh Champavat - About me"
        meta={[
          {
            name: "description",
            content: "About me",
          },
          {
            name: "keywords",
            content:
              "engineer, developer, frontend engineer, backend developer, fullstack developer, fullstack designer",
          },
        ]}
      />

      <Container>
        <CustomHeading
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          theme={theme}
        >
          My Projects
        </CustomHeading>
        <Text>Updating soon...</Text>
        <CustomHeading
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          theme={theme}
        >
          Work Experiences
        </CustomHeading>
        <Stack>
          <Box>
            <Text fontSize="2xl">Samaj Infotech Pvt. Ltd.</Text>
            <Text fontSize="md">Jr. Developer</Text>
            <Text fontSize="md">June 2019 - November 2019</Text>
          </Box>
        </Stack>
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
