import { Button, Box, Text, HStack, ButtonGroup, VStack, Heading, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import DialogueCloud from "../../components/DialogueCloud";
import { Gender } from "../../constants/paths";
import { SelectionContent } from "../../constants/content";
import { GenderDialogues } from "../../constants/dialogues";
import { getRandomElement } from "../../utils";

const GenderStep = ({ value, setValue, onNext }) => {
  return (
    <Box mt={20}>
      {value === null && (
        <Box justifyContent="center" alignItems="center" mt={20} mb={10}>
          <Heading textAlign="center">{getRandomElement(SelectionContent)}</Heading>
        </Box>
      )}
      <HStack display="flex" justifyContent="center" alignItems="center" spacing="none">
        {(value === "Female" || value === null) && (
          <VStack spacing="none">
            <AnimatePresence mode="wait">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
                <DialogueCloud>
                  {value === "Female" ? (
                    <Box>
                      <Text>{getRandomElement(GenderDialogues["Female"][1]["dialogues"])}</Text>
                      <ButtonGroup mt={5} spacing={5}>
                        <Button
                          onClick={() => {
                            setValue("gender", null);
                          }}
                          variant="outline"
                          colorScheme="teal"
                        >
                          Choose Again
                        </Button>
                        <Button onClick={onNext} variant="outline" colorScheme="teal">
                          Let's Go!
                        </Button>
                      </ButtonGroup>
                    </Box>
                  ) : (
                    <Text>{getRandomElement(GenderDialogues["Female"][0]["dialogues"])}</Text>
                  )}
                </DialogueCloud>
              </motion.div>
              <motion.div
                // animate={{ y: [0, 150, 0, 150, 0] }}
                // transition={{ duration: 5 }}
                // exit={{ x: 1000, opacity: 0 }}
                onClick={() => {
                  setValue("gender", "Female");
                }}
              >
                <AnimatePresence mode="wait">
                  {value === "Female" ? (
                    <motion.img
                      key="Agnes1"
                      initial={{ x: -1000, opacity: 0 }}
                      animate={{ x: 0, opacity: 1, y: [100, 0, 100, 0, 100] }}
                      transition={{
                        x: { duration: 2 },
                        opacity: { duration: 2 },
                        y: { repeat: Infinity, duration: 2 },
                      }}
                      exit={{ x: -1000, opacity: 0 }}
                      src={Gender["Female"][1]}
                      style={{ height: "80vh" }}
                    />
                  ) : (
                    <motion.img
                      key="Agnes"
                      whileHover={{
                        y: [0, 80, 0, 80, 0],
                        scale: 1.2,
                        transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                      }}
                      transition={{ x: { duration: 2 }, opacity: { duration: 2 } }}
                      initial={{ x: -1000, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -1000, opacity: 0 }}
                      src={Gender["Female"][0]}
                      style={{ height: "90vh" }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </VStack>
        )}

        {(value === "Male" || value === null) && (
          <VStack>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 3 } }}
                style={{ margin: 20 }}
              >
                <DialogueCloud>
                  {value === "Male" ? (
                    <Box>
                      <Text>{getRandomElement(GenderDialogues["Male"][1]["dialogues"])}</Text>
                      <ButtonGroup mt={5} spacing={5}>
                        <Button
                          onClick={() => {
                            setValue("gender", null);
                          }}
                          variant="outline"
                          colorScheme="teal"
                        >
                          Choose Again
                        </Button>
                        <Button onClick={onNext} variant="outline" colorScheme="teal">
                          Let's Go!
                        </Button>
                      </ButtonGroup>
                    </Box>
                  ) : (
                    <Text>{getRandomElement(GenderDialogues["Male"][0]["dialogues"])}</Text>
                  )}
                </DialogueCloud>
              </motion.div>
              <motion.div
                // animate={{ y: [0, 150, 0, 150, 0] }}
                // transition={{ duration: 5 }}
                exit={{ x: 1000, opacity: 0 }}
                onClick={() => {
                  setValue("gender", "Male");
                }}
              >
                <AnimatePresence mode="wait">
                  {value === "Male" ? (
                    <motion.img
                      key="batman2"
                      transition={{
                        x: { duration: 2 },
                        opacity: { duration: 2 },
                        y: { repeat: Infinity, duration: 2 },
                        scale: { duration: 2 },
                        rotate: { duration: 2 },
                      }}
                      // whileHover={{
                      //   y: [0, 80, 0, 80, 0],
                      //   scale: 1.2,
                      //   transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                      // }}
                      initial={{ x: 1000, opacity: 0, rotate: 60 }}
                      animate={{ x: 0, opacity: 1, y: [100, 0, 100, 0, 100], rotate: 0 }}
                      exit={{ x: 1000, opacity: 0 }}
                      src={Gender["Male"][1]}
                      style={{ height: "90vh" }}
                    />
                  ) : (
                    <motion.img
                      key="batman1"
                      transition={{ x: { duration: 2 }, opacity: { duration: 2 } }}
                      initial={{ x: 1000, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 1000, opacity: 0 }}
                      whileHover={{
                        y: [0, 80, 0, 80, 0],
                        scale: 1.2,
                        transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                      }}
                      src={Gender["Male"][0]}
                      style={{ height: "90vh" }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </VStack>
        )}
      </HStack>
    </Box>
  );
};

export default GenderStep;
