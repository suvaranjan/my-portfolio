import { Box, Text, Link } from "@chakra-ui/react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";

function Footer() {
  return (
    <Box
      pt="3.5rem"
      pb="3.5rem"
      bg="#2d2e32"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className="footer-box"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color="#FAFAFA" fontWeight="700" fontSize="1.1rem">
          Copyright © 2024. All rights are reserved
        </Text>
        <Box display="flex" flexDirection="row" gap={5}>
          <Link href="https://github.com/suvaranjan" isExternal>
            <GitHubLogoIcon width="30px" height="30px" color="#FAFAFA" />
          </Link>

          <Link href="https://www.linkedin.com/in/suvaranjan/" isExternal>
            <LinkedInLogoIcon width="30px" height="30px" color="#FAFAFA" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
