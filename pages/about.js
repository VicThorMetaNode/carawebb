import React from "react";
import Image from "next/image";

import { Box, Text, VStack, Container, Flex } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/Navbar";
import aboutPict from "../dist/images/about-img.png";

import { BsArrowUp } from "react-icons/bs";

const about = () => {
  return (
    <>
      <section className="about-page">
        <Navbar />
        <Container className="about-page-partOne">
          <Box>
            <Text mb={2} className="about-page-title-partOne">
              dear one,
            </Text>
            <Text maxW={["sm", "md", "xl"]} className="about-page-text-partOne">
              Life can often feel like a constant race.
              <br />
              We're always busy, running from one thing to the next.
              <br /> <br />
              But, at the end of the day, all we are looking for is that homey
              feeling and create unforgettable memories with our loved ones.
              <br /> <br />
              <em>"Feeling at home"</em> can look different for everyone. Some
              people want a quiet place to unwind, while others need something
              vibrant, where they can host memorable dinner parties with
              friends.
              <br /> <br />
              <span className="about-page-keyword">Our job</span> , and passion,
              is to make sure you are feeling "at home". Whatever that means for
              you.
              <br /> <br />"
              <span className="about-page-bottom-quote">
                We believe in the beauty of simplicity.
              </span>
              "
            </Text>
            <Box mt={6} className="about-page-bottom-btn">
              <button className=" btn-readMore"> READ MORE </button>
            </Box>
          </Box>
        </Container>

        <Box
          className="about-page-partTwo-section"
          pl={["auto", "5rem", "20rem"]}
        >
          <article className="about-page-partTwo-flex">
            <Box className="about-page-partTwo-boxTextOne">
              <Text
                className="about-page-partTwo-textLeft"
                fontSize={["50px", "45px", "50px"]}
              >
                {" "}
                how it started
              </Text>
            </Box>

            <Box className="about-page-partTwo-boxTextTwo" m={2}>
              <Text className="about-page-partTwo-textRight" maxW={"sm"}>
                Victoria was born and raised in Brussels but has lived in many
                different cities around the globe.
                <br /> <br />
                She has a degree in communications, an MBA in Hotel Management,
                and in-depth training in interior design.
                <br /> <br />
                Her interior designer journey started when she was blocked in
                her bungalow in Los Angeles during the pandemic. Due the
                situation she had to design her own entire apartment from
                distance (located in Brussels).
                <br /> <br />
                When doing so she loved the process and was thrilled about the
                result!
                <br /> <br />
                This opportunity gave her the strength and the inspiration to do
                it for others and this is how cara.
                <span className="about-page-dearOne-capitalize">
                  DEAR ONE
                </span>{" "}
                was born.
              </Text>
            </Box>
          </article>
        </Box>

        <section className="about-page-image-section">
          <Flex justifyContent="center" alignItems="center">
            <Box className="about-page-image">
              <Image
                src={aboutPict}
                alt="Picture of the author"
                width="450px"
                height="500px"
              />
            </Box>
          </Flex>

          <Flex justifyContent="center" alignItems="center">
            <Box className="about-page-arrow-bottomPage">
              <button>
                <BsArrowUp className="arrow-icon" size="50px" />
              </button>
            </Box>
          </Flex>
        </section>
      </section>
    </>
  );
};

export default about;
