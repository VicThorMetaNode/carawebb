// ------------------ HOME PAGE -------------------
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
//------ IMPORT COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Box className="landing-page-footer-section">
            <Footer />
          </Box>
        </Flex>
      </section>
    </>
  );
}
