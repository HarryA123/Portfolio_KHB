import { Box } from "@chakra-ui/react";
import React from "react";

interface SkillGageProps {
  name: string;
}

function RoundName({ name }: SkillGageProps) {
  return (
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
  );
}

export default RoundName;
