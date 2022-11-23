import { Flex, Box, Button, Highlight, Text } from "@chakra-ui/react";
import RoundName from "./RoundName";
import React from "react";

interface SkillGageProps {
  name: string;
  gage: number;
}

function SkillGage({ name, gage }: SkillGageProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between" w="450px">
      <RoundName name={name} />
      <Box w="300px" bgColor="gray.700">
        <Box w={gage * 8} bg="primary" h="16px" />
      </Box>
    </Flex>
  );
}

export default SkillGage;
