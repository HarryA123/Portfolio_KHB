import { Flex, Link, Box, Text, IconButton } from "@chakra-ui/react";
// import gsap from "gsap/dist/gsap";
import React from "react";
import ProjectItem from "./_fragments/ProjectItem";
import LinkButton from "./_fragments/LinkButton";
import ScrambleText from "./ScrambleText";
import SkillBox from "./_fragments/SkillBox";
import ListTitle from "./_fragments/ListTitle";

import { UpPage } from "../../../public/icons/UpPage";

function HomePage() {
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
          <Link href="#container_3" margin="auto">
            <LinkButton mt="146px">WOKRS</LinkButton>
          </Link>
        </Flex>
        <Box pos="absolute" left="500px" top="30%">
          <ScrambleText
            color="secondary"
            phrases={["Nice to meet you"]}
            delay={500}></ScrambleText>
        </Box>
        <Box pos="absolute" right="500px" top="40%">
          <ScrambleText
            color="secondary"
            phrases={["Wanna hire me?"]}
            delay={800}></ScrambleText>
        </Box>
        <Box pos="absolute" left="1100px" top="65%">
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
        <Flex direction="column" gap="50px">
          <ListTitle name="01. Tech Stack" query="01." />
          <SkillBox />
        </Flex>
      </Flex>
      <Flex
        id="container_3"
        pos="relative"
        bg="background"
        justifyContent="center"
        gap="20px"
        alignItems="center">
        <Flex direction="column" id="workComponent" gap="50px" my="150px">
          <ListTitle name="03. Works" query="03." />
          <Flex direction="column" id="ProjectList" gap="240px">
            {PROJECT.map(item => {
              return (
                <ProjectItem
                  key={item.title}
                  mainSkill={item.mainSkill}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  github={item.github}
                  description={item.description}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="container_3"
        pos="relative"
        bg="background"
        h="300px"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        direction="column">
        <Flex direction="column" justifyContent="center">
          <Link href="#" margin="auto">
            <IconButton
              variant="link"
              aria-label="githubIcon"
              icon={<UpPage />}
            />
          </Link>
          <Text color="secondary" fontSize="40px">
            Thank You!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;

const PROJECT = [
  // {
  //   mainSkill: "React.js",
  //   title: "news",
  //   image: "/images/sample.png",
  //   link: "https://react-news-mu.vercel.app/",
  //   github: "https://github.com/HarryA123/React-ToyProjects/tree/main/news",
  //   description:
  //     "Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types. With a controlled component, the input’s value is always driven by the t handlers.",
  // },
  {
    mainSkill: "React",
    title: "Movit",
    image: "url(/images/movit_1.png)",
    link: "https://portfolio-harrya123.vercel.app/",
    github:
      "https://github.com/HarryA123/React-ToyProjects/tree/main/movie-app",
    description:
      "Movit은 내가 본 영화들을 기록하는 앱 입니다. 내가 기록한 영화들만 모아서 보고, 키워드 검색을 통해 내가 원하는 영화를 찾을 수 있으며 클릭 시 시놉시스 같은 상세한 영화 정보를 볼 수 있습니다. React, react-router-dom, Axios, Redux toolkit, styled-components를 사용한 1인 프로젝트입니다.",
  },
  // {
  //   mainSkill: "React.js",
  //   title: "blog",
  //   image: "/images/sample.png",
  //   link: "https://blog-delta-olive.vercel.app/",
  //   github: "https://github.com/HarryA123/React-ToyProjects/tree/main/blog",
  //   description:
  //     "Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to uy the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.",
  // },
];
