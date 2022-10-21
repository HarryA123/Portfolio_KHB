import { Flex, Highlight, Text } from "@chakra-ui/react";
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
    </Flex>
  );
}

export default ListTitle;
