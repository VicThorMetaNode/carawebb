import React, { useState } from "react";
import Image from "next/image";

import { Box, Text, Container, Stack } from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";
import aboutPict from "../dist/images/augustine-wong-T0BYurbDK_M-unsplash.jpg";

const otherProjects = () => {
  return (
    <>
      <section className="other-project-page-section">
        <nav>
          <Navbar />
        </nav>

        <Box mt={10} className="interior-project-container">
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Box className="other-project-title-box">
              <Text className="interior-project-title"> our services</Text>
            </Box>
            <Box className="interior-project-subtitle-box">
              <Text
                className="interior-project-subtitle"
                width={["13rem", "13rem", "auto"]}
              >
                commercial projects & home staging
              </Text>
            </Box>
            <Box className="interior-project-text-box">
              <Text
                className="interior-project-text"
                width={["17rem", "22rem", "auto"]}
              >
                We design your interior to bring new perspectives and an
                aesthetic look.
              </Text>
            </Box>
          </Stack>

          <Box mt={6} className="interior-project-swipe-section">
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Box>
                <Box
                  width="350px"
                  height="370px"
                  className="project-swiper-div spacer-other-projet"
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Box mt={10}>
                      <Text className="project-swiper-title" mb={4}>
                        commercial projects
                      </Text>
                      <Container className="project-swiper-text" px={10}>
                        We decorate, rearrange furniture to showcase
                        restaurants, lobbies and retail spaces
                      </Container>
                    </Box>
                  </Stack>
                </Box>

                <Box
                  width="350px"
                  height="400px"
                  className="project-swiper-div spacer-other-projet"
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Box mt={10}>
                      <Text className="project-swiper-title" mb={4}>
                        home <br /> staging
                      </Text>
                      <Container className="project-swiper-text" px={10}>
                        We clean, decorate rearrange furniture, and use
                        aesthetic strategies to present your home in the best
                        possible way. If you are looking to sell your place,
                        this is exactly what you need.
                      </Container>
                    </Box>
                  </Stack>
                </Box>
                <section className="interior-project-bottom-section">
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    mb={10}
                  >
                    <Box className="interior-project-bottom-text-section">
                      <Text
                        className="interior-project-bottom-textOne"
                        width={"15rem"}
                      >
                        Reach out for a free discovery call to discuss your
                        needs.
                      </Text>
                    </Box>
                    <Box className="interior-project-bottom-button-box">
                      <button className=" btn-discovery-call">
                        discovery call
                      </button>
                    </Box>
                    <Box>
                      <Text className="interior-project-bottom-textTwo">
                        projects can be done remotely if desired*
                      </Text>
                    </Box>
                  </Stack>
                </section>
              </Box>
            </Stack>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default otherProjects;
