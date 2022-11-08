// ------------------ HOME PAGE -------------------
import React from "react";
import dynamic from "next/dynamic";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";
//------ IMPORT COMPONENTS
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Navbar = dynamic(()=>import('../components/Navbar"'))

//-------------- BROWSER  -----------
export default function Home() {
  return (
    <>
      <section className="landing-page">
        <Box className="landing-page-box">
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

          {/* <Box
            className="landing-page-footer-logo"
            width="90px"
            height="90px"
            position={"absolute"}
            right={["0rem", "0rem", "3rem"]}
          >
            
            <Image src={logoFooter} objectFit="fill" alt="Logo Picture" />
          </Box>
           */}

          <Box>
            <Footer />
          </Box>
        </Box>
      </section>
    </>
  );
}
