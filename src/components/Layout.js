import React, { useEffect, useRef } from "react"
import { Grid, Box, useTheme } from "@chakra-ui/core"
import Header from "@/src/components/Header"

const Layout = props => {
  const { children } = props
  const theme = useTheme()

  const prev = useRef({ current: null })
  const headerRef = useRef(null)
  useEffect(() => {
    prev.current = window.scrollY
    window.addEventListener("scroll", e => handleNavigation(e))
  }, [])
  const handleNavigation = e => {
    const window = e.currentTarget
    const headerPosition = headerRef.current.style.position
    if (prev.current > window.scrollY && headerPosition !== "sticky")
      headerRef.current.style.position = "sticky"
    else if (prev.current < window.scrollY && headerPosition !== "relative")
      headerRef.current.style.position = "relative" //scrolling down
    prev.current = window.scrollY
  }

  return (
    <Grid
      fontFamily={theme.fonts.body}
      fontWeight="400"
      bgImage={theme.customBg}
      bgAttachment="sticky"
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
        top={0}
        transition={theme.transition}
      >
        <Header />
      </Box>
      <Box
        minHeight={["90vh", "90vh", "100vh", "100vh"]}
        height={["auto", "auto", "100vh", "100vh"]}
        width={["100vw", "100vw", "70vw", "70vw"]}
        bg={theme.colors.contentBg}
        overflowY={["none", "none", "auto", "auto"]}
        color={theme.colors.content}
      >
        {children}
      </Box>
    </Grid>
  )
}

export default Layout
