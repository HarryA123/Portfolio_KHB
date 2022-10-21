import { Flex, Button, Highlight, Text } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";
import Link from "next/link";
import { Blog } from "../../../public/icons/Blog";
import { Email } from "../../../public/icons/Email";
import { Github } from "../../../public/icons/Github";
import { Phone } from "../../../public/icons/Phone";

interface HomeHeaderProps {}

function HomeHeader(props: HomeHeaderProps) {
  const [emailShow, setEmailShow] = useState(false);
  const [phoneShow, setPhoneShow] = useState(false);
  const EmailOpen = () => {
    setEmailShow(!emailShow);
  };
  const PhoneOpen = () => {
    setPhoneShow(!phoneShow);
  };
  return (
    <Flex
      as="header"
      h="80px"
      bg="black"
      alignItems="center"
      px="100px"
      w="100%"
      pos="fixed"
      zIndex="sticky"
      justifyContent="space-between"
      {...props}>
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
        <Text display={!emailShow ? "none" : "inline"} color="primary">
          harryKwak123@gmail.com
        </Text>
        <CopyToClipboard text="harryKwak123@gmail.com">
          <Email
            onClick={EmailOpen}
            color={!emailShow ? "white" : "primary"}
            transform={!emailShow ? "none" : "scale(1.3)"}
            _hover={{ color: "primary", transform: "scale(1.3)" }}
          />
        </CopyToClipboard>
        <Text display={!phoneShow ? "none" : "inline"} color="primary">
          010-3913-4188
        </Text>
        <CopyToClipboard text="01039134188">
          <Phone
            onClick={PhoneOpen}
            color={!phoneShow ? "white" : "primary"}
            transform={!phoneShow ? "none" : "scale(1.3)"}
            _hover={{ color: "primary", transform: "scale(1.3)" }}
          />
        </CopyToClipboard>
        <Link href="https://github.com/HarryA123">
          <Github
            color="white"
            _hover={{ color: "primary", transform: "scale(1.3)" }}
          />
        </Link>
        <Link href="https://study-h.tistory.com/">
          <Blog
            color="white"
            _hover={{ color: "primary", transform: "scale(1.3)" }}
          />
        </Link>
      </Flex>
    </Flex>
  );
}

export default HomeHeader;
