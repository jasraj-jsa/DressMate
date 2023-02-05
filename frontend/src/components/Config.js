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
import { useState } from "react";

const ConfigComponent = ({ isOpen, onClose }) => {
  const [apiKey, setAPIKey] = useState(localStorage.getItem("API_Key") || "");
  const [temperature, setTemperature] = useState(localStorage.getItem("Temperature") || "");
  const updateConfig = () => {
    localStorage.setItem("API_Key", apiKey);
    localStorage.setItem("Temperature", temperature);
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
              <Input type="string" value={apiKey} onChange={(event) => setAPIKey(event.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Temperature</FormLabel>
              <Input type="number" value={temperature} onChange={(event) => setTemperature(event.target.value)} />
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
