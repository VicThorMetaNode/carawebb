import React from "react";
// import Image from "next/image";

import { Box, Text, Container, Stack, Icon, Flex } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";
import Form from "../components/Form";

//-------------- Import ICONS
import { BsSuitHeartFill } from "react-icons/bs";

const contact = () => {
  return (
    <>
      <section className="contact-page-section">
        <nav>
          <Navbar />
        </nav>
        <Box className="contact-page-container" mt={10}>
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Container>
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Box className="contact-title-box">
                  <Text className="contact-title">Contact</Text>
                </Box>

                <Box className="contact-subtitle-box">
                  <Flex>
                    <Text className="contact-subtitle" width={"13rem"}>
                      Let's chat about your future memories
                    </Text>
                    <Box mt={"1.9rem"} ml={"-15px"}>
                      <Icon
                        as={BsSuitHeartFill}
                        boxSize="1rem"
                        color="#000000"
                      />
                    </Box>
                  </Flex>
                </Box>
              </Stack>
            </Container>

            <Box>
              <Form />
            </Box>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default contact;
