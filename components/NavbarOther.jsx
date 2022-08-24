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
                <MenuList bg="#322F28" color="#A6A6A6">
                  <MenuGroup>
                    <MenuItem justifyContent="right" alignItems="right" mt={2}>
                      <Link href="/about">ABOUT</Link>
                    </MenuItem>
                    <MenuItem justifyContent="right" alignItems="right">
                      <Stack direction="row">
                        <Box>
                          <button
                            className=" btn-menu-plus"
                            onClick={() => setShowMore(!showMore)}
                          >
                            {showMore ? <p>-</p> : <p>+</p>}{" "}
                          </button>
                        </Box>
                        <Box>
                          <Link href="/about"> SERVICES</Link>
                        </Box>
                      </Stack>
                    </MenuItem>
                    <MenuItem justifyContent="right" alignItems="right">
                      <Link href="/about"> VISUAL DIARY</Link>
                    </MenuItem>
                    <MenuItem justifyContent="right" alignItems="right" mb={4}>
                      <Link href="/contact"> CONTACT US</Link>
                    </MenuItem>
                  </MenuGroup>
                  <Divider />
                  <Stack
                    justifyContent="right"
                    alignItems="right"
                    direction="row"
                    margin={2}
                    padding={1}
                  >
                    <Box>
                      <ImPinterest2 />
                    </Box>
                    <Box>
                      <ImInstagram />
                    </Box>
                  </Stack>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Box>
      </nav>
    </>
  );
};

export default NavbarOther;
