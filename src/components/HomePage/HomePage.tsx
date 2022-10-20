import { Flex, Box, Button, Highlight, Text } from "@chakra-ui/react";
// import gsap from "gsap/dist/gsap";
import React from "react";
import LinkButton from "./_fragments/LinkButton";
import ScrambleText from "./ScrambleText";
import SkillBox from "./_fragments/SkillBox";
import ListTitle from "./_fragments/ListTitle";

function HomePage() {
  return (
    <>
      <Flex
        id="container_1"
        pos="relative"
        bg="background"
        h="calc(100vh - 60px)">
        <Flex direction="column" fontFamily="Roboto Mono" m="auto">
          <Text color="white" fontSize="60px" mb="10px">
            hello I’m Harry Kwak
          </Text>
          <Text color="primary" fontSize="60px">
            Frontend-Developer
          </Text>
          <LinkButton w="100px" m="auto" mt="146px">
            WORKS
          </LinkButton>
        </Flex>
        <Box pos="absolute" px="400" top="15%">
          <ScrambleText
            color="secondary"
            phrases={["Nice to meet you"]}
            delay={500}></ScrambleText>
        </Box>
        <Box pos="absolute" right="400px" top="20%">
          <ScrambleText
            color="secondary"
            phrases={["Wanna hire me?"]}
            delay={800}></ScrambleText>
        </Box>
        <Box pos="absolute" left="800px" top="65%">
          <ScrambleText
            color="secondary"
            phrases={["Let's Go!"]}
            delay={1000}></ScrambleText>
        </Box>
      </Flex>
      <Flex id="container_2" bg="black" h="100vh" justifyContent="center" gap="20px" alignItems="center">
        <ListTitle name="01. ABOUT" query="01." />
        <SkillBox />
      </Flex>
      <Flex id="container_3" bg="red" h="100vh">
        <ListTitle name="03. WORKS" query="03."/>
        HomePageHomePageHomePageHomePageHomePageHom
      </Flex>
    </>
  );
}

export default HomePage;
