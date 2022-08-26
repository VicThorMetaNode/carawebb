import React, { useState } from "react";
// import Image from "next/image";

import { Box, Text, HStack, Container, Stack } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

// import projectImg from "../dist/images/augustine-wong-T0BYurbDK_M-unsplash.jpg";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const interiorProjects = () => {
  //TOGGLE

  return (
    <>
      <section className="interior-project-page-section">
        <Navbar />
        <Container mt={10} className="interior-project-container">
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Box className="interior-project-title-box">
              <Text className="interior-project-title">our services</Text>
            </Box>
            <Box className="interior-project-subtitle-box">
              <Text className="interior-project-subtitle">
                interiors projects
              </Text>
            </Box>
            <Box className="interior-project-text-box">
              <Text
                className="interior-project-text"
                width={["17rem", "22rem", "auto"]}
              >
                We design your interior to bring new perspectives and an
                aesthetic look.
              </Text>
            </Box>
          </Stack>
        </Container>
        <section className="interior-project-swipe-section">
          <Swiper className="mySwiper" slidesPerView={1} loop={true}>
            <SwiperSlide>
              <Box width="400px" height="336px" className="project-swiper-div">
                <Box
                  pos="fixed"
                  bottom={10}
                  className="project-swiper-div-center"
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Box>
                      <Text className="project-swiper-title">Basic</Text>
                    </Box>
                    <Box>
                      <Container className="project-swiper-text" px={10}>
                        We listen to your lifestyle desires and give our first
                        suggestions and tips.
                      </Container>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box width="400px" height="336px" className="project-swiper-div">
                <Box
                  pos="fixed"
                  bottom={12}
                  className="project-swiper-div-standard-center"
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Box>
                      <Text className="project-swiper-title">Standard</Text>
                    </Box>
                    <Box>
                      <Container className="project-swiper-text">
                        We guide you through the process of buying new
                        furniture, flooring decorating elements and coverings.
                        This is included with a global price estimation.
                      </Container>
                    </Box>
                    <Box></Box>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box width="400px" height="336px" className="project-swiper-div">
                <Box mt={6}>
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Box>
                      <Text className="all-inclusive">All-inclusive</Text>
                    </Box>
                    <Box>
                      <Container className="project-swiper-text" px={8}>
                        Don’t want to think about anything? We do all the heavy
                        lifting for you. All you have to do is sit back and
                        relax.
                      </Container>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="interior-project-bottom-section">
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Box className="interior-project-bottom-swipe-box">
              <HStack>
                <BsArrowLeftShort className="arrow-swipe-icon" size="30px" />
                <Text className="interior-project-bottom-swipe-text">
                  swipe
                </Text>
                <BsArrowRightShort className="arrow-swipe-icon" size="30px" />
              </HStack>
            </Box>
            <Box className="interior-project-bottom-text-section">
              <Text
                className="interior-project-bottom-textOne"
                width={["15rem", "20rem", "auto"]}
              >
                Not sure? Let's hop on a free discovery call to discuss your
                needs
              </Text>
            </Box>
            <Box className="interior-project-bottom-button-box">
              <button className=" btn-discovery-call">discovery call</button>
            </Box>
            <Box>
              <Text className="interior-project-bottom-textTwo">
                projects can be done remotely if desired*
              </Text>
            </Box>
          </Stack>
        </section>
      </section>
    </>
  );
};

export default interiorProjects;
