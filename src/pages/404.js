import React from "react"
import { Box, useTheme, Heading, Text } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Page404 = () => {
  const theme = useTheme()
  return (
    <Layout>
      <Box
        w="100%"
        p="20px"
        h={["90vh", "90vh", "100vh", "100vh"]}
        justifyContent="center"
        alignItems="center"
        verticalAlign="middle"
      >
        <Heading
          fontWeight="700"
          fontSize="6rem"
          textAlign="center"
          color={theme.colors.heading}
          fontFamily={theme.fonts.heading}
          css={css`
            background: url("./topography-bg.svg"),
              linear-gradient(to right, #59c173, #6c5b7b, #c06c84);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-attachment: fixed;
          `}
        >
          Oops,
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Looks like you're lost, Go to{" "}
          <Text as="span" color="cadetblue">
            <Link to="/">Home</Link>
          </Text>
          ?
        </Text>
      </Box>
    </Layout>
  )
}
const Page404WithProvider = () => (
  <ThemeProvider>
    <Page404 />
  </ThemeProvider>
)
export default Page404WithProvider
