import { Flex, Box, Button, Highlight, Text } from "@chakra-ui/react";
import React from "react";

interface SkillGageProps {
  name: string;
}

function SkillGage({ name }: SkillGageProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between" w="450px">
      <Box
        borderRadius="full"
        fontSize="16px"
        lineHeight="24px"
        fontWeight="bold"
        border="2px"
        p="6px 16px"
        color="white"
        borderColor="secondary">
        {name}
      </Box>
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
