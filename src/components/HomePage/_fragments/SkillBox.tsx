import { Flex, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import React from "react";
import SkillGage from "./SkillGage";

function SkillBox() {
  return (
    <Flex direction="column" bg="background" gap="54px" p="50px">
      <Flex direction="column" gap="26px">
        {SKILL.map((item, idx) => {
          return <SkillGage key={idx} name={item.name} gage={item.gage} />;
        })}
      </Flex>
      <Flex justifyContent="space-evenly">
        <Tag size="lg" colorScheme="purple">
          <Avatar
            src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
            size="xs"
            name="Chakra-ui"
            ml={-1}
            mr={2}
          />
          <TagLabel>Chakra-UI</TagLabel>
        </Tag>
        <Tag size="lg" colorScheme="purple">
          <Avatar
            src="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/19ca5/sc.png"
            size="xs"
            name="Chakra-ui"
            ml={-1}
            mr={2}
          />
          <TagLabel>styled-components</TagLabel>
        </Tag>
        <Tag size="lg" colorScheme="purple">
          ...
        </Tag>
      </Flex>
    </Flex>
  );
}

export default SkillBox;

const SKILL = [
  { name: "HTML", gage: 9 },
  { name: "CSS", gage: 8 },
  { name: "JavaScript", gage: 7 },
  { name: "TypeScript", gage: 2 },
  { name: "React.js", gage: 6 },
  { name: "Next.js", gage: 4 },
  { name: "git", gage: 6 },
  { name: "Figma", gage: 7 },
];
