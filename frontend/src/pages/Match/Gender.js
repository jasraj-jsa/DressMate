import { Button, Box, Text, HStack, ButtonGroup, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import DialogueCloud from "../../components/DialogueCloud";

const GenderPage = ({ value, setValue, onNext }) => {
  return (
    <HStack mt={20} display="flex" justifyContent="center" alignItems="center">
      {(value === "Female" || value === null) && (
        <VStack>
          <AnimatePresence mode="wait">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
              <DialogueCloud>
                {value === "Female" ? (
                  <Box>
                    <Text>
                      Thank you for selecting me! <br /> I am going to be your dress mate
                    </Text>
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
                  "Hi! I am Agnes"
                )}
              </DialogueCloud>
            </motion.div>
            <motion.div
              // animate={{ y: [0, 150, 0, 150, 0] }}
              // transition={{ duration: 5 }}
              exit={{ x: 1000, opacity: 0 }}
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
                    transition={{ x: { duration: 2 }, opacity: { duration: 2 }, y: { repeat: Infinity, duration: 2 } }}
                    exit={{ x: 1000, opacity: 0 }}
                    // whileHover={{
                    //   y: [0, 80, 0, 80, 0],
                    //   scale: 1.2,
                    //   transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                    // }}
                    src="/Agnes1.svg"
                    style={{ width: "600px", height: "800px" }}
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
                    exit={{ x: 1000, opacity: 0 }}
                    src="/Agnes.svg"
                    style={{ width: "600px", height: "800px" }}
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
                    <Text>
                      Thank you for selecting me! <br /> I am going to be your dress mate
                    </Text>
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
                  "I am Batman"
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
                    transition={{ x: { duration: 2 }, opacity: { duration: 2 }, y: { repeat: Infinity, duration: 2 } }}
                    // whileHover={{
                    //   y: [0, 80, 0, 80, 0],
                    //   scale: 1.2,
                    //   transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                    // }}
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, y: [100, 0, 100, 0, 100] }}
                    exit={{ x: 1000, opacity: 0 }}
                    src="/batman2.svg"
                    style={{ width: "600px", height: "800px" }}
                  />
                ) : (
                  <motion.img
                    key="batman1"
                    transition={{ x: { duration: 2 }, opacity: { duration: 2 } }}
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -1000, opacity: 0 }}
                    whileHover={{
                      y: [0, 80, 0, 80, 0],
                      scale: 1.2,
                      transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                    }}
                    src="/batman1.svg"
                    style={{ width: "600px", height: "800px" }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </VStack>
      )}
    </HStack>
  );
};

export default GenderPage;
