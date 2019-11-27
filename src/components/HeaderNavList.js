import React from "react"
import { List, Link, ListItem, ListIcon } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import { FiHome, FiInfo, FiMail, FiBook, FiCode } from "react-icons/fi"

const HeaderNavItem = props => {
  const { linkIcon, to, linkText } = props
  return (
    <ListItem m="5px" fontSize="1.2rem" alignItems="center">
      <Link as={GatsbyLink} to={to}>
        <ListIcon d="inline" as={linkIcon} />
        {linkText}
      </Link>
    </ListItem>
  )
}

const HeaderNavList = props => {
  return (
    <List {...props}>
      <HeaderNavItem to="/" linkIcon={FiHome} linkText="Home" />
      <HeaderNavItem to="/blog" linkIcon={FiBook} linkText="Blog" />
      <HeaderNavItem to="/about" linkIcon={FiInfo} linkText="About" />
      <HeaderNavItem to="/work" linkIcon={FiCode} linkText="Work" />
      <HeaderNavItem to="/contact" linkIcon={FiMail} linkText="Contact" />
    </List>
  )
}
export default HeaderNavList
