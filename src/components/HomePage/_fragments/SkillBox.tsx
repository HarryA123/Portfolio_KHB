import { Flex, Box, Button, Highlight, Text } from "@chakra-ui/react";
import React from "react";
import SkillGage from "./SkillGage";

interface SkillBoxProps {}

function SkillBox(props: SkillBoxProps) {
  return (
    <Flex direction="column" bg="background" gap="54px" p="50px">
      <Flex direction="column" gap="26px">
        <SkillGage name="HTML" />
        <SkillGage name="CSS" />
        <SkillGage name="JavaScript" />
        <SkillGage name="TypeScript" />
        <SkillGage name="React.js" />
        <SkillGage name="Next.js" />
        <SkillGage name="git" />
        <SkillGage name="Figma" />
      </Flex>
      <Flex gap="40px" justifyContent="space-around">
        <Box
          borderRadius="full"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="bold"
          p="6px 16px"
          bg="gray.700"
          color="white">
          Chakra-UI
        </Box>
        <Box
          borderRadius="full"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="bold"
          p="6px 16px"
          bg="gray.700"
          color="white">
          Chakra-UI
        </Box>
        <Box
          borderRadius="full"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="bold"
          p="6px 16px"
          bg="gray.700"
          color="white">
          Continue...
        </Box>
      </Flex>
    </Flex>
  );
}

export default SkillBox;
