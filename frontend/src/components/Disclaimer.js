import {
  Box,
  Button,
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

const Disclaimer = () => {
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
        {/* <motion.div > */}
        Disclaimer
        {/* </motion.div> */}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          bg="red.300"
        >
          <ModalHeader color="white">ATTENTION !!</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Disclaimer;
