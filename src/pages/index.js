import React from "react"
import { css } from "@emotion/core"
import {
  Box,
  useTheme,
  Heading,
  Text,
  Link as AnchorLink,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import Layout from "@/src/components/Layout"
import Helmet from "react-helmet"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"

const Home = props => {
  const theme = useTheme()

  return (
    <Layout>
      <Helmet
        title="Jaydattsinh Champavat - Home"
        meta={[
          {
            name: "description",
            content:
              "Hello, I am Jaydattsinh Champavat, fullstack developer and designer",
          },
          {
            name: "keywords",
            content:
              "engineer, developer, frontend engineer, backend developer, fullstack developer, fullstack designer",
          },
        ]}
      />
      <Box
        w="100%"
        p="20px"
        h={["90vh", "90vh", "100vh", "100vh"]}
        display="flex"
        flexDir="column"
      >
        <Box flex="1">
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
              background-clip: text;
              background-attachment: fixed;
            `}
          >
            Hello,
            <br />
            <Heading fontSize="3rem" fontWeight="400" as="p">
              I am{" "}
              <Heading
                as="span"
                fontSize="3rem"
                fontWeight="400"
                css={css`
                  -webkit-text-fill-color: #c06c84;
                  color: ${theme.colors.subheading};
                  transition: all 0.3s linear;
                  text-shadow: ${theme.customTextShadow};
                  &:hover {
                    text-shadow: none;
                  }
                `}
              >
                Jaydatt
              </Heading>
            </Heading>
          </Heading>
          <Text fontSize="lg" pb="20px" textAlign="center">
            Fullstack Engineer
            <span role="img" aria-label="programmer">
              👨‍💻
            </span>{" "}
            | Designer🔻
          </Text>
          <Text fontSize="lg" textAlign="center">
            Take a look at{" "}
            <AnchorLink color={theme.colors.subheading} as={Link} to="/work">
              my work
            </AnchorLink>
            ,{" "}
            <AnchorLink color={theme.colors.subheading} as={Link} to="/blog">
              read my blog
            </AnchorLink>{" "}
            or{" "}
            <AnchorLink color={theme.colors.subheading} as={Link} to="/contact">
              get in touch
            </AnchorLink>
            !
          </Text>
        </Box>
        <Text textAlign="center">
          created with ❤ and{" "}
          <AnchorLink
            color={theme.colors.subheading}
            href="https://www.gatsbyjs.org/"
            isExternal
            title="Gatsby - static site generator"
          >
            gatsby
          </AnchorLink>
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
