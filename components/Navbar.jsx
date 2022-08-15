import React from "react";
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
  Divider,
  HStack,
} from "@chakra-ui/react";

//-------------- Import ICONS --------------
import { GoThreeBars } from "react-icons/go";
import { ImPinterest2, ImInstagram } from "react-icons/im";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
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
                _hover={{ color: "#000000" }}
                _expanded={{ bg: "transparent", color: "#fff" }}
                _focus={{ boxShadow: "none" }}
              >
                <GoThreeBars />
              </MenuButton>
              <MenuList bg="#000000" color="#A6A6A6">
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>SERVICES</MenuItem>
                <MenuItem>Visual Diary</MenuItem>
                <MenuItem>Contact us</MenuItem>
                <Divider />
                <HStack>
                  <Box>
                    <ImPinterest2 />
                  </Box>
                  <Box>
                    <ImInstagram />
                  </Box>
                </HStack>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;
