import { Button, Box, Text, ButtonGroup, VStack, Heading, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Gender } from "../../constants/paths";
import { GenderDialogues } from "../../constants/dialogues";
import { GenderStyles } from "../../constants/styles";
import { GetRandomElement } from "../../utils";
import { useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GenderStep = ({ value, setValue, onNext }) => {
  const { colorMode } = useColorMode();
  const dialogues = useMemo(
    () =>
      value
        ? [GetRandomElement(GenderDialogues[value][1]["dialogues"])]
        : [
            GetRandomElement(GenderDialogues["Female"][0]["dialogues"]),
            GetRandomElement(GenderDialogues["Male"][0]["dialogues"]),
          ],
    [value]
  );
  return (
    <Box>
      <AnimatePresence mode="wait">
        {value ? (
          <VStack display="flex" justifyContent="center" alignItems="center" key="selected">
            <motion.div
              key={value}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 0.75 } }}
              exit={{ opacity: 0 }}
            >
              <Box rounded="lg" p={4} bg="gray.800" color="white" mt={20}>
                <Text>{dialogues[0]}</Text>
                <ButtonGroup mt={5} spacing={5}>
                  <Button
                    onClick={() => {
                      setValue("Gender", null);
                    }}
                    variant="outline"
                    colorScheme={colorMode === "light" ? "blue" : "teal"}
                  >
                    Pick Again
                  </Button>
                  <Button onClick={onNext} variant="outline" colorScheme={colorMode === "light" ? "blue" : "teal"}>
                    Let's Go!
                  </Button>
                </ButtonGroup>
              </Box>
            </motion.div>
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [100, 0, 100, 0, 100],
                transition: { duration: 2, y: { repeat: Infinity, duration: 2 } },
              }}
              whileHover={{ scale: 1.2 }}
              exit={{ opacity: 0 }}
            >
              <LazyLoadImage src={Gender[value][1]} style={GenderStyles["Selected"]} key={value} alt={value} />
            </motion.div>
          </VStack>
        ) : (
          <Grid templateColumns="repeat(4, 1fr)" key="select">
            <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
              <VStack spacing={10}>
                <motion.div
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  exit={{ x: -1000, opacity: 0 }}
                >
                  <Box rounded="lg" p={4} bg="gray.800" color="white">
                    <Text>{dialogues[0]}</Text>
                  </Box>
                </motion.div>
                <motion.div
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, scale: { duration: 1 } }}
                  exit={{ x: -1000, opacity: 0 }}
                  whileHover={{
                    scale: 1.3,
                  }}
                  onClick={() => {
                    setValue("Gender", "Female");
                  }}
                >
                  <LazyLoadImage src={Gender["Female"][0]} style={GenderStyles["Female"]} key="Agnes" alt="Agnes" />
                </motion.div>
              </VStack>
            </GridItem>
            <GridItem display="flex" justifyContent="center" alignItems="center" colSpan={2} mt={20}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.5 } }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                {value === null && (
                  <Heading as="h1" textAlign="center">
                    Choose the gender that best represents you.
                  </Heading>
                )}
              </motion.div>
            </GridItem>
            <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
              <VStack spacing={10}>
                <motion.div
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  exit={{ x: 1000, opacity: 0 }}
                >
                  <Box rounded="lg" p={4} bg="gray.800" color="white">
                    <Text>{dialogues[1]}</Text>
                  </Box>
                </motion.div>
                <motion.div
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, scale: { duration: 1 } }}
                  exit={{ x: 1000, opacity: 0 }}
                  whileHover={{
                    scale: 1.3,
                  }}
                  onClick={() => {
                    setValue("Gender", "Male");
                  }}
                >
                  <LazyLoadImage src={Gender["Male"][0]} style={GenderStyles["Male"]} alt="Batman" key="Batman" />
                </motion.div>
              </VStack>
            </GridItem>
          </Grid>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default GenderStep;
