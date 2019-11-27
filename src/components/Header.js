import React from "react"
import {
  Box,
  Heading,
  Button,
  Link,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useTheme,
  useDisclosure,
} from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import { FiMenu, FiSun, FiMoon } from "react-icons/fi"
import HeaderNavList from "./HeaderNavList"
import ContactList from "./ContactList"
import ThemeSwitch from "./ThemeSwitch"

const Header = props => {
  const theme = useTheme()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box
      bg={theme.colors.headerBg}
      d="flex"
      flexDirection={["row", "row", "column", "column"]}
      justifyContent={["space-between", "space-between", "center", "center"]}
      alignItems="center"
      px={5}
      transition={theme.transition}
      height="100%"
      width="100%"
    >
      <Box
        d="flex"
        flexDirection={["row", "row", "column", "column"]}
        justifyContent={["space-between", "space-between", "center", "center"]}
        alignItems="center"
        transition={theme.transition}
        height="100%"
        width="100%"
      >
        <Link as={GatsbyLink} to="/">
          <Heading
            fontWeight="400"
            fontSize={["xl", "2xl", "3xl", "4xl"]}
            textAlign="center"
            color={theme.colors.heading}
            fontFamily={theme.fonts.heading}
          >
            Jaydattsinh Champavat
          </Heading>
        </Link>
        <Box
          borderRadius="sm"
          h="3px"
          my="10px"
          w="80%"
          d={["none", "none", "flex", "flex"]}
          boxShadow="md"
          bgImage={"linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"}
        />
        <HeaderNavList
          color={theme.colors.subheading}
          d={["none", "none", "flex", "flex"]}
          alignItems="center"
          flexDirection={["row", "column", "column", "column"]}
          fontSize={["md", "md", "md", "md"]}
        />
        <Box d="flex" flexDir="row">
          <Button
            d={["flex", "flex", "none", "none"]}
            variantColor={"transparent"}
            fontSize="2xl"
            p={"auto"}
            m={0}
            onClick={() => theme.toggleTheme()}
          >
            <Box
              as={theme.type !== "light" ? FiSun : FiMoon}
              color={theme.colors.content}
            />
          </Button>
          <Button
            ref={btnRef}
            d={["flex", "flex", "none", "none"]}
            variantColor={"transparent"}
            fontSize="2xl"
            p={"auto"}
            m={0}
            onClick={onOpen}
          >
            <Box as={FiMenu} color={theme.colors.content} />
          </Button>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={theme.colors.drawerBg}>
            <DrawerCloseButton color={theme.colors.content} />
            <DrawerHeader color={theme.colors.content}>
              Navigation Menu
            </DrawerHeader>
            <HeaderNavList
              color={theme.colors.subheading}
              p={4}
              fontSize="md"
              spacing={3}
            />
            <ContactList
              w="100%"
              d={["flex", "flex", "none", "none"]}
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              theme={theme}
              margin="10px 0 10px 0"
            />
          </DrawerContent>
        </Drawer>
      </Box>
      <ContactList theme={theme} margin="0 0 20px 0" />
      <ThemeSwitch display={["none", "none", "flex", "flex"]} />
    </Box>
  )
}
export default Header
