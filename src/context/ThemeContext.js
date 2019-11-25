import React, { useState, useEffect } from "react"
import {
  ThemeProvider,
  ColorModeProvider,
  theme as defaultTheme,
  CSSReset,
} from "@chakra-ui/core"
import "@/src/styles/global.css"

// Getting dark mode information from OS!
// may need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const customDarkTheme = {
  ...defaultTheme,
  themeType: "dark",
  transition: "all 0.3s linear",
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Staatliches, sans-serif",
    mono: "Menlo, monospace",
  },
  customTextShadow: `3px 3px rgba(246, 135, 176, 0.2)`,
  customBg: `url("../../../../../topography-bg.svg"), linear-gradient(110deg, #232526, #414345)`,
  colors: {
    ...defaultTheme.colors,
    content: "gray.100",
    heading: "red.200",
    subheading: "purple.200",
    drawerBg: "gray.700",
    headerBg: "rgba(27,27,27,0.8)",
    contentBg: "gray.800",
  },
}

const customLightTheme = {
  ...defaultTheme,
  themeType: "light",
  transition: "all 0.3s linear",
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Staatliches, sans-serif",
    mono: "Menlo, monospace",
  },
  customTextShadow: `3px 3px rgba(246, 135, 176, 0.4)`,
  customBg: `url("../../../../../topography-bg.svg"), linear-gradient(110deg, #c9d6ff, #e2e2e2)`,
  colors: {
    ...defaultTheme.colors,
    content: "gray.800",
    heading: "red.600",
    subheading: "purple.600",
    drawerBg: "gray.300",
    headerBg: "rgba(10,10,10,0.1)",
    contentBg: "#EDEDED",
  },
}
// export const ThemeContext = React.createContext(customDarkTheme)

const CustomThemeProvider = props => {
  const [theme, setTheme] = useState(customLightTheme)
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme")
    if (supportsDarkMode() && !currentTheme) {
      localStorage.setItem("theme", "dark")
      setTheme(customDarkTheme)
    } else if (currentTheme === "light") {
      localStorage.setItem("theme", "light")
      setTheme(customLightTheme)
    } else if (currentTheme === "dark") {
      localStorage.setItem("theme", "dark")
      setTheme(customDarkTheme)
    }
  }, [])

  const toggleTheme = () => {
    if (theme.themeType === "light") {
      setTheme(customDarkTheme)
      localStorage.setItem("theme", "dark")
    } else if (theme.themeType === "dark") {
      setTheme(customLightTheme)
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <CSSReset />
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ThemeProvider>
  )
}

export { CustomThemeProvider }
