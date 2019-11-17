import React from "react"
import { Grid, Box, useTheme } from "@chakra-ui/core"
import Header from "@/src/components/Header"
import ThemeSwitch from "./ThemeSwitch"

const Layout = props => {
  const { children } = props
  const theme = useTheme()
  // const [colorMode, toggleColorMode] = useColorMode()
  // console.log(useColorMode())
  return (
    <Grid
      fontFamily={theme.fonts.body}
      fontWeight="400"
      bgImage={theme.customBg}
      bgAttachment="fixed"
      bgRepeat="auto"
      templateColumns={["auto", "auto", "auto auto", "auto auto"]}
      templateRows={["auto auto", "auto auto", "auto", "auto"]}
      rowGap={0}
      columnGap={0}
      transition={theme.transition}
    >
      <Box
        height={["10vh", "10vh", "100vh", "100vh"]}
        width={["100vw", "100vw", "30vw", "30vw"]}
        font={theme.fonts.body}
      >
        <Header />
      </Box>
      <Box
        height={["90vh", "90vh", "100vh", "100vh"]}
        width={["100vw", "100vw", "70vw", "70vw"]}
        bg={theme.colors.contentBg}
        overflowY="auto"
        color={theme.colors.content}
      >
        {children}
      </Box>
      <ThemeSwitch />
    </Grid>
  )
}

export default Layout
