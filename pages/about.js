import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { Box, Text, Stack, Flex } from "@chakra-ui/react";
import { ImInstagram } from "react-icons/im";
//------ IMPORT COMPONENTS

import aboutPict2 from "../dist/images/iMG_6599.jpg";

//LAZY IMPORT: import this part lately
const Navbar = dynamic(() => import("../components/NavbarOther"));

const about = () => {
  //TOGGLE
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <section className="about-page">
        <nav>
          <Navbar />
        </nav>
        <Stack justifyContent="center" alignItems="center" direction="column">
          <Box
            className="about-page-partOne"
            py={4}
            px={["0", "2rem", "4rem"]}
            mt={["0", "2rem", "2rem"]}
          >
            <Box>
              <Text mb={2} className="about-page-title-partOne">
                dear one,
              </Text>
              <Text
                className="about-page-text-partOne"
                fontSize={["13px", "17px", "17px"]}
              >
                Life can often feel like a constant race.
                <br />
                We're always busy, running from one thing to the next.
                <br /> <br />
                But, at the end of the day, all we are looking for is that homey
                feeling and create unforgettable memories with our loved ones.
                {showMore && (
                  <>
                    <Text
                      className="about-page-text-partOne-readMore"
                      fontSize={["13px", "17px", "17px"]}
                    >
                      <br />
                      <em>"Feeling at home"</em> can look different for
                      everyone. Some people want a quiet place to unwind, while
                      others need something vibrant, where they can host
                      memorable dinner parties with friends.
                      <br /> <br />
                      No matter what "home" means to you, we are here to help
                      you achieve it.
                    </Text>
                    <Box className="about-page-bottom-quote-div" mt={2}>
                      <Text
                        className="about-page-bottom-quote"
                        fontSize={["13px", "17px", "17px"]}
                      >
                        We believe that beauty lies in simplicity and strive to
                        create spaces that are both functional and aesthetically
                        pleasing.
                      </Text>
                    </Box>
                    <Text
                      className="about-page-text-partOne-readMore"
                      fontSize={["13px", "17px", "17px"]}
                    >
                      Whether you're starting from scratch or simply looking to
                      revamp a specific space, we're passionate about making
                      sure you feel completely at home.
                    </Text>
                  </>
                )}
              </Text>
              <Box mt={6} className="about-page-bottom-btn">
                <button
                  className=" btn-readMore"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? <p>read less</p> : <p>read more</p>}{" "}
                </button>
              </Box>
            </Box>
          </Box>
        </Stack>

        <Box
          className="about-page-partTwo-section"
          mt={["5rem", "10rem", "10rem"]}
          mb={["7rem", "10rem", "10rem"]}
        >
          <Flex
            className="about-page-partTwo-flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              className="about-page-partTwo-boxTextOne"
              // ml={["-12rem", "-5rem", "30rem"]}
            >
              <Text className="about-page-partTwo-textLeft" fontSize={"45px"}>
                {" "}
                how it started
              </Text>
            </Box>

            <Box className="about-page-partTwo-boxTextTwo" ml={"-12rem"}>
              <Text
                className="about-page-partTwo-textRight"
                fontSize={["14px", "17px", "17px"]}
              >
                Having grown up in Brussels, I've been fortunate enough to live
                in various cities across the globe, making me a true world
                traveller.
                <br /> <br />
                With a degree in communications, an MBA in Hotel Management, and
                an in-depth training and passion in interior design, my journey
                as an interior designer began unexpectedly during the pandemic
                <br /> <br />
                Stuck in my bungalow in Los Angeles, I faced the challenge of
                designing my own apartment in Brussels from afar. Despite the
                distance and the unique circumstances, I found myself thoroughly
                enjoying the process and was thrilled with the end result.
                <br /> <br />
                This experience sparked a newfound inspiration and drive to
                share my passion with others, and thus, cara.
                <span className="about-page-dearOne-capitalize">
                  DEAR ONE{" "}
                </span>{" "}
                was born.
                <br /> <br />I am now dedicated to providing unique interior
                design services that bring comfort, beauty, and functionality to
                each unique space.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box mb={10} p={4}>
          <Stack justifyContent="center" alignItems="center" textAlign="center">
            <Text
              className="about-current-city-text"
              fontSize={["15px", "17px", "21px"]}
            >
              As a perpetual wanderer, I'm always on the go. <br /> Follow our
              Instagram page to keep up with the latest adventures and
              destinations!
            </Text>

            <a href="https://www.instagram.com/caradearone/">
              <ImInstagram size={"2rem"} color="grey" />
            </a>
          </Stack>
        </Box>

        <section className="about-page-image-section">
          <Flex justifyContent="center" alignItems="center">
            <Box className="about-page-image">
              <Image
                src={aboutPict2}
                alt="Picture of the author"
                width="400px"
                height="520px"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* <Flex justifyContent="center" alignItems="center">
            <Box className="about-page-arrow-bottomPage">
              <button>
                <BsArrowUp className="arrow-icon" size="50px" />
              </button>
            </Box>
          </Flex> */}
        </section>
      </section>
    </>
  );
};

export default about;
