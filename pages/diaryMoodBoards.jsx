import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, Stack } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";

import logo from "../dist/images/logo.png";
//-------------- Import ICONS --------------

import { ImInstagram } from "react-icons/im";

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

            <Box className="interior-project-text-box">
              <Text className="interior-project-text" width={"22rem"}>
                An arrangement of images, materials, pieces of text, etc.
                intended to evoke or project a particular style or concept.
              </Text>
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
            <Link href="https://www.instagram.com/caradearone/">
              <Box>
                <ImInstagram fontSize={18} color="#d9a563" />
              </Box>
            </Link>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default diaryMoodBoard;
