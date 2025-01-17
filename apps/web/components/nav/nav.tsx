import { FC } from "react";
import { RiContactsLine, RiProfileLine } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineLanguage } from "react-icons/md";
import { RxHobbyKnife } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Tooltip,
} from "@chakra-ui/react";

const Navbar: FC = () => {
  return (
    <Box as="nav" h="100%">
      <List
        h="100%"
        py={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        spacing={3}
        bg="gray.200"
      >
        <ListItem>
          <Tooltip label="Contact">
            <IconButton
              as={Link}
              aria-label="Contact"
              href="#contact"
              borderRadius="full"
            >
              <RiContactsLine />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip label="Profil">
            <IconButton
              as={Link}
              aria-label="Profil"
              href="#profile"
              borderRadius="full"
            >
              <RiProfileLine />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip label="Adresse">
            <IconButton
              as={Link}
              aria-label="Adresse"
              href="#location"
              borderRadius="full"
            >
              <GrMapLocation />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip label="Langues">
            <IconButton
              as={Link}
              aria-label="Langues"
              href="#language"
              borderRadius="full"
            >
              <MdOutlineLanguage />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip label="Loisir">
            <IconButton
              as={Link}
              aria-label="Loisir"
              href="#hobbies"
              borderRadius="full"
            >
              <RxHobbyKnife />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip label="Compétence">
            <IconButton
              as={Link}
              aria-label="Compétence"
              href="#skills"
              borderRadius="full"
            >
              <GiSkills />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip label="Réseaux Sociaux">
            <IconButton
              as={Link}
              aria-label="Réseaux Sociaux"
              href="#network"
              borderRadius="full"
            >
              <IoShareSocialOutline />
            </IconButton>
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
