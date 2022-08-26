import React from "react";
// import Image from "next/image";

//Import FORM HANDLER
import { useForm, ValidationError } from "@formspree/react";

import {
  Box,
  Text,
  HStack,
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

//------ IMPORT COMPONENTS
import Navbar from "../components/NavbarOther";

const contact = () => {
  //FORM HANDLER on submit
  const [state, handleSubmit] = useForm("mzboykqn");
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
                  <Text className="contact-subtitle" width={"13rem"}>
                    Let's chat about your future memories
                  </Text>
                </Box>
              </Stack>
            </Container>
            <Box className="contact-full-form-border">
              <FormControl
                className="contact-full-form"
                method="post"
                onSubmit={handleSubmit}
                px={10}
                mt={10}
              >
                <FormLabel className="contact-full-form-text-container" mt={2}>
                  Name
                </FormLabel>
                <Input
                  className="contact-full-form-name-input"
                  placeholder=" e.g Joe Tatcher"
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

                <FormLabel className="contact-full-form-text-container" mt={2}>
                  Email
                </FormLabel>
                <Input
                  className="contact-full-form-email-input"
                  placeholder="e.g joetatcher@test.net"
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

                <FormLabel className="contact-full-form-text-container" mt={6}>
                  Select your Project
                </FormLabel>
                <RadioGroup defaultValue="InteriorProject">
                  <HStack spacing="24px">
                    <Radio
                      value="InteriorProject"
                      className="contact-full-form-projects-text"
                    >
                      Interior Project
                    </Radio>
                    <Radio
                      value="CommercialProject"
                      className="contact-full-form-projects-text"
                    >
                      Commercial Project
                    </Radio>
                    <Radio
                      value="HomeStaging"
                      className="contact-full-form-projects-text"
                    >
                      Home Staging Project
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormHelperText className="contact-full-form-email-input">
                  Select at least one
                </FormHelperText>

                <FormLabel className="contact-full-form-text-container" mt={6}>
                  Message
                </FormLabel>
                <Textarea
                  className="contact-full-form-textarea-input"
                  placeholder="Type your message here"
                  id="message"
                  name="message"
                />

                <Box my={4}>
                  <button
                    className=" btn-discovery-call"
                    type="submit"
                    disabled={state.submitting}
                  >
                    send
                  </button>
                </Box>
              </FormControl>
            </Box>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default contact;
