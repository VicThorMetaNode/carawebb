// ------------------ HOME PAGE -------------------
import React from "react";

import { Box, Text, Flex, Stack, Container } from "@chakra-ui/react";
import Link from "next/link";

//------ IMPORT COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer_test";

const landing_test = () => {
  return (
    <>
      <Container className="landing-page-test">
        <Box>
          <nav>
            <Navbar />
          </nav>
        </Box>

        <Box mr={[3, 5, 20]} mt="10rem">
          <Text className="landing-page-title" fontSize="6xl">
            DEAR <br /> ONE
          </Text>
        </Box>
        <Box mr={[3, 5, 20]} mt="1.3rem">
          <Text fontSize="2xl" className="landing-page-subtitle">
            Let's build
            <br />
            memories together
          </Text>
        </Box>
        <Box mr={[3, 5, 20]} className="landing-page-btn">
          <Link href="/contact">
            <button className="btn-contact">CONTACT</button>
          </Link>
        </Box>

        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default landing_test;
