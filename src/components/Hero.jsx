import {
  Box,
  Image,
  ListItem,
  UnorderedList,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <Box className="container">
      <HeroMain />
      <TechStack />
    </Box>
  );
}

export default Hero;

function HeroMain() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className="hero-main"
      mb="4rem"
    >
      <Box
        maxWidth="500px"
        gap="1.5rem"
        display="flex"
        flexDirection="column"
        className="hero-main-box-1"
      >
        <Box position="relative">
          <Text
            fontSize={{ base: "2.5rem", md: "3rem" }}
            fontWeight="800"
            color="#2D2E32"
          >
            Full Stack Developer
          </Text>
        </Box>

        <Text color="#555555" fontSize="1.1rem">
          Hi, I'm Suvaranjan.A passionate MERN Stack developer based in
          Bhubaneswar, India. 📍
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          gap={4}
          className="hero-main-box-2"
        >
          <GitHubLogoIcon width="30px" height="30px" />
          <LinkedInLogoIcon width="30px" height="30px" />
        </Box>
      </Box>
      <Box className="myImage"></Box>
    </Box>
  );
}

function TechStack() {
  return (
    <>
      <Flex alignItems="center" mb={5} className="tech-stack" gap={5}>
        <Text
          color="#2D2E32"
          fontSize="1.1rem"
          mr={3}
          fontWeight="500"
          className="tech-stack-text"
        >
          Tech Stack
        </Text>

        <Box>
          <UnorderedList display="flex" gap="2rem">
            <ListItem listStyleType="none">
              <Image
                src="https://skillicons.dev/icons?i=html,css"
                alt="html-css logo"
              />
            </ListItem>
            <ListItem listStyleType="none">
              <Image
                src="https://skillicons.dev/icons?i=js,ts"
                alt="js-ts logo"
              />
            </ListItem>
            <ListItem listStyleType="none">
              <Image
                src="https://skillicons.dev/icons?i=react,next"
                alt="react-next logo"
              />
            </ListItem>
            <ListItem listStyleType="none">
              <Image
                src="https://skillicons.dev/icons?i=nodejs,mongodb"
                alt="node-mongodb logo"
              />
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </>
  );
}
