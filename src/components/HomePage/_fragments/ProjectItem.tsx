import { Flex,Image, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Github } from "../../../../public/icons/Github";
import RoundName from "./RoundName";

interface ProjectItemProps {}

function ProjectItem(props: ProjectItemProps) {
  return (
    <Flex gap="20px" alignItems="center">
      <Image w="580px" h="384px" alt="demoImage" src="/images/sample.png" />
      <Flex direction="column" w="580px" gap="20px">
        <Flex direction="column">
          <Text color="primary" fontWeight="bold" fontSize="16px">
            React
          </Text>
          <Flex
            fontSize="36px"
            fontWeight="bold"
            alignItems="center"
            gap="10px">
            <Text color="white">Project Title</Text>
            <IconButton
              variant="link"
              aria-label="githubIcon"
              icon={<Github />}
            />
          </Flex>
        </Flex>
        <Text color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          condimentum placerat amet urna facilisis semper. Platea a, cras massa
          imperdiet elit ut.
        </Text>
        <Flex gap="14px">
          <RoundName name="React" />
          <RoundName name="Chakra-ui" />
          <RoundName name="Next.js" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProjectItem;
