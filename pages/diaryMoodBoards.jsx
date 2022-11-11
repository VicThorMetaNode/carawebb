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
import { IoIosPhoneLandscape } from "react-icons/io";

// import internal pictures
import PINKRETRO1 from "../dist/images/moodboard/PINK RETRO.png";
import PINKRETRO2 from "../dist/images/moodboard/PINK RETRO1.png";
import PINKRETRO3 from "../dist/images/moodboard/PINK RETRO2.png";
import MontmartreADistance1 from "../dist/images/webp/Montmartre à distance.webp";
import MontmartreADistance2 from "../dist/images/webp/Montmartre à distance 1.webp";

const diaryMoodBoard = () => {
  return (
    <>
      <section className="diary-projects-page-section">
        <nav>
          <Navbar />
        </nav>
        <Container mt={10} className="interior-project-container">
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Box>
              <Text className="interior-project-title">MoodBoards</Text>
            </Box>

            <Box className="interior-project-text-box">
              <Text className="interior-project-text" width={"22rem"}>
                An arrangement of images, materials, pieces of text, etc.
                intended to evoke or project a particular style or concept.
              </Text>
            </Box>
          </Stack>
        </Container>
        <Stack justifyContent="center" alignItems="center" mt={10}>
          <Box className="interior-project-text-box">
            <Text
              className="interior-project-title"
              width={"22rem"}
              fontSize={["15px", "15px", "17px"]}
            >
              PINK RETRO
            </Text>
          </Box>
        </Stack>
        <Box mt={10} height={["350px", "500px", "600px"]}>
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            modules={[FreeMode, Navigation]}
            loop={true}
            spaceBetween={10}
          >
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["360px", "620px", "700px"]}
                height={["270px", "420px", "520px"]}
              >
                <Image
                  priority
                  src={PINKRETRO1}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="MoodBoard Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["360px", "620px", "700px"]}
                height={["270px", "420px", "520px"]}
              >
                <Image
                  priority
                  src={PINKRETRO2}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="MoodBoard Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["360px", "620px", "700px"]}
                height={["270px", "420px", "520px"]}
              >
                <Image
                  priority
                  src={PINKRETRO3}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="MoodBoard Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box mt={["-1rem", "0rem", "0rem"]}>
          <HStack justifyContent="center" alignItems="center">
            <IoIosPhoneLandscape size="25px" />
            <Text className="diary-text-discover-arrow">Flip your phone</Text>
          </HStack>
        </Box>

        <Box mb={5}>
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
        <Stack justifyContent="center" alignItems="center" mt={10}>
          <Box className="interior-project-text-box">
            <Text
              className="interior-project-title"
              width={"22rem"}
              fontSize={["15px", "15px", "17px"]}
            >
              MONTMARTRE À DISTANCE
            </Text>
          </Box>
        </Stack>
        <Box mt={10} height={["350px", "500px", "600px"]}>
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            modules={[FreeMode, Navigation]}
            loop={true}
            spaceBetween={10}
          >
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["360px", "620px", "700px"]}
                height={["270px", "420px", "520px"]}
              >
                <Image
                  priority
                  src={MontmartreADistance1}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="MoodBoard Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                className="diary-project-swiper-box diary-project-text-hover-section"
                width={["360px", "620px", "700px"]}
                height={["270px", "420px", "520px"]}
              >
                <Image
                  priority
                  src={MontmartreADistance2}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="./dist/images/blur.png"
                  alt="MoodBoard Projects Picture"
                  className="diary-projects-img"
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box mt={["-1rem", "0rem", "0rem"]}>
          <HStack justifyContent="center" alignItems="center">
            <IoIosPhoneLandscape size="25px" />
            <Text className="diary-text-discover-arrow">Flip your phone</Text>
          </HStack>
        </Box>

        <Box mb={5}>
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

export default diaryMoodBoard;
