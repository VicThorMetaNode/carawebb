import React from "react";
import Image from "next/image";

import {
  Box,
  Text,
  HStack,
  VStack,
  Container,
  Flex,
  Button,
} from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/Navbar";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const interiorProjects = () => {
  return (
    <>
      <section className="interior-project-page-section">
        <Navbar />
        <Container className="interior-project-container">
          <VStack>
            <Box className="interior-project-title-box">
              <Text className="interior-project-title">our services</Text>
            </Box>
            <Box className="interior-project-subtitle-box">
              <Text className="interior-project-subtitle">
                interiors projects
              </Text>
            </Box>
            <Box className="interior-project-text-box">
              <Container className="interior-project-text">
                We design your interior to bring new perspectives and an
                aesthetic look.
              </Container>
            </Box>
          </VStack>
        </Container>
        <section className="interior-project-swipe-section">
          <Box>SWIPER</Box>
        </section>
        <section className="interior-project-bottom-section">
          <VStack>
            <Box className="interior-project-bottom-swipe-box">
              <HStack>
                <BsArrowLeftShort className="arrow-swipe-icon" size="30px" />
                <Text className="interior-project-bottom-swipe-text">
                  swiper
                </Text>
                <BsArrowRightShort className="arrow-swipe-icon" size="30px" />
              </HStack>
            </Box>
            <Box className="interior-project-bottom-section">
              <Text className="interior-project-bottom-textOne">
                Not sure? Let's hop on a free discovery call to discuss your
                needs
              </Text>
            </Box>
            <Box mt={6} className="interior-project-bottom-button-box">
              <button className=" btn-discovery-call">discovery call</button>
            </Box>
            <Box>
              <Text className="interior-project-bottom-textTwo">
                projects can be done remotely if desired*
              </Text>
            </Box>
          </VStack>
        </section>
      </section>
    </>
  );
};

export default interiorProjects;
