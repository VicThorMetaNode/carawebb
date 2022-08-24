import React from "react";
// import Image from "next/image";

import {
  Box,
  Text,
  HStack,
  Container,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
} from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";

const contact = () => {
  return (
    <>
      <section className="contact-page-section">
        <Navbar />
        <Box>
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
                  <Text className="contact-subtitle">
                    Let's chat about your future memories
                  </Text>
                </Box>
              </Stack>
            </Container>
            <Box>
              <form
                className="contact-full-form"
                method="post"
                onSubmit={handleSubmit}
              >
                <FormLabel className="contact-full-form-text-container">
                  Name
                </FormLabel>
                <Input
                  className="contact-full-form-name-input"
                  placeholder=" e.g Alex Smith"
                  type="string"
                  id="name"
                  name="name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                <FormLabel className="contact-full-form-text-container">
                  Email
                </FormLabel>
                <Input
                  className="contact-full-form-email-input"
                  placeholder="e.g alexsmith@test.net"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <FormLabel className="contact-full-form-projects-container">
                  Select your Project
                </FormLabel>
                <RadioGroup defaultValue="InteriorProject">
                  <HStack spacing="24px">
                    <Radio value="InteriorProject">Interior Project</Radio>
                    <Radio value="CommercialProject">Commercial Project</Radio>
                    <Radio value="HomeStaging">Home Staging Project</Radio>
                  </HStack>
                </RadioGroup>
                <FormHelperText>Select at least one</FormHelperText>

                <FormLabel className="contact-full-form-projects-container">
                  Message
                </FormLabel>
                <Textarea
                  className="contact-full-form-email-input"
                  placeholder="Type your message here"
                  id="message"
                  name="message"
                />

                <Button
                  className="contact-full-form-send-btn"
                  textTransform="uppercase"
                  m={3}
                  type="submit"
                  disabled={state.submitting}
                >
                  SEND
                </Button>
              </form>
            </Box>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default contact;
