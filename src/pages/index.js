import React from "react"
import { css } from "@emotion/core"
import { Box, useTheme, Image, Heading, Text, Link as A } from "@chakra-ui/core"
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
        <Box flex="1" alignItems="center" justifyContent="center">
          <Image
            p="relative"
            src="portrait.png"
            alt="Jaydatt"
            w={["150px", "200px", "230px", "250px"]}
            m="auto"
            alignSelf="center"
            css={css`
              filter: ${theme.portraitFilter};
            `}
          />
          <Heading
            fontWeight="700"
            fontSize="4rem"
            color={theme.colors.heading}
            fontFamily={theme.fonts.heading}
            textAlign="center"
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
            <Heading fontSize="2rem" fontWeight="400" as="p">
              I am{" "}
              <Heading
                as="span"
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
          <Text pb="20px" textAlign="center">
            Fullstack Developer
            <span role="img" aria-label="programmer">
              👨‍💻
            </span>{" "}
            & Designer🔻
          </Text>
          <Text textAlign="center">
            Take a look at{" "}
            <A color={theme.colors.subheading} as={Link} to="/work">
              my work
            </A>
            ,{" "}
            <A color={theme.colors.subheading} as={Link} to="/blog">
              read my blog
            </A>{" "}
            or{" "}
            <A color={theme.colors.subheading} as={Link} to="/contact">
              get in touch
            </A>
            !
          </Text>
        </Box>
        <Text textAlign="center">
          created with ❤ and{" "}
          <A
            color={theme.colors.subheading}
            href="https://www.gatsbyjs.org/"
            isExternal
            title="Gatsby - static site generator"
          >
            gatsby
          </A>
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
