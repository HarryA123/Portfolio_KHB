import {
  Flex,
  Box,
  Image,
  Button,
  Highlight,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
// import gsap from "gsap/dist/gsap";
import React from "react";
import { Email } from "../../../public/icons/Email";
import { Phone } from "../../../public/icons/Phone";
import ProjectItem from "./_fragments/ProjectItem";
import { Blog } from "../../../public/icons/Blog";
import LinkButton from "./_fragments/LinkButton";
import ScrambleText from "./ScrambleText";
import SkillBox from "./_fragments/SkillBox";
import ListTitle from "./_fragments/ListTitle";
import { Github } from "../../../public/icons/Github";
import RoundName from "./_fragments/RoundName";
import ProjectItemSm from "./_fragments/ProjectItemSm";
import { UpPage } from "../../../public/icons/UpPage";

function HomePage() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Flex id="container_1" pos="relative" bg="background" h="100vh">
        <Flex
          direction="column"
          fontWeight="bold"
          fontFamily="RobotoMono"
          m="450px auto">
          <Text color="white" fontSize="60px" mb="10px">
            hello I’m Harry Kwak
          </Text>
          <Text color="primary" fontSize="60px">
            Frontend-Developer
          </Text>
          <LinkButton mt="146px">WOKRS</LinkButton>
        </Flex>
        <Box pos="absolute" px="700" top="30%">
          <ScrambleText
            color="secondary"
            phrases={["Nice to meet you"]}
            delay={500}></ScrambleText>
        </Box>
        <Box pos="absolute" right="700px" top="40%">
          <ScrambleText
            color="secondary"
            phrases={["Wanna hire me?"]}
            delay={800}></ScrambleText>
        </Box>
        <Box pos="absolute" px="1100px" top="65%">
          <ScrambleText
            color="secondary"
            phrases={["Let's Go!"]}
            delay={1000}></ScrambleText>
        </Box>
      </Flex>
      <Flex
        id="container_2"
        pos="relative"
        bg="black"
        h="100vh"
        justifyContent="center"
        gap="20px"
        alignItems="center">
        <Flex direction="column">
          <ListTitle name="01. ABOUT" query="01." />
          <Text fontSize="24px" w="581px" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            condimentum placerat amet urna facilisis semper. Platea a, cras
            massa imperdiet elit ut. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Purus condimentum placerat amet urna facilisis
            semper. Platea a, cras massa imperdiet elit ut.Lorem ipsum dolor sit
            amet, consectetur
            <br />
            <br />
            adipiscing elit. Purus semper. Platea a, cras massa imperdiet elit
            ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            condimentum placerat amet urna facilisis semper. Platea a, cras
            massa imperdiet elit ut.
          </Text>
        </Flex>
        <SkillBox />
      </Flex>
      <Flex
        id="container_3"
        pos="relative"
        bg="background"
        justifyContent="center"
        gap="20px"
        alignItems="center">
        <Flex direction="column" id="workComponent" gap="50px" my="232px">
          <ListTitle name="03. WORKS" query="03." />
          <Flex direction="column" id="ProjectList" gap="240px">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <Flex gap="20px">
              <ProjectItemSm />
              <ProjectItemSm />
              <ProjectItemSm />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="container_3"
        pos="relative"
        bg="background"
        h="500px"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        direction="column">
        <IconButton
          onClick={scrollToTop}
          variant="link"
          aria-label="githubIcon"
          icon={<UpPage />}
        />
        <Text color="secondary" fontSize="40px">
          Thank You!
        </Text>
      </Flex>
    </>
  );
}

export default HomePage;
