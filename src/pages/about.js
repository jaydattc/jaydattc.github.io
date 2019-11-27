import React from "react"
import {
  Flex,
  Box,
  Heading,
  Text,
  useTheme,
  List,
  ListItem,
} from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"
import CustomHeading from "../components/CustomHeading"
import Container from "../components/Container"

const About = props => {
  const theme = useTheme()
  return (
    <Layout>
      <Container>
        <CustomHeading
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          theme={theme}
        >
          About me
        </CustomHeading>
        <Text pb="10px">
          I am an undergrad student at Silver Oak College of Engineering and
          Technology pursuing Computer Engineering. I have been developing
          performant and cutting-edge Web applications and Web based Solutions
          with industry forefront tools and frameworks for +2 years.
        </Text>
        <Text>
          I specialize in functional programming paradigms and data structures.
          On this website, I'll post details about my projects and share some of
          interesting quirks and I come across.
        </Text>
      </Container>
      <Container py="0">
        <CustomHeading fontSize="2xl" theme={theme}>
          Skills
        </CustomHeading>
      </Container>
      <Flex
        mx="20px"
        border="solid 1px"
        borderRadius={5}
        bg="rgba(27, 27, 27, 0.2)"
        p="5px"
        wrap="wrap"
        justifyContent="space-around"
      >
        <Box d="flex" flexDir="column">
          <Text
            color={theme.colors.subheading}
            textAlign="center"
            fontSize="xl"
          >
            Core Technologies
          </Text>
          <List styleType="disc">
            <ListItem>JavaScript (ES6), TypeScript</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>MongoDB, SQL</ListItem>
            <ListItem>WebSockets, WebRTC, socket.io</ListItem>
            <ListItem>HTML5, CSS3, SASS</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>Python</ListItem>
          </List>
        </Box>
        <Box d="flex" flexDir="column">
          <Text
            color={theme.colors.subheading}
            textAlign="center"
            fontSize="xl"
          >
            Libraries and frameworks
          </Text>
          <List styleType="disc">
            <ListItem>Express</ListItem>
            <ListItem>Mongoose, MySQL</ListItem>
            <ListItem>VueJS, ReactJS</ListItem>
            <ListItem>Redux, GraphQL</ListItem>
            <ListItem>Gatsby, Next.js</ListItem>
            <ListItem>React Native</ListItem>
          </List>
        </Box>
        <Box d="flex" flexDir="column">
          <Text
            color={theme.colors.subheading}
            textAlign="center"
            fontSize="xl"
          >
            Tools and workflow
          </Text>
          <List styleType="disc">
            <ListItem>Git</ListItem>
            <ListItem>Docker</ListItem>
            <ListItem>ESLint</ListItem>
            <ListItem>Lodash</ListItem>
            <ListItem>Webpack/parcel</ListItem>
          </List>
        </Box>
      </Flex>
      <Container>
        <CustomHeading
          fontFamily={theme.fonts.body}
          fontSize="2xl"
          theme={theme}
        >
          More about me
        </CustomHeading>
        <Text pb="10px">
          I have deep affection for classical music especially from Baroque and
          late romantic era. Eric Satie, Chopin and Beethoven are some of my
          favourite composers. Also, I love playing and watching competitive
          video games.
        </Text>
      </Container>
    </Layout>
  )
}
const AboutWithProvider = () => (
  <ThemeProvider>
    <About />
  </ThemeProvider>
)
export default AboutWithProvider
