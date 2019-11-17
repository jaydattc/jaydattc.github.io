import React from "react"
import { Box, useTheme, Heading, Text } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"
import { css } from "@emotion/core"

const Home = props => {
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
            align-items: center;
            background: url("./topography-bg.svg"),
              linear-gradient(to right, #59c173, #6c5b7b, #c06c84);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
            background-clip: text;
            background-attachment: fixed;
          `}
        >
          Hello,
          <br />
          <Heading fontSize="3rem" fontWeight="400" as="span">
            I am{" "}
          </Heading>
          <Heading
            fontSize="3rem"
            as="span"
            fontWeight="400"
            fontFamily={theme.fonts.subheading}
            color={theme.colors.subheading}
            css={css`
              text-fill-color: #c06c84;
              -webkit-text-fill-color: #c06c84;
              transition: all 0.3s linear;
              text-shadow: ${theme.customTextShadow};
              &:hover {
                text-shadow: 3px 3px rgba(246, 135, 176, 0);
              }
            `}
          >
            Jaydatt
          </Heading>
        </Heading>
        <Text fontSize="lg" textAlign="center">
          I like to code
          <span role="img" aria-label="programmer">
            👨‍💻
          </span>
          , learn about music
          <span role="img" aria-label="music">
            🎼
          </span>
        </Text>
      </Box>
    </Layout>
  )
}
const HomeWithProvider = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
)
export default HomeWithProvider
