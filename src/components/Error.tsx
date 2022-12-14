import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";

type error = {
  message?: string;
};
const Error: FC<error> = ({ message }) => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      minH={"100vh"}
      minW="100wh"
      direction={"column"}
    >
      <Center flexDirection={"column"}>
        <Heading color="white" fontSize={"1.5rem"} fontWeight={700}>
          {message}.
        </Heading>
        <Text color="white" fontWeight={600}>
          Kindly check your internet connection, then refresh the page.
        </Text>
      </Center>
    </Flex>
  );
};

export default Error;
