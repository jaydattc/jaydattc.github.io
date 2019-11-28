import React from "react"
import { useTheme, Box, FormLabel, Switch } from "@chakra-ui/core"

const ThemeSwitch = props => {
  const theme = useTheme()

  return (
    <Box d="flex" flexDir="row" my="10px" {...props}>
      {!props.noLabel && (
        <FormLabel htmlFor="theme-switch" fontSize="sm" color={theme.colors.content} px="8px">
          {theme.type === "dark"
            ? "Switch to Light Mode: "
            : "Switch to Dark Mode: "}
        </FormLabel>
      )}
      <Switch
        id="theme-switch"
        onChange={() => theme.toggleTheme()}
        isChecked={theme.type !== "dark"}
      />
    </Box>
  )
}

export default ThemeSwitch
