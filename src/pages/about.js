import React from "react"
import { Box, Heading, Text, useTheme } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"

const About = props => {
  const theme = useTheme()
  return (
    <Layout>
      <Box
        p="20px"
        m="auto"
        w={["100%", "90%", "80%", "60%"]}
        h="100%"
        d="flex"
        flexDir="column"
        justifyContent="start"
      >
        <Heading
          my="20px"
          fontWeight="400"
          fontSize="5xl"
          color={theme.colors.heading}
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          borderBottom="solid 2px"
        >
          About me
        </Heading>
        <Text pb="10px"></Text>
        <Text pb="10px">
          I am an undergrad student at Silver Oak College of Engineering and
          Technology pursuing Computer Engineering. I have been developing
          performant and cutting-edge Web applications and Web based Solutions
          with industry forefront tools and frameworks for +2 years.
        </Text>
        <Text pb="10px">
          I specialize in functional programming paradigms and data structures.
          On this website, I'll post details about my projects and share some of
          interesting quirks and I come across.
        </Text>
        <Text pb="10px">
          I have deep affection for classical music especially from Baroque and
          late romantic era. Eric Satie, Chopin and Beethoven are some of my
          favourite composers. Also, I love playing and watching competitive
          video games.
        </Text>
      </Box>
    </Layout>
  )
}
const AboutWithProvider = () => (
  <ThemeProvider>
    <About />
  </ThemeProvider>
)
export default AboutWithProvider
