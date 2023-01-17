import { Box, Text } from "@chakra-ui/react";

function DialogueCloud({ children }) {
  return (
    <Box rounded="lg" p={4} bg="gray.800" color="white">
      <Text>{children}</Text>
    </Box>
  );
}

export default DialogueCloud;
