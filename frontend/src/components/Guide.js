import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GuidePaths } from "../constants/paths";

const GuideComponent = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
        <ModalHeader textAlign="center">
          Navigating Dress Mate: Your Expert Guide to Fashionable Outfit Pairings That Slay!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody m={4}>
          <video src={GuidePaths["Video"]} type="video/mp4" controls poster={GuidePaths["Thumbnail"]} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GuideComponent;
