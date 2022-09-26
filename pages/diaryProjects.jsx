import React from "react";
import Image from "next/image";

import { Box, Text, HStack, Container, Stack } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";

// import internal pictures
import project1 from "../dist/images/BUYERSIDE FORMAL LOUNGE .JPG";
import project2 from "../dist/images/BUYERSIDE FORMAL LOUNGE 2 .JPG";
import project3 from "../dist/images/BUYERSIDE FORMAL LOUNGE 3.JPG";
import project4 from "../dist/images/BUYERSIDE FORMAL LOUNGE.JPG";
import project5 from "../dist/images/BUYERSIDE FORMAL LOUNGE1.JPG";
import project6 from "../dist/images/PILATES STUDIO .jpeg";
import project7 from "../dist/images/PILATES STUDIO 1.jpeg";
import project8 from "../dist/images/PILATES STUDIO 2.jpeg";
import project9 from "../dist/images/PILATES STUDIO 3.jpeg";
import project10 from "../dist/images/PILATES STUDIO 4.jpeg";
import project11 from "../dist/images/PILATES STUDIO.jpeg";
import project12 from "../dist/images/RIVA .JPG";
import project13 from "../dist/images/RIVA 1.JPG";
import project14 from "../dist/images/RIVA 2.JPG";
import project15 from "../dist/images/RIVA 3.jpeg";
import project16 from "../dist/images/RIVA 4.JPG";
import project17 from "../dist/images/RIVA 5.JPG";
import project18 from "../dist/images/RIVA 6 .JPG";

const diaryProjects = () => {
  return (
    <>
      <section className="diary-projects-page-section">
        <nav>
          <Navbar />
        </nav>
        <Container mt={10} className="interior-project-container">
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Box className="interior-project-title-box">
              <Text className="interior-project-title">
                discover our projects
              </Text>
            </Box>
            {/* <Box className="interior-project-text-box">
              <Text className="interior-project-text" width={"22rem"}>
                Follow my work all around the globe.
                <br />
                <span className="diary-projects-current-city-text">
                  {" "}
                  Currently established in{" "}
                </span>
                <span className="diary-projects-current-city">Costa Rica</span>
              </Text>
            </Box> */}
          </Stack>
        </Container>
        <section className="interior-project-swipe-section">
          <Swiper
            className="mySwiper"
            slidesPerView={1.5}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project1}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>

              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project2}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project3}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project4}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project5}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project6}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project7}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project8}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project9}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project10}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project11}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project12}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project13}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project14}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project15}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project16}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project17}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="diary-project-swiper-box diary-project-text-hover-section">
                <Image
                  src={project18}
                  width="400px"
                  height="400px"
                  objectFit="cover"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
              <Box className="diary-project-text-hover-box" py={2} px={3}>
                <Stack justifyContent="center" alignItems="center">
                  <Text className="diary-project-text-hover">Belgium</Text>
                </Stack>
              </Box>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </>
  );
};

export default diaryProjects;