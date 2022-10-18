import React, { useState } from "react";
import Image from "next/image";

import { Box, Text, Stack, Flex } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";
import aboutPict from "../dist/images/about-img.png";
import aboutPict1 from "../dist/images/iMG_6569.jpg";
import aboutPict2 from "../dist/images/iMG_6599.jpg";

// import { BsArrowUp } from "react-icons/bs";

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
                      Our job , and passion, is to make sure you are feeling "at
                      home". Whatever that means for you.
                    </Text>
                    <Box className="about-page-bottom-quote-div" mt={2}>
                      <Text
                        className="about-page-bottom-quote"
                        fontSize={["13px", "17px", "17px"]}
                      >
                        " We believe in the beauty of simplicity".
                      </Text>
                    </Box>
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
              ml={["-12rem", "30rem"]}
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
                Born and raised in Brussels but lived in many different cities
                around the globe.
                <br /> <br />
                I have a degree in communications, an MBA in Hotel Management,
                and an in-depth training in interior design.
                <br /> <br />
                My interior designer journey started when I was blocked in my
                bungalow in Los Angeles during the pandemic. Due the situation I
                had to design my own entire apartment from distance (located in
                Brussels).
                <br /> <br />
                <br />
                When doing so, I really loved the process and was thrilled about
                the result!
                <br /> <br />
                This opportunity gave me the strength and the inspiration to do
                it for others, and this is how cara.
                <span className="about-page-dearOne-capitalize">
                  DEAR ONE
                </span>{" "}
                was born.
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
              as an endless wanderer I'm constantly on the move...
              <br />
              currently  in{" "}
              <span className="about-current-city">Costa Rica</span>
            </Text>
          </Stack>
        </Box>

        <section className="about-page-image-section">
          <Flex justifyContent="center" alignItems="center">
            <Box className="about-page-image">
              <Image
                src={aboutPict1}
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
