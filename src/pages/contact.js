import React from "react"
import { Box, Heading, Text, useTheme, Link as A } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"

const Contact = props => {
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
          Contact me
        </Heading>

        <Text>
          Hey!
          <br />I am currently freelancing and taking up projects, if you would
          like to get in touch, shoot me an email at{" "}
          <A
            color={theme.colors.subheading}
            href="mailto:jaydatt@jaydatt.me?subject=So I was on your website and..."
          >
            jaydatt@jaydatt.me
          </A>.
        </Text>
      </Box>
    </Layout>
  )
}
const ContactWithProvider = () => (
  <ThemeProvider>
    <Contact />
  </ThemeProvider>
)
export default ContactWithProvider
