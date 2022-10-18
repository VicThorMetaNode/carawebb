// ------------------ HOME PAGE -------------------
import React from "react";
import Image from "next/image";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";
//------ IMPORT COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import internal pictures
import logoFooter from "../dist/images/logo2.png";

//-------------- BROWSER  -----------
export default function Home() {
  return (
    <>
      <section className="landing-page">
        <nav>
          <Navbar />
        </nav>
        <Box mr={[3, 5, 20]} className="landing-page-section-title">
          <Text fontSize="6xl" className="landing-page-title">
            DEAR <br /> ONE
          </Text>
        </Box>
        <Box mr={[3, 5, 20]} className="landing-page-section-subtitle">
          <Text fontSize="2xl" className="landing-page-subtitle">
            Let's build
            <br />
            memories together
          </Text>
        </Box>
        <Box>
          <Box mr={[3, 5, 20]} className="landing-page-btn">
            <Link href="/contact">
              <button className="btn-contact">CONTACT</button>
            </Link>
          </Box>
        </Box>

        {/* <Flex justifyContent="right" alignItems="flex-end"> */}
        <Box
          className="landing-page-footer-logo"
          width="90px"
          height="100px"
          position={"absolute"}
          right={["0rem", "0rem", "3rem"]}
        >
          {/* position={"absolute"}
            right={[-2, -2, 7]}
            bottom={"0"} */}
          <Image src={logoFooter} objectFit="cover" alt="Logo Picture" />
        </Box>
        {/* </Flex> */}
        {/* ANCIEN FOOTER */}

        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Box className="landing-page-footer-section">
            <Footer />
          </Box>
        </Flex>
      </section>
    </>
  );
}
