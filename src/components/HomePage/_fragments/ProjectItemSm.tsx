import { Flex, Image, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Github } from "../../../../public/icons/Github";

interface ProjectItemSmProps {}

function ProjectItemSm(props: ProjectItemSmProps) {
  return (
    <Flex gap="20px" w="380px" direction="column">
      <Image alt="demoImage" src="/images/sample.png" />
      <Flex direction="column" gap="20px">
        <Flex fontSize="28px" fontWeight="bold" alignItems="center" gap="10px">
          <Text color="white">Project Title</Text>
          <IconButton
            variant="link"
            aria-label="githubIcon"
            icon={<Github />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProjectItemSm;
