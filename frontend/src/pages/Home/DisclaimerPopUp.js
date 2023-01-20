import {
  Box,
  Button,
  HStack,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { DisclaimerPaths } from "../../constants/paths";

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    bottom: 1.5rem;
    z-index: 6;
  }
`;

const pathVariants = {
  animate: {
    opacity: [1, 0, 1, 0, 1],
    transition: {
      repeat: Infinity,
      duration: 3,
    },
  },
};

const DisclaimerPopUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container>
      <Button
        as={motion.button}
        variants={pathVariants}
        animate="animate"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        colorScheme="red"
        bg="red.200"
        size="lg"
        variant="outline"
        border="none"
        onClick={onOpen}
      >
        Disclaimer
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          bg="red.300"
        >
          <ModalHeader color="white">ATTENTION !!</ModalHeader>
          <ModalCloseButton />
          <HStack spacing={2} display="flex" justifyContent="center" alignItems="center" mb={20} mt={10}>
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3 }}
              whileHover={{ y: [0, 50, 0, 50, 0], scale: 1.2 }}
              src={DisclaimerPaths["Coder"]}
              style={{ width: "300px", height: "500px" }}
            />
            <ModalBody>
              <Text color="white">
                WHEN IS A PLAINTIFF ENTITLED TO RECOVER? A. A plaintiff who was injured as as result of some negligent
                conduct on the part of a defendant is entitled to recover compensation for such injury from that
                defendant.A plaintiff is entitled to a verdict if jury finds1. That a defendant was negligent, and2.
                That such negligence was a cause of injury to the plaintiff. Q. WHAT IS NEGLIGENCE? Negligence is the
                doing of something which a reasonably prudent person would not do, or the failure to do something
              </Text>
            </ModalBody>
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3 }}
              whileHover={{ y: [0, 50, 0, 50, 0], scale: 1.2 }}
              src={DisclaimerPaths["Voldemort"]}
              style={{ width: "300px", height: "500px" }}
            />
          </HStack>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default DisclaimerPopUp;
