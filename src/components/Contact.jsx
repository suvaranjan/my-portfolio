import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Box className="container contact-box-1" mt="4rem" mb="6rem" id="contact">
      <Text fontWeight="700" fontSize="1.1rem" color="blue.500" mb={2}>
        CONTACT
      </Text>
      <Text fontWeight="600" fontSize="1.5rem">
        Feel free to reach out! 👇
      </Text>
      <Box display="flex" className="contact-box-2" mt="4rem">
        <Box
          display="flex"
          // flexDirection="row"
          gap="1.5rem"
          alignItems="center"
          className="contact-box-3"
        >
          <Box width="2rem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="map-marker-minus"
            >
              <path
                fill="#3182CE"
                d="M14,9.45H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm6.46.18A8.5,8.5,0,1,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05Z"
              ></path>
            </svg>
          </Box>
          <Box display="flex" flexDir="column" gap={1}>
            <Text fontWeight="700" fontSize="1.1rem">
              Location
            </Text>
            <Text
              color="#555555"
              fontSize="1.1rem"
              _hover={{ cursor: "pointer", color: "#3182CE" }}
            >
              Bhubaneswar, Odisha, India
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          // flexDirection="row"
          gap="1.5rem"
          alignItems="center"
          className="contact-box-3"
        >
          <Box width="2rem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="envelope"
            >
              <path
                fill="#3182CE"
                d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"
              ></path>
            </svg>
          </Box>
          <Box display="flex" flexDir="column" gap={1}>
            <Text fontWeight="700" fontSize="1.1rem">
              Mail
            </Text>
            <Text
              color="#555555"
              fontSize="1.1rem"
              _hover={{ cursor: "pointer", color: "#3182CE" }}
            >
              suvaranjan01@gmail.com
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
