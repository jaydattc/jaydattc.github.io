import React from "react"
import { css } from "@emotion/core"
import {
  Box,
  useTheme,
  Image,
  Heading,
  Text,
  Link as A,
  Icon,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import Layout from "@/src/components/Layout"
import Helmet from "react-helmet"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"
import portrait from "@/static/portrait.png"

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
            src={portrait}
            alt="Jaydatt"
            w={["200px", "220px", "230px", "250px"]}
            m="auto"
            onLoad="this.disp"
            alignSelf="center"
            css={css`
              filter: ${theme.portraitFilter};
            `}
          />
          <Heading
            fontWeight="700"
            fontSize="4.25rem"
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
            <Heading fontSize="4xl" fontWeight="400" as="p">
              I am{" "}
              <Heading
                fontSize="4xl"
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
          <Text m="20px" textAlign="center">
            Fullstack Developer
            <span role="img" aria-label="programmer">
              👨‍💻
            </span>{" "}
            & Designer🔻
          </Text>
          <Text mb="20px" textAlign="center">
            Read{" "}
            <A color={theme.colors.subheading} as={Link} to="/about">
              about me
            </A>
            , take a look at{" "}
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
          <Text textAlign="center">
            Get my{" "}
            <A
              color={theme.colors.subheading}
              href="../../../resume.pdf"
              target="__blank"
            >
              resume!
            </A>
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
            <Icon name="external-link" mx="2px" />
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
