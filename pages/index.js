// ------------------ HOME PAGE -------------------
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
//-------------- BROWSER  -----------
export default function Home() {
  return (
    <>
      <section className="landing-page">
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
                <MenuButton as={Button}>
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
            <button className="btn-contact">CONTACT</button>
          </Box>
        </Box>
      </section>
    </>
  );
}
