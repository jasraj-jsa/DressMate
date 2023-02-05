import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HowToUseContent } from "../constants/content";

const HelpComponent = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }}>
        <ModalHeader textAlign="center">
          Unleash Your Inner Fashionista: A Guide to Rocking Agnes or Batman Style
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody m={4}>
          <Text dangerouslySetInnerHTML={{ __html: HowToUseContent.replace(/\n/g, "<br />") }} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HelpComponent;
