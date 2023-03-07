import React, { useState } from "react";
import Image from "next/image";

import { Box, Text, HStack, Container, Stack } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

// import Swiper styles
import "swiper/css";

//----- IMPORT ICONS
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// import internal pictures
import project1 from "../dist/images/BUYERSIDE FORMAL LOUNGE .JPG";
import project2 from "../dist/images/BUYERSIDE FORMAL LOUNGE 2 .JPG";
import project3 from "../dist/images/BUYERSIDE FORMAL LOUNGE 3.JPG";
import project4 from "../dist/images/BUYERSIDE FORMAL LOUNGE.JPG";
import project5 from "../dist/images/BUYERSIDE FORMAL LOUNGE1.JPG";
import project7 from "../dist/images/PILATES STUDIO 1.jpeg";
import project8 from "../dist/images/PILATES STUDIO 2.jpeg";
import project9 from "../dist/images/PILATES STUDIO 3.jpeg";
import project10 from "../dist/images/PILATES STUDIO 4.jpeg";
import project11 from "../dist/images/PILATES STUDIO.jpeg";
import project12 from "../dist/images/webp/RIVA-.webp";
import project13 from "../dist/images/webp/RIVA-1.webp";
import project14 from "../dist/images/webp/RIVA-2.webp";
import project15 from "../dist/images/webp/RIVA-3.webp";
import project16 from "../dist/images/webp/RIVA-4.webp";
import project17 from "../dist/images/webp/RIVA-5.webp";
import project18 from "../dist/images/webp/RIVA-6-.webp";

// import internal vids
import riva from "../dist/vid/riva.mov";
import meeting from "../dist/vid/meeting.mov";
import pilates from "../dist/vid/pilates.mov";

const diaryProjects = () => {
  //TAP TO DISCOVER
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
        <Box mt={5} height={["350px", "500px", "600px"]}>
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            // slidesPerView={3}
            // slidesPerGroup={3}

            modules={[FreeMode, Navigation]}
            loop={true}
            spaceBetween={10}
          >
            {/* RIVA PROJECT */}
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project16}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title" px={6}>
                      Riva
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Brussels, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project15}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title" px={6}>
                      Riva
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Brussels, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project17}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title" px={6}>
                      Riva
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Brussels, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project12}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title" px={6}>
                      Riva
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Brussels, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project18}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title" px={6}>
                      Riva
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Brussels, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project13}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title" px={6}>
                      Riva
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Brussels, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project14}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title" px={6}>
                      Riva
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Brussels, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            {/* <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <video
                  autoPlay
                  src={require("../dist/vid/riva.mp4")}
                  layout="fill"
                />
              </Box>
            </SwiperSlide> */}

            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project2}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-reduced" px={6}>
                      meeting room
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Woluwe, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project1}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-reduced" px={6}>
                      meeting room
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Woluwe, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project3}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-reduced" px={6}>
                      meeting room
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Woluwe, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project4}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-reduced" px={6}>
                      meeting room
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Woluwe, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project5}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-reduced" px={6}>
                      meeting room
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Woluwe, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
            {/* <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "600px"]}
                height={["330px", "600px"]}
              >
                <video
                  autoPlay
                  src={require("../dist/vid/meeting.mp4")}
                  layout="fill"
                />
              </Box>
            </SwiperSlide> */}

            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project9}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-pilates" px={6}>
                      Pilates studio
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Forest, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project8}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-pilates" px={6}>
                      Pilates studio
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Forest, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project7}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-pilates" px={6}>
                      Pilates studio
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Forest, be
                    </Text>
                  </Stack>
                </Box>
              </Box>

              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project10}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-pilates" px={6}>
                      Pilates studio
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Forest, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
              {/* // <Box className="diary-project-text-hover-box" py={2} px={3}>
              //   <Stack justifyContent="center" alignItems="center">
              //     <Text className="diary-project-text-hover">Belgium</Text>
              //   </Stack>
              // </Box> */}
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <Image
                  priority
                  src={project11}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="Diary Projects Picture"
                  className="diary-projects-img"
                />
                <Box className="project-palm-box ">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing="0.50rem"
                  >
                    <Text className=" diary-title-pilates" px={6}>
                      Pilates studio
                    </Text>
                    <Text className=" diary-text" px={6}>
                      Forest, be
                    </Text>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
            {/* <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["320px", "500px", "600px"]}
                height={["330px", "500px", "600px"]}
              >
                <video
                  autoPlay
                  src={require("../dist/vid/pilates.mp4")}
                  layout="fill"
                />
              </Box>
            </SwiperSlide> */}
          </Swiper>
        </Box>

        <Box>
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Box className="interior-project-bottom-swipe-box">
              <HStack>
                <BsArrowLeftShort className="arrow-swipe-icon" size="30px" />
                <Text className="interior-project-bottom-swipe-text">next</Text>
                <BsArrowRightShort className="arrow-swipe-icon" size="30px" />
              </HStack>
            </Box>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default diaryProjects;
