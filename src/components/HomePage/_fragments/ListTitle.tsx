import { Flex, Box, Button, Highlight, Text } from "@chakra-ui/react";
import React from "react";

interface ListTitleProps {
  name: string;
  query: string;
}

function ListTitle({ name, query }: ListTitleProps) {
  return (
    <Flex direction="column" gap="40px">
      <Text color="white" fontSize="36px" fontWeight="bold">
        <Highlight
          query={query}
          styles={{ py: "1", fontSize: "24px", color: "primary" }}>
          {name}
        </Highlight>
      </Text>
      <Text fontSize="24px" w="581px" color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        condimentum placerat amet urna facilisis semper. Platea a, cras massa
        imperdiet elit ut. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Purus condimentum placerat amet urna facilisis semper. Platea a,
        cras massa imperdiet elit ut.Lorem ipsum dolor sit amet, consectetur
        <br />
        <br />
        adipiscing elit. Purus semper. Platea a, cras massa imperdiet elit ut.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        condimentum placerat amet urna facilisis semper. Platea a, cras massa
        imperdiet elit ut.
      </Text>
    </Flex>
  );
}

export default ListTitle;
