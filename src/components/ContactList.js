import React from "react"
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi"
import { List, Link, ListItem, ListIcon, Tooltip } from "@chakra-ui/core"

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
      <Tooltip hasArrow placement="top" label="Github Profile">
        <Link
          id="github-profile-link"
          href="https://github.com/jaydattc/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiGithub} />
        </Link>
      </Tooltip>
    </ListItem>
    <ListItem alignItems="center">
      <Tooltip hasArrow placement="top" label="Twitter Profile">
        <Link
          id="twitter-profile-link"
          href="https://www.twitter.com/Cjaydatt/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiTwitter} />
        </Link>
      </Tooltip>
    </ListItem>

    <ListItem alignItems="center">
      <Tooltip hasArrow placement="top" label="LinkedIn Profile">
        <Link
          id="linkedin-profile-link"
          href="https://www.linkedin.com/in/jaydattc/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiLinkedin} />
        </Link>
      </Tooltip>
    </ListItem>
    <ListItem alignItems="center">
      <Tooltip hasArrow placement="top" label="Email">
        <Link
          href="mailto:jaydatt@jaydatt.me?subject=So I was on your website and..."
          rel="nofollow noopener noreferrer"
        >
          <ListIcon as={FiMail} />
        </Link>
      </Tooltip>
    </ListItem>
  </List>
)
export default ContactList
