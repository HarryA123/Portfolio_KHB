import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

function LinkButton({ ...props }: ButtonProps) {
  return (
    <Button
      bg="white"
      p="24px 56px"
      borderRadius="full"
      m="auto"
      {...props}></Button>
  );
}

export default LinkButton;
