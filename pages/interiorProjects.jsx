import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Box, Text, HStack, Container, Stack } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import PalmlPict from "../dist/images/augustine-wong-T0BYurbDK_M-unsplash.jpg";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const interiorProjects = () => {
  //TAP TO DISCOVER
  const [showMoreBasic, setShowMoreBasic] = useState(false);
  const [showMoreStandard, setShowMoreStandard] = useState(false);
  const [showMoreAllIn, setShowMoreAllIn] = useState(false);
  return (
    <>
      <section className="interior-project-page-section">
        <nav>
          <Navbar />
        </nav>
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
              <Text className="interior-project-text" width={"22rem"}>
                We design your interior to bring new perspectives and an
                aesthetic look.
              </Text>
            </Box>
          </Stack>
        </Container>
        <section className="interior-project-swipe-section">
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
          >
            <SwiperSlide>
              <a onClick={() => setShowMoreBasic(!showMoreBasic)}>
                {showMoreBasic ? (
                  <Box
                    width={["320px", "400px", "500px"]}
                    height={["330px", "400px", "500px"]}
                    className="project-swiper-div project-palm-section"
                  >
                    <Box className="project-palm-box">
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                      >
                        <Box>
                          <Text className="project-swiper-title">Basic</Text>
                        </Box>
                        <Box>
                          <Text className="project-swiper-text">
                            We listen to your lifestyle desires and give our
                            first suggestions and tips.
                          </Text>
                        </Box>
                        <Box></Box>
                      </Stack>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    width={["320px", "400px", "500px"]}
                    height={["330px", "400px", "500px"]}
                    className="project-swiper-div project-palm-section"
                  >
                    <Image
                      priority
                      src={PalmlPict}
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="./dist/images/blur.png"
                      alt="Palm Picture by Augustine Wong"
                      className="img-palm "
                    />
                    <Box className="project-palm-box">
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        spacing="0.50rem"
                      >
                        <Text className="project-swiper-title project-palm-title">
                          Basic
                        </Text>

                        <Text className="project-palm-text project-swiper-text">
                          tap to discover
                        </Text>
                      </Stack>
                    </Box>
                  </Box>
                )}
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a onClick={() => setShowMoreStandard(!showMoreStandard)}>
                {showMoreStandard ? (
                  <Box
                    width={["320px", "400px", "500px"]}
                    height={["600px", "400px", "500px"]}
                    className="project-swiper-div project-palm-section"
                  >
                    <Box className="project-palm-box">
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                      >
                        <Box>
                          <Text className="project-swiper-title">Standard</Text>
                        </Box>
                        <Box>
                          <Text className="project-swiper-text standard">
                            We listen to your lifestyle, and desires. We then
                            present you with a Mood Board adapted to your
                            specific needs. When we have redefined the wanted
                            style, we present you personalized visuals (layout
                            plan, sketches, or 3D views) as well as samples.{" "}
                            <br /> <br /> We guide you through the process of
                            buying new furniture, flooring, decorating elements
                            and coverings. This is included with a global price
                            estimation.
                          </Text>
                        </Box>
                        <Box></Box>
                      </Stack>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    width={["320px", "400px", "500px"]}
                    height={["330px", "400px", "500px"]}
                    className="project-swiper-div project-palm-section"
                  >
                    <Image
                      src={PalmlPict}
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="./dist/images/blur.png"
                      alt="Palm Picture by Augustine Wong"
                      className="img-palm "
                    />
                    <Box className="project-palm-box">
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        spacing="0.50rem"
                      >
                        <Text className="project-swiper-title project-palm-title">
                          Standard
                        </Text>

                        <Text className="project-palm-text project-swiper-text">
                          tap to discover
                        </Text>
                      </Stack>
                    </Box>
                  </Box>
                )}
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a onClick={() => setShowMoreAllIn(!showMoreAllIn)}>
                {showMoreAllIn ? (
                  <Box
                    width={["320px", "400px", "500px"]}
                    height={["330px", "400px", "500px"]}
                    className="project-swiper-div project-palm-section"
                  >
                    <Box className="project-palm-box">
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                      >
                        <Box>
                          <Text className="project-swiper-title">
                            {" "}
                            All-inclusive
                          </Text>
                        </Box>
                        <Box>
                          <Text className="project-swiper-text">
                            Don't want to think about anything? We do all the
                            heavy lifting for you. All you have to do is sit
                            back and relax.
                          </Text>
                        </Box>
                        <Box></Box>
                      </Stack>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    width={["320px", "400px", "500px"]}
                    height={["330px", "400px", "500px"]}
                    className="project-swiper-div project-palm-section"
                  >
                    <Image
                      src={PalmlPict}
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="./dist/images/blur.png"
                      alt="Palm Picture by Augustine Wong"
                      className="img-palm "
                    />
                    <Box className="project-palm-box">
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        spacing="0.50rem"
                      >
                        <Text className="project-swiper-title project-palm-title">
                          All-inclusive
                        </Text>

                        <Text className="project-palm-text project-swiper-text">
                          tap to discover
                        </Text>
                      </Stack>
                    </Box>
                  </Box>
                )}
              </a>
            </SwiperSlide>

            {/* <SwiperSlide>
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
            </SwiperSlide> */}
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
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
                Not sure? <br /> Let's hop on a free discovery call to discuss
                your needs
              </Text>
            </Box>
            <Box className="interior-project-bottom-button-box">
              <Link href="https://calendly.com/caradearone/15min">
                <button className=" btn-discovery-call">discovery call</button>
              </Link>
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
