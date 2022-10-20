import { Flex, Button, Highlight, Text } from "@chakra-ui/react";
import React from "react";
import { Blog } from "../../../public/icons/Blog";
import { Email } from "../../../public/icons/Email";
import { Github } from "../../../public/icons/Github";
import { Phone } from "../../../public/icons/Phone";

function HomeHeader() {
  return (
    <Flex
      h="60px"
      bg="black"
      alignItems="center"
      px="100px"
      justifyContent="space-between">
      <Flex gap="40px">
        <Text color="white">
          <Highlight query="01." styles={{ py: "1", color: "primary" }}>
            01.ABOUT ME
          </Highlight>
        </Text>
        <Text color="white">
          <Highlight query="02." styles={{ py: "1", color: "primary" }}>
            02.WORKS
          </Highlight>
        </Text>
        <Button
          w="75px"
          h="28px"
          bg="secondary"
          color="white"
          borderRadius="full"
          fontSize="14px"
          fontWeight="400">
          RESUME
        </Button>
      </Flex>
      <Flex gap="40px">
        <Email />
        <Phone />
        <Github />
        <Blog />
      </Flex>
    </Flex>
  );
}

export default HomeHeader;
