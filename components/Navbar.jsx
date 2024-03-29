import React, { useState } from "react";
import Link from "next/link";
import {
  Spacer,
  Box,
  Text,
  Flex,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  MenuGroup,
  Divider,
  Stack,
} from "@chakra-ui/react";

//-------------- Import ICONS --------------
import { GoThreeBars } from "react-icons/go";
import { ImInstagram } from "react-icons/im";
import { BiMinus, BiPlus } from "react-icons/bi";
const Navbar = () => {
  //TOGGLE
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [showMoreDiary, setShowMoreDiary] = useState(false);
  return (
    <>
      <nav>
        <Box className="navbar-transparent">
          <Flex>
            <Box mt={3}>
              <a href="/">
                <Stack
                  spacing="3px"
                  justifyContent="center"
                  alignItems="center"
                  direction="row"
                >
                  <Box ml={3}>
                    <Text className="landing-page-navbar-logo-partOne">
                      cara.
                    </Text>
                  </Box>
                  <Box>
                    <Text className="landing-page-navbar-logo-partTwo">
                      - interior design
                    </Text>
                  </Box>
                </Stack>
              </a>
            </Box>
            <Spacer />
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="transparent"
                  color="#DAD1BE"
                  transition="all 0.5s"
                  _hover={{ color: "#000000" }}
                  _expanded={{ bg: "transparent", color: "#fff" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <GoThreeBars />
                </MenuButton>
                <Box className="nav-menu-section">
                  <MenuList bg="#322F28" color="#A6A6A6">
                    <MenuItem
                      justifyContent="right"
                      alignItems="right"
                      mt={2}
                      className="nav-menu-main-item"
                      _focus={{ bg: "transparent", color: "#fff" }}
                      _hover={{ bg: "#A6A6A6" }}
                    >
                      <Link href="/about">ABOUT</Link>
                    </MenuItem>

                    <Stack
                      direction="row"
                      justifyContent="right"
                      alignItems="right"
                    >
                      <Box>
                        <button
                          className=" btn-menu-plus"
                          onClick={() => setShowMoreServices(!showMoreServices)}
                        >
                          {showMoreServices ? (
                            <BiMinus
                              fontSize={28}
                              className="services-icon-minus"
                            />
                          ) : (
                            <BiPlus
                              fontSize={28}
                              className="services-icon-plus"
                            />
                          )}
                        </button>
                      </Box>
                      <MenuGroup
                        title="our SERVICES"
                        className="menuGroup nav-menu-main-item"
                      >
                        {showMoreServices && (
                          <>
                            {" "}
                            <MenuItem
                              justifyContent="right"
                              alignItems="right"
                              className="nav-menu-secondary-item"
                              _focus={{ bg: "transparent", color: "#fff" }}
                              _hover={{ bg: "#A6A6A6" }}
                            >
                              <Link href="/interiorProjects">
                                interior projects
                              </Link>
                            </MenuItem>
                            {/* <MenuItem
                              justifyContent="right"
                              alignItems="right"
                              textAlign={"right"}
                              className="nav-menu-secondary-item"
                              mb={3}
                              _focus={{ bg: "transparent", color: "#fff" }}
                              _hover={{ bg: "#A6A6A6" }}
                            >
                              <Link href="/commercialProjects">
                                home staging & commercial events
                              </Link>
                            </MenuItem>{" "} */}
                          </>
                        )}
                      </MenuGroup>
                    </Stack>

                    <Stack
                      direction="row"
                      justifyContent="right"
                      alignItems="right"
                    >
                      <Box>
                        <button
                          className=" btn-menu-plus"
                          onClick={() => setShowMoreDiary(!showMoreDiary)}
                        >
                          {showMoreDiary ? (
                            <BiMinus
                              fontSize={28}
                              className="diary-icon-minus"
                            />
                          ) : (
                            <BiPlus fontSize={28} className="diary-icon-plus" />
                          )}
                        </button>
                      </Box>
                      <MenuGroup
                        title="visual diary"
                        className="menuGroup nav-menu-main-item"
                      >
                        {showMoreDiary && (
                          <>
                            {" "}
                            <MenuItem
                              justifyContent="right"
                              alignItems="right"
                              className="nav-menu-secondary-item"
                              _focus={{ bg: "transparent", color: "#fff" }}
                              _hover={{ bg: "#A6A6A6" }}
                            >
                              <Link href="/diaryProjects">projects</Link>
                            </MenuItem>
                            <MenuItem
                              justifyContent="right"
                              alignItems="right"
                              textAlign={"right"}
                              className="nav-menu-secondary-item"
                              mb={3}
                              _focus={{ bg: "transparent", color: "#fff" }}
                              _hover={{ bg: "#A6A6A6" }}
                            >
                              <Link href="/diaryMoodBoards">moodboards</Link>
                            </MenuItem>{" "}
                          </>
                        )}
                      </MenuGroup>
                    </Stack>

                    <MenuItem
                      justifyContent="right"
                      alignItems="right"
                      mb={4}
                      className="nav-menu-main-item"
                      _focus={{ bg: "transparent", color: "#fff" }}
                      _hover={{ bg: "#A6A6A6" }}
                    >
                      <Link href="/contact"> CONTACT US</Link>
                    </MenuItem>

                    <Divider />
                    <Stack
                      justifyContent="right"
                      alignItems="right"
                      direction="row"
                      margin={2}
                      padding={1}
                    >
                      <Link href="https://www.instagram.com/caradearone/">
                        <Box>
                          <ImInstagram fontSize={15} />
                        </Box>
                      </Link>
                    </Stack>
                  </MenuList>
                </Box>
              </Menu>
            </Box>
          </Flex>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
