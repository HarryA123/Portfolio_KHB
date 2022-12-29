import { Flex, Image, Box, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Github } from "../../../../public/icons/Github";

interface ProjectItemProps {
  link: string;
  mainSkill: string;
  image: string;
  title: string;
  github: string;
  description: string;
}
function ProjectItem({
  github,
  mainSkill,
  title,
  image,
  description,
  link,
}: ProjectItemProps) {
  return (
    <Flex gap="20px">
      <Link href={link}>
        <Box
          cursor="pointer"
          w="580px"
          h="384px"
          backgroundColor="primary"
          backgroundBlendMode="multiply"
          backgroundSize="cover"
          backgroundImage={image}
          backgroundPosition="left"
          transition="all 0.5s ease-in-out"
          _hover={{
            backgroundColor: "white",
          }}
        />
      </Link>
      <Flex direction="column" w="580px" gap="20px">
        <Flex direction="column">
          <Text color="secondary" fontWeight="bold" fontSize="16px">
            {mainSkill}
          </Text>
          <Flex fontSize="36px" fontWeight="bold" gap="10px">
            <Text color="white">{title}</Text>
            <Link href={github}>
              <IconButton
                size="lg"
                color="white"
                _hover={{ color: "primary", transform: "scale(1.3)" }}
                variant="link"
                aria-label="githubIcon"
                icon={<Github />}
              />
            </Link>
          </Flex>
        </Flex>
        <Text color="gray.300" fontSize="24px">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProjectItem;
