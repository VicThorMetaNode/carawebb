import React from "react";
import Link from "next/link";
//Import FORM HANDLER
import { useForm, ValidationError } from "@formspree/react";

import {
  Box,
  HStack,
  VStack,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const Form = () => {
  //FORM HANDLER on submit
  const [state, handleSubmit] = useForm("xdojevwp");
  if (state.succeeded) {
    return (
      <>
        <VStack
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          borderRadius="25px"
          mt={7}
        >
          <Box m={5} p={2}>
            <Container
              textAlign="center"
              fontSize="2rem"
              textTransform="uppercase"
              fontWeight="400"
              color="#000000"
            >
              {" "}
              Message Sent !{" "}
            </Container>
          </Box>
          <Box p={2}>
            <Container
              color="#000000"
              textAlign="center"
              fontSize="1.1rem"
              fontWeight="100"
              mb={7}
            >
              Thank you for contacting me !
            </Container>
          </Box>
          <Link href="/">
            <button className=" btn-readMore">Back Home</button>
          </Link>
        </VStack>
      </>
    );
  }
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <FormControl className="contact-full-form">
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
          <ValidationError prefix="Name" field="name" errors={state.errors} />

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
          <ValidationError prefix="Email" field="email" errors={state.errors} />

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
            Select one
          </FormHelperText>

          <FormLabel className="contact-full-form-text-container" mt={6}>
            Select the type of Project
          </FormLabel>
          <RadioGroup defaultValue="OnSite">
            <HStack spacing="24px">
              <Radio value="OnSite" className="contact-full-form-projects-text">
                On Site
              </Radio>
              <Radio value="Remote" className="contact-full-form-projects-text">
                Remote
              </Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText className="contact-full-form-email-input">
            Select one
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
      </form>
    </>
  );
};

export default Form;
