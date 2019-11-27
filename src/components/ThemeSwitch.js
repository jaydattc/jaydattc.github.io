import React from "react"
import { useTheme, Box, FormLabel, Switch } from "@chakra-ui/core"

const ThemeSwitch = props => {
  const theme = useTheme()

  return (
    <Box d="flex" flexDir="row" m="10px" {...props}>
      <FormLabel htmlFor="theme-switch" color={theme.colors.content} px="8px">
        {theme.themeType === "dark"
          ? "Switch to Light Mode: "
          : "Switch to Dark Mode: "}
      </FormLabel>
      <Switch
        id="theme-switch"
        onChange={() => theme.toggleTheme()}
        isChecked={theme.themeType !== "dark"}
      />
    </Box>
  )
}

export default ThemeSwitch
