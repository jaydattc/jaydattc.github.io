import React from "react"
import { Box } from "@chakra-ui/core"
import Layout from "@/src/components/Layout"
import { CustomThemeProvider as ThemeProvider } from "@/src/context/ThemeContext"

const Home = props => {
  return (
    <ThemeProvider>
      <Layout>
        <Box>Contact</Box>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
