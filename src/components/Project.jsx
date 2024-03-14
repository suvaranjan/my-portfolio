import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Box, Button, Image, Text } from "@chakra-ui/react";

export default function Project() {
  return (
    <>
      <Box className="container" mt="5.5rem">
        <Text fontWeight="600" fontSize="1.6rem" textAlign="center">
          Projects
        </Text>
        <Text color="#555555" fontSize=".8rem" textAlign="center">
          Most recent work
        </Text>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box className="slideBox" border="1px solid #555555" height="100%">
              <Image
                src="../src/assets/chat-app.png"
                width="100%"
                display="block"
                height="200px"
              />
              <Box
                display="flex"
                flexDir="column"
                gap={2}
                alignItems="flex-start"
                p={3}
              >
                <Text fontSize="1.2rem" fontWeight="600">
                  Chat App
                </Text>
                <Text fontSize=".9rem" color="#555555">
                  Built responsive chat app with MERN stack for seamless
                  communication.
                </Text>
                <Button size="sm" variant="outline" colorScheme="black">
                  Live View
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="slideBox" border="1px solid #555555" height="100%">
              <Image
                src="../src/assets/blog-app.png"
                width="100%"
                display="block"
                height="180px"
              />
              <Box
                display="flex"
                flexDir="column"
                gap={2}
                alignItems="flex-start"
                p={3}
              >
                <Text fontSize="1.2rem" fontWeight="600">
                  Nextjs Blog App
                </Text>
                <Text fontSize=".9rem" color="#555555">
                  Built responsive Blog App with Nextjs.The minimalist simple
                  UI/UX Design.
                </Text>
                <Button size="sm" variant="outline" colorScheme="black">
                  Live View
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="slideBox" border="1px solid #555555" height="100%">
              <Image
                src="../src/assets/quiz.png"
                width="100%"
                display="block"
                height="180px"
              />
              <Box
                display="flex"
                flexDir="column"
                gap={2}
                alignItems="flex-start"
                p={3}
              >
                <Text fontSize="1.2rem" fontWeight="600">
                  Quiz App
                </Text>
                <Text fontSize=".9rem" color="#555555">
                  Built responsive Quiz App with React for a collage student and
                  he is happy with that.
                </Text>
                <Button size="sm" variant="outline" colorScheme="black">
                  Live View
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}