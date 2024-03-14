import React from "react";
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      p="20px"
      pl="40px"
      pr="40px"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#FAFAFA"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
    >
      <Text fontSize="1.3rem" fontWeight="600" color="#2D2E32">
        Suvaranjan
      </Text>

      <Hide breakpoint="(max-width: 760px)">
        <UnorderedList display="flex" gap="10" fontSize="1rem" fontWeight="500">
          <NavMenu />
        </UnorderedList>
      </Hide>
      <Show breakpoint="(max-width: 760px)">
        <HamburgerMenuIcon height="40px" width="30px" onClick={onOpen} />
      </Show>
      <DrawerExample isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
}

function NavMenu({ onClose }) {
  return (
    <>
      <ListItem listStyleType="none">
        <Link onClick={onClose}>Home</Link>
      </ListItem>
      <ListItem listStyleType="none">
        <Link href="#about" onClick={onClose}>
          About
        </Link>
      </ListItem>
      <ListItem listStyleType="none">
        <Link href="#project" onClick={onClose}>
          Project
        </Link>
      </ListItem>
      <ListItem listStyleType="none">
        <Link href="#contact" onClick={onClose}>
          Contact
        </Link>
      </ListItem>
    </>
  );
}

function DrawerExample({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent p={2}>
          <DrawerCloseButton p={2} fontSize="1.2rem" />
          <DrawerBody
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <UnorderedList
              display="flex"
              gap="10"
              fontSize="1.5rem"
              fontWeight="500"
              flexDirection="column"
            >
              <NavMenu onClose={onClose} />
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
