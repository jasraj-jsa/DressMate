import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex position="absolute" top="0" bottom="0" left="0" right="0" justifyContent="center" alignItems="center">
      <VStack>
        <Heading fontSize="4em">404</Heading>
        <Text fontSize="2em">
          You've stumbled upon a lost page, but don't worry, your outfit is still on the right track.
        </Text>
      </VStack>
    </Flex>
  );
};

export default NotFound;
