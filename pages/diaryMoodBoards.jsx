import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, HStack, Container, Stack } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";

import logo from "../dist/images/logo.png";
//-------------- Import ICONS --------------

import { ImPinterest2, ImInstagram } from "react-icons/im";

const diaryMoodBoard = () => {
  return (
    <>
      <section className="diary-moodBoard-page-section">
        <nav>
          <Navbar />
        </nav>
        <Box mt={10}>
          <Stack justifyContent="center" alignItems="center">
            <Box>
              <Text className="interior-project-title">MoodBoards</Text>
            </Box>
            <Box className="interior-project-subtitle-box">
              <Text className="interior-project-subtitle">Coming soon</Text>
            </Box>
          </Stack>
        </Box>
        <Stack justifyContent="center" alignItems="center">
          <a href="/">
            <Box mt={10} mb={10} className="logo-border" p={2}>
              <Image
                src={logo}
                width="320px"
                height="320px"
                objectFit="cover"
                alt="Cara Dear One Logo"
                className="diary-logo-img"
              />
            </Box>
          </a>
        </Stack>

        <Box mt={5} mb={5}>
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={5}
            direction="row"
          >
            <Box>
              <ImPinterest2 fontSize={18} color="#d9a563" />
            </Box>
            <Box>
              <ImInstagram fontSize={18} color="#d9a563" />
            </Box>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default diaryMoodBoard;
