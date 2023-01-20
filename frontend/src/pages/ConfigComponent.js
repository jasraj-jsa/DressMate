import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";

const ConfigComponent = ({ isOpen, onClose }) => {
  const APIKey = useRef(localStorage.getItem("API_Key") || "");
  const Temperature = useRef(localStorage.getItem("Temperature") || "");
  const updateConfig = () => {
    localStorage.setItem("API_Key", APIKey.current);
    localStorage.setItem("Temperature", Temperature.current);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Open AI API Configuration</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={5}>
            <FormControl>
              <FormLabel>API Key</FormLabel>
              <Input type="string" ref={APIKey} />
            </FormControl>
            <FormControl>
              <FormLabel>Temperature</FormLabel>
              <Input type="number" ref={Temperature} />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button variant="outline" onClick={updateConfig}>
              Update
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfigComponent;
