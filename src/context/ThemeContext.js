import React, { useState, useEffect } from "react"
import {
  ThemeProvider,
  ColorModeProvider,
  theme as defaultTheme,
  CSSReset,
} from "@chakra-ui/core"
import "@/src/styles/global.css"

const customDarkTheme = {
  ...defaultTheme,
  type: "dark",
  transition: "all 0.3s linear",
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Staatliches, sans-serif",
    mono: "Menlo, monospace",
  },
  customTextShadow: `3px 3px rgba(246, 135, 176, 0.2)`,
  customBg: `url("../../../../../topography-bg.svg"), linear-gradient(110deg, #232526, #414345)`,
  portraitFilter: "",
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
  type: "light",
  transition: "all 0.3s linear",
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Staatliches, sans-serif",
    mono: "Menlo, monospace",
  },
  customTextShadow: `3px 3px rgba(246, 135, 176, 0.4)`,
  customBg: `url("../../../../../topography-bg.svg"), linear-gradient(110deg, #c9d6ff, #e2e2e2)`,
  portraitFilter: "drop-shadow(0px 8px 15px rgba(75.3, 42.4, 51.8, 0.8))",
  colors: {
    ...defaultTheme.colors,
    content: "gray.800",
    heading: "red.600",
    subheading: "purple.600",
    drawerBg: "gray.300",
    headerBg: "rgba(10,10,10,0.1)",
    contentBg: "#FFFAFA",
  },
}
// export const ThemeContext = React.createContext(customDarkTheme)

const CustomThemeProvider = props => {
  const [theme, setTheme] = useState(customDarkTheme)
  useEffect(() => {
    if (window.__theme === "light") {
      localStorage.setItem("theme", "light")
      setTheme(customLightTheme)
    } else if (window.__theme === "dark") {
      localStorage.setItem("theme", "dark")
      setTheme(customDarkTheme)
    }
    window.__onThemeChange = () => {
      if (window.__theme === "light") setTheme(customDarkTheme)
      else if (window.__theme === "dark") setTheme(customLightTheme)
    }
  }, [])

  const toggleTheme = () => {
    if (theme.type === "light") {
      window.__theme = "dark"
      localStorage.setItem("theme", "dark")
      setTheme(customDarkTheme)
    } else if (theme.type === "dark") {
      window.__theme = "light"
      localStorage.setItem("theme", "light")
      setTheme(customLightTheme)
    }
  }

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <CSSReset />
      <ColorModeProvider>
        {theme !== null ? props.children : <div></div>}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export { CustomThemeProvider }
