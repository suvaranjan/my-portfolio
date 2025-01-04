import React from "react";
import { Box, Text, Button, Link } from "@chakra-ui/react";
import { DownloadIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <Box
      className="container about-main-box"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt="4rem"
      //   border="2px solid red"
      gap={5}
      mb="4rem"
      id="about"
    >
      <Box className="aboutImage"></Box>
      <Box maxWidth={{ md: "500px" }}>
        <Text fontSize="1.1rem" fontWeight="600" mb={2} color="blue.500">
          About Me
        </Text>
        <Text fontSize="1.5rem" fontWeight="700" mb={4}>
          Full Stack Developer & UI/UX Designer
        </Text>
        <Text color="#555555" fontSize="1rem">
          I'm Suvaranjan, a full stack developer dedicated to designing
          responsive UI/UX. Proficient in React, Next.js, MongoDB, Node.js,
          Tailwind CSS, TypeScript for clean interfaces.
        </Text>
        <Button variant="outline" colorScheme="black" mt={4}>
          <DownloadIcon />
          {/* <Text ml={2}>Resume</Text> */}
          <Link
            href="https://drive.google.com/file/d/1_AqP0F_jvafiIDcWNo5stqaZJWwoNrjl/view"
            ml={2}
          >
            Resume
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
