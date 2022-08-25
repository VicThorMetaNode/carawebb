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
  HStack,
  Stack,
} from "@chakra-ui/react";

//-------------- Import ICONS --------------
import { GoThreeBars } from "react-icons/go";
import { ImPinterest2, ImInstagram } from "react-icons/im";
import { BiMinus, BiPlus } from "react-icons/bi";
const NavbarOther = () => {
  //TOGGLE
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <nav>
        <Box className="navbar">
          <Flex>
            <HStack spacing="3px">
              <Box ml={3}>
                <Text className="landing-page-navbar-logo-partOne">cara.</Text>
              </Box>
              <Box>
                <Text className="landing-page-navbar-logo-partTwo">
                  - interior design
                </Text>
              </Box>
            </HStack>

            <Spacer />
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="transparent"
                  color="#000000"
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
                          onClick={() => setShowMore(!showMore)}
                        >
                          {showMore ? (
                            <BiMinus fontSize={28} className="icon-minus" />
                          ) : (
                            <BiPlus fontSize={28} className="icon-plus" />
                          )}
                        </button>
                      </Box>
                      <MenuGroup
                        title="SERVICES"
                        className="menuGroup nav-menu-main-item"
                      >
                        {showMore && (
                          <>
                            {" "}
                            <MenuItem
                              justifyContent="right"
                              alignItems="right"
                              className="nav-menu-secondary-item"
                            >
                              <Link href="/interiorsProjects">
                                interior projects
                              </Link>
                            </MenuItem>
                            <MenuItem
                              justifyContent="right"
                              alignItems="right"
                              textAlign={"right"}
                              className="nav-menu-secondary-item"
                              mb={3}
                            >
                              <Link href="/otherProjects">
                                commercial projects & home staging
                              </Link>
                            </MenuItem>{" "}
                          </>
                        )}
                      </MenuGroup>
                    </Stack>
                    <MenuItem
                      justifyContent="right"
                      alignItems="right"
                      className="nav-menu-main-item"
                    >
                      <Link href="/about"> VISUAL DIARY</Link>
                    </MenuItem>
                    <MenuItem
                      justifyContent="right"
                      alignItems="right"
                      mb={4}
                      className="nav-menu-main-item"
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
                      <Box>
                        <ImPinterest2 fontSize={15} />
                      </Box>
                      <Box>
                        <ImInstagram fontSize={15} />
                      </Box>
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

export default NavbarOther;
