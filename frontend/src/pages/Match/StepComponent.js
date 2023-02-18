import {
  Box,
  Heading,
  Icon,
  Text,
  VStack,
  Grid,
  GridItem,
  Button,
  FormHelperText,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Tooltip,
  Switch,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  useColorMode,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { StepPaths, ResultPaths } from "../../constants/paths";
import { getRandomElement } from "../../utils";
import { StepsContent, StepsHelperText } from "../../constants/content";
import { StepDialgoues } from "../../constants/dialogues";
import { StepStyles } from "../../constants/styles";
import { GrPrevious, GrNext } from "react-icons/gr";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useMemo, useState } from "react";

const StepComponent = ({ step, values, setValue, gender, last, onPrev, onNext, isLoading, fetchResults }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVis, setIsVis] = useState(true);
  const [counter, setCounter] = useState(0);
  const [outImages, setOutImages] = useState([]);
  const label = useMemo(() => getRandomElement(StepsContent[step][gender]), [step, gender]);
  const dialogues = useMemo(
    () => [
      getRandomElement(StepDialgoues[step][gender][0]["dialogues"]),
      getRandomElement(StepDialgoues[step][gender][1]["dialogues"]),
    ],
    [step, gender]
  );
  const [prediction, setPrediction] = useState("");
  const helperText = StepsHelperText[step][gender];
  const handleSuggestionChange = (event) => {
    let suggestions = values["Suggestions"];
    if (event.target.checked) suggestions.add(step);
    else suggestions.delete(step);
    setValue("Suggestions", suggestions);
  };
  const resultsKey = counter % 2 ? "Minions" : "Mickey";
  const handleNext = () => {
    onNext();
  };
  const { colorMode } = useColorMode();

  const handleSubmit = async () => {
    const output = await fetchResults();
    const { images, data } = output;
    if (data) {
      setPrediction(data);
      setOutImages(images);
      onOpen();
      setIsVis(true);
      setCounter((counter) => counter + 1);
    }
  };

  return (
    <Box mt={20}>
      <Grid templateColumns="repeat(6, 1fr)" gap={3} mb={5}>
        <GridItem colSpan={2} display="flex" justifyContent="center" alignItems="center">
          <VStack spacing={10}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ x: { duration: 1 }, opacity: { duration: 1 } }}
                key={step}
                exit={{ x: -1000, opacity: 0 }}
              >
                <Box rounded="3xl" p={4} bg="gray.800" color="white">
                  <Text>{dialogues[0]}</Text>
                </Box>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.img
                src={StepPaths[step][gender][0]}
                whileHover={{
                  scale: 1.2,
                }}
                transition={{ duration: 1 }}
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -1000, opacity: 0 }}
                key={step}
                style={StepStyles[step][gender][0]}
              />
            </AnimatePresence>
          </VStack>
        </GridItem>
        <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={2}>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={step}
              exit={{ opacity: 0 }}
            >
              <VStack spacing={10}>
                <FormControl>
                  <Heading textAlign="center" as="h1">
                    {step !== "FootAcc" ? step : "Footwear & Accessories"}
                  </Heading>
                </FormControl>
                <FormControl>
                  <FormLabel textAlign="center">{label}</FormLabel>
                  <Input
                    value={values[step] || ""}
                    onChange={(event) => {
                      setValue(step, event.target.value);
                    }}
                  />
                  <FormHelperText>{helperText}</FormHelperText>
                </FormControl>
                {step !== "Occasion" && (
                  <FormControl display="flex" justifyContent="center" alignItems="center">
                    <FormLabel htmlFor="suggestion">Need suggestion?</FormLabel>
                    <Switch
                      id="suggestion"
                      onChange={handleSuggestionChange}
                      isChecked={values["Suggestions"].has(step)}
                      size="lg"
                      colorScheme={colorMode === "light" ? "blue" : "teal"}
                    />
                  </FormControl>
                )}

                <FormControl display="flex" justifyContent="center" alignItems="center">
                  <ButtonGroup spacing="30%">
                    <Tooltip label="Previous" isDisabled={isVis}>
                      <Button
                        onClick={onPrev}
                        rounded="full"
                        colorScheme={colorMode === "light" ? "blue" : "teal"}
                        size="lg"
                        disabled={isLoading}
                      >
                        <Icon as={GrPrevious} size="lg" />
                      </Button>
                    </Tooltip>
                    {last ? (
                      <Tooltip label="Let's Go!" isDisabled={isVis}>
                        <Button
                          onClick={handleSubmit}
                          colorScheme={colorMode === "light" ? "blue" : "teal"}
                          size="lg"
                          rounded="full"
                          isLoading={isLoading}
                        >
                          <Icon as={IoCheckmarkDoneSharp} size="lg" boxSize="1.3em" />
                        </Button>
                      </Tooltip>
                    ) : (
                      <Tooltip label="Next" isDisabled={isVis}>
                        <Button
                          onClick={handleNext}
                          rounded="full"
                          colorScheme={colorMode === "light" ? "blue" : "teal"}
                          size="lg"
                        >
                          <Icon as={GrNext} size="lg" />
                        </Button>
                      </Tooltip>
                    )}
                  </ButtonGroup>
                </FormControl>
              </VStack>
            </motion.div>
          </AnimatePresence>
        </GridItem>
        <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={2}>
          <VStack spacing={10}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ x: { duration: 1 }, opacity: { duration: 1 } }}
                key={step}
                exit={{ x: 1000, opacity: 0 }}
              >
                {step !== "Headwear" && step !== "FootAcc" && (
                  <Box rounded="3xl" p={4} bg="gray.800" color="white">
                    <Text>{dialogues[1]}</Text>
                  </Box>
                )}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.img
                src={StepPaths[step][gender][1]}
                whileHover={{
                  scale: 1.2,
                }}
                transition={{ duration: 1 }}
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 1000, opacity: 0 }}
                style={StepStyles[step][gender][1]}
                key={step}
              />
            </AnimatePresence>
          </VStack>
        </GridItem>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent minH="90vh">
          <ModalCloseButton />
          <ModalBody>
            <AnimatePresence mode="wait">
              {isVis ? (
                <VStack>
                  <motion.div style={{ display: "flex" }} exit={{ opacity: 0 }} key="initial">
                    <motion.h1 key="initial" style={{ fontSize: "2em" }}>
                      Pulling your results out
                    </motion.h1>
                    <AnimatePresence mode="wait">
                      <motion.h1
                        animate={{ opacity: [0, 1, 0], transition: { duration: 2.5, repeat: Infinity } }}
                        key="first"
                        style={{ fontSize: "2em" }}
                      >
                        .
                      </motion.h1>
                      <motion.h1
                        animate={{ opacity: [0, 1, 0], transition: { duration: 2.5, repeat: Infinity } }}
                        key="second"
                        style={{ fontSize: "2em" }}
                      >
                        .
                      </motion.h1>
                      <motion.h1
                        animate={{ opacity: [0, 1, 0], transition: { duration: 2.5, repeat: Infinity } }}
                        key="third"
                        style={{ fontSize: "2em" }}
                      >
                        .
                      </motion.h1>
                    </AnimatePresence>
                  </motion.div>
                  <motion.img
                    src={ResultPaths[resultsKey]}
                    animate={{ y: [-200, 0, -200], transition: { repeat: 2, duration: 2 } }}
                    exit={{ y: [-200, 500], transition: { duration: 1 } }}
                    onAnimationComplete={() => setIsVis(false)}
                    style={{ maxWidth: resultsKey === "Mickey" ? "100%" : "55%" }}
                    key={resultsKey}
                  />
                </VStack>
              ) : (
                <motion.div
                  key="final"
                  initial={{ opacity: 0, y: -500 }}
                  animate={{ opacity: 1, y: 75, transition: { duration: 3 } }}
                >
                  <Box bg={colorMode === "light" ? "#00A7E1" : "#2A9D8F"} color="black" p={4} rounded="lg">
                    <Heading>Here are you results</Heading>
                    <Text mt={5} mb={5}>
                      {prediction}
                    </Text>
                    <VStack spacing={5}>
                      {outImages.length &&
                        outImages.map((imgSrc, index) => <img src={imgSrc} key={index} width="256" height="256" />)}
                    </VStack>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default StepComponent;
