import {
  Box,
  Button,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Grid,
  GridItem,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DisclaimerPaths } from "../../constants/paths";
import { DisclaimerDialogues } from "../../constants/dialogues";
import { DisclaimerContent } from "../../constants/content";
import { DisclaimerStyles } from "../../constants/styles";

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    bottom: 3rem;
    z-index: 6;
  }
`;

const pathVariants = {
  animate: {
    opacity: [0, 1, 0],
    transition: {
      opacity: {
        repeat: Infinity,
        delay: 4,
        duration: 2,
      },
    },
  },
};

const DisclaimerPopUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <Container>
      <Button
        as={motion.button}
        variants={pathVariants}
        animate="animate"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        colorScheme="red"
        size="lg"
        color={colorMode === "light" ? "black" : "white"}
        border="none"
        onClick={onOpen}
        rounded="lg"
      >
        Disclaimer
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          bg="red.300"
        >
          <ModalHeader color="white" textAlign="center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
              ATTENTION !!
            </motion.div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={8}>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={10}>
              <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={1}>
                <VStack spacing={10}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 3 } }}
                  >
                    <Box rounded="lg" p={4} bg="gray.800" color="white">
                      <Text>{DisclaimerDialogues["Coder"]}</Text>
                    </Box>
                  </motion.div>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 3 } }}
                    whileHover={{ scale: 1.5 }}
                    src={DisclaimerPaths["Coder"]}
                    style={DisclaimerStyles["Coder"]}
                  />
                </VStack>
              </GridItem>
              <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={2}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
                  <Text
                    color="white"
                    dangerouslySetInnerHTML={{ __html: DisclaimerContent.replace(/\n/g, "<br />") }}
                  />
                </motion.div>
              </GridItem>
              <GridItem w="100%" display="flex" justifyContent="center" alignItems="center">
                <VStack spacing={10}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 3 } }}
                  >
                    <Box rounded="lg" p={4} bg="gray.800" color="white">
                      <Text>{DisclaimerDialogues["Voldemort"]}</Text>
                    </Box>
                  </motion.div>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 3 } }}
                    whileHover={{ scale: 1.3 }}
                    src={DisclaimerPaths["Voldemort"]}
                    style={DisclaimerStyles["Voldemort"]}
                  />
                </VStack>
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default DisclaimerPopUp;
