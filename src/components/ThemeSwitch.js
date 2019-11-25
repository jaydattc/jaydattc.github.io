import React from "react"
import { useTheme, Tooltip, Switch } from "@chakra-ui/core"

const ThemeSwitch = props => {
  const theme = useTheme()
  // const [colorMode, toggleColorMode] = useColorMode()
  // console.log(useColorMode())

  return (
    <Tooltip
      hasArrow
      label={
        theme.themeType === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"
      }
      placement="left-end"
    >
      <Switch
        position="fixed"
        bottom="20px"
        right="30px"
        onChange={() => theme.toggleTheme()}
        isChecked={theme.themeType !== "dark"}
      />
    </Tooltip>
  )
}

export default ThemeSwitch
