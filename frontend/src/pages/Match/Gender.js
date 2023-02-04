import { Button, Box, Text, ButtonGroup, VStack, Heading, Grid, GridItem } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Gender } from "../../constants/paths";
import { SelectionContent } from "../../constants/content";
import { GenderDialogues } from "../../constants/dialogues";
import { GenderStyles } from "../../constants/styles";
import { getRandomElement } from "../../utils";

const GenderStep = ({ value, setValue, onNext }) => {
  return (
    <Box mt={20} mb={10}>
      <AnimatePresence mode="wait">
        {value ? (
          <VStack display="flex" justifyContent="center" alignItems="center" key="selected">
            <motion.div
              key={value}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 3 } }}
              exit={{ opacity: 0 }}
            >
              <Box rounded="lg" p={4} bg="gray.800" color="white">
                <Text>{getRandomElement(GenderDialogues[value][1]["dialogues"])}</Text>
                <ButtonGroup mt={5} spacing={5}>
                  <Button
                    onClick={() => {
                      setValue("Gender", null);
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
            </motion.div>
            <motion.img
              key={value}
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [100, 0, 100, 0, 100] }}
              transition={{
                x: { duration: 2 },
                opacity: { duration: 2 },
                y: { repeat: Infinity, duration: 2 },
              }}
              whileHover={{ scale: 1.2 }}
              exit={{ opacity: 0 }}
              src={Gender[value][1]}
              style={GenderStyles["Selected"]}
            />
          </VStack>
        ) : (
          <Grid templateColumns="repeat(5, 1fr)" gap={3} key="select">
            <GridItem colSpan={2} display="flex" justifyContent="center" alignItems="center">
              <VStack spacing={10}>
                <motion.div
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  exit={{ x: -1000, opacity: 0 }}
                >
                  <Box rounded="lg" p={4} bg="gray.800" color="white">
                    <Text>{getRandomElement(GenderDialogues["Female"][0]["dialogues"])}</Text>
                  </Box>
                </motion.div>
                <motion.img
                  key="Agnes"
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  exit={{ x: -1000, opacity: 0 }}
                  whileHover={{
                    scale: 1.3,
                  }}
                  src={Gender["Female"][0]}
                  style={GenderStyles["Female"]}
                  onClick={() => {
                    setValue("Gender", "Female");
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem display="flex" justifyContent="center" alignItems="center" colSpan={1}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 3 } }}
                exit={{ opacity: 0 }}
              >
                {value === null && (
                  <Heading as="h1" textAlign="center">
                    {getRandomElement(SelectionContent)}
                  </Heading>
                )}
              </motion.div>
            </GridItem>
            <GridItem colSpan={2} display="flex" justifyContent="center" alignItems="center">
              <VStack spacing={10}>
                <motion.div
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  exit={{ x: 1000, opacity: 0 }}
                >
                  <Box rounded="lg" p={4} bg="gray.800" color="white">
                    <Text>{getRandomElement(GenderDialogues["Male"][0]["dialogues"])}</Text>
                  </Box>
                </motion.div>
                <motion.img
                  key="Batman"
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  exit={{ x: 1000, opacity: 0 }}
                  whileHover={{
                    scale: 1.3,
                  }}
                  src={Gender["Male"][0]}
                  style={GenderStyles["Male"]}
                  onClick={() => {
                    setValue("Gender", "Male");
                  }}
                />
              </VStack>
            </GridItem>
          </Grid>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default GenderStep;
