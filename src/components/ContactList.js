import React from "react"
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi"
import { List, ListItem, ListIcon, Tooltip } from "@chakra-ui/core"

const ContactList = props => (
  <List
    color={props.theme.colors.subheading}
    d={["none", "none", "flex", "flex"]}
    alignItems="center"
    flexDirection="row"
    fontSize="3xl"
    {...props}
  >
    <ListItem alignItems="center">
      <Tooltip
        shouldWrapChildren
        hasArrow
        placement="top"
        label="Github Profile"
      >
        <a
          id="github-profile-link"
          href="https://github.com/jaydattc/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiGithub} />
        </a>
      </Tooltip>
    </ListItem>
    <ListItem alignItems="center">
      <Tooltip
        shouldWrapChildren
        hasArrow
        placement="top"
        label="Twitter Profile"
      >
        <a
          id="twitter-profile-link"
          href="https://www.twitter.com/Cjaydatt/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiTwitter} />
        </a>
      </Tooltip>
    </ListItem>

    <ListItem alignItems="center">
      <Tooltip
        shouldWrapChildren
        hasArrow
        placement="top"
        label="LinkedIn Profile"
      >
        <a
          id="linkedin-profile-link"
          href="https://www.linkedin.com/in/jaydattc/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiLinkedin} />
        </a>
      </Tooltip>
    </ListItem>
    <ListItem alignItems="center">
      <Tooltip shouldWrapChildren hasArrow placement="top" label="Email">
        <a
          href="mailto:jaydatt@jaydatt.me?subject=So I was on your website and..."
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiMail} />
        </a>
      </Tooltip>
    </ListItem>
  </List>
)
export default ContactList
