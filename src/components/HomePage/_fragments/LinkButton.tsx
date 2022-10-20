import { Flex, Box, Button, Highlight, Text } from "@chakra-ui/react";
import React from "react";

// interface LinkButtonProps {}

function LinkButton(props:any) {
  return (
    <Button bg="white" p="24px 56px" borderRadius="full" {...props}></Button>
  );
}

export default LinkButton;
