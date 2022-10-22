import { Flex, Box, Button, Highlight, Text } from "@chakra-ui/react";
import RoundName from "./RoundName";
import React from "react";

interface SkillGageProps {
  name: string;
}

function SkillGage({ name }: SkillGageProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between" w="450px">
      <RoundName name={name}/>
      <Flex gap="4px">
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="primary" boxSize="16px" />
        <Box bg="gray.200" boxSize="16px" />
        <Box bg="gray.200" boxSize="16px" />
        <Box bg="gray.200" boxSize="16px" />
        <Box bg="gray.200" boxSize="16px" />
        <Box bg="gray.200" boxSize="16px" />
      </Flex>
    </Flex>
  );
}

export default SkillGage;
