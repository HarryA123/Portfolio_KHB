import { Flex, Image, Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { Github } from "../../../../public/icons/Github";
import RoundName from "./RoundName";

interface ProjectItemProps {
  link: string;
  mainSkill: string;
  title: string;
  github: string;
  description: string;
}
function ProjectItem({
  github,
  mainSkill,
  title,
  description,
  link,
}: ProjectItemProps) {
  return (
    <Flex gap="20px" alignItems="center">
      <Link href={link}>
        <a>
          {/* <Icon></Icon> */}
          <Box
            cursor="pointer"
            w="580px"
            h="384px"
            background="linear-gradient(0deg, rgba(0, 215, 112, 0.7), rgba(0, 215, 112, 0.7)), url(/images/sample.png)"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundBlendMode="multiply"
            _hover={{
              bg: "url(/images/sample.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </a>
      </Link>
      <Flex direction="column" w="580px" gap="20px">
        <Flex direction="column">
          <Text color="secondary" fontWeight="bold" fontSize="16px">
            {mainSkill}
          </Text>
          <Flex fontSize="36px" fontWeight="bold" gap="10px">
            <Text color="white">{title}</Text>
            <Link href={github}>
              <a>
                <IconButton
                  color="white"
                  _hover={{ color: "primary", transform: "scale(1.3)" }}
                  variant="link"
                  aria-label="githubIcon"
                  icon={<Github />}
                />
              </a>
            </Link>
          </Flex>
        </Flex>
        <Text color="gray.300" fontSize="24px">
          {description}
        </Text>
        {/* <Flex gap="14px">
          <RoundName name="React" />
          <RoundName name="Chakra-ui" />
          <RoundName name="Next.js" />
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default ProjectItem;
