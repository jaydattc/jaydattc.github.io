import React from "react";
import { Text, Box, Stack, useTheme, Link } from "@chakra-ui/core";
import Layout from "@/src/components/Layout";
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext";
import Container from "../components/Container";
import CustomHeading from "../components/CustomHeading";
import Helmet from "react-helmet";
import { FiGithub } from "react-icons/fi";

const Work = props => {
  const theme = useTheme();
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
      <Container h="100%">
        <CustomHeading
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          theme={theme}
        >
          My Projects
        </CustomHeading>
        <Stack>
          <Box>
            <Text fontSize="2xl" color={theme.colors.heading}>
              rhythmix
            </Text>
            <Box
              d="flex"
              justifyContent="space-between"
              color={theme.colors.subheading}
            >
              <Link
                href="https://jaydattc.github.io/rhythmix/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                fontStyle="italic"
                fontSize="md"
                d="flex"
                alignItems="center"
              >
                <FiGithub /> Github repo
              </Link>
            </Box>
            <Text>
              A polyrhythm trainer and tester for musicians made in ReactJS.{" "}
            </Text>
            <Text>
              Listen to and practice to different polyrhythms or custom
              polyrhythms.
            </Text>
          </Box>
          <Box>
            <Text fontSize="2xl" color={theme.colors.heading}>
              bDownload
            </Text>
            <Box
              d="flex"
              justifyContent="space-between"
              color={theme.colors.subheading}
            >
              <Link
                href="https://github.com/jaydattc/bdownload"
                target="_blank"
                rel="nofollow noopener noreferrer"
                fontStyle="italic"
                fontSize="md"
                d="flex"
                alignItems="center"
              >
                <FiGithub />
                Github repo
              </Link>
            </Box>
            <Text>A batch downloader cli made in NodeJS. </Text>
            <Text>
              Download using HTTP or curl, Output folder selection, Batch
              downloading.
            </Text>
          </Box>
        </Stack>
        <CustomHeading
          fontFamily={theme.fonts.heading}
          textShadow={theme.customTextShadow}
          theme={theme}
        >
          Work Experiences
        </CustomHeading>
        <Stack>
          <Box>
            <Text fontSize="2xl" color={theme.colors.heading}>
              Slick Technologies Pvt. Ltd.
            </Text>
            <Box
              d="flex"
              justifyContent="space-between"
              color={theme.colors.subheading}
            >
              <Text fontStyle="italic" fontSize="md">
                Software Developer Intern
              </Text>
              <Text fontStyle="italic" fontSize="md">
                July 2019 - December 2020
              </Text>
            </Box>
            <Text>
              Created stable and maintainable codebases with performant and
              accessible React components.
            </Text>
            <Text>
              Creating features, functionalities and extending capabilities of a
              ERP Single Page Application built in React, MaterialUI, Redux and
              Redux Saga.
            </Text>
            <Text>
              Worked briefly on Shopify eCommerce using Liquid, JQuery and JSON.
            </Text>
          </Box>
          <Box>
            <Text fontSize="2xl" color={theme.colors.heading}>
              Samaj Infotech Pvt. Ltd.
            </Text>
            <Box
              d="flex"
              justifyContent="space-between"
              color={theme.colors.subheading}
            >
              <Text fontStyle="italic" fontSize="md">
                Jr. NodeJS Developer
              </Text>
              <Text fontStyle="italic" fontSize="md">
                June 2019 - November 2019
              </Text>
            </Box>
            <Text>
              Implemented a RESTful API server and an ERP Single Page
              Application for a management system consisting of product
              manufacturing man‑agement, Inventory management, Accounting, User
              Authorisation and Invoice generation in MERN stack.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};
const WorkWithProvider = () => (
  <ThemeProvider>
    <Work />
  </ThemeProvider>
);
export default WorkWithProvider;
