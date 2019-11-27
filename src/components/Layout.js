import React from "react"
import { Grid, Box, useTheme } from "@chakra-ui/core"
import Header from "@/src/components/Header"

const Layout = props => {
  const { children } = props
  const theme = useTheme()

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
    </Grid>
  )
}

export default Layout
