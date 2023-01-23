import { Button, Box, Text, ButtonGroup, VStack, Heading, Grid, GridItem } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Gender } from "../../constants/paths";
import { SelectionContent } from "../../constants/content";
import { GenderDialogues } from "../../constants/dialogues";
import { getRandomElement } from "../../utils";

const GenderStep = ({ value, setValue, onNext }) => {
  return (
    <Box mt={20} mb={10}>
      {value ? (
        <VStack display="flex" justifyContent="center" alignItems="center">
          <motion.div key={value} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
            <Box rounded="lg" p={4} bg="gray.800" color="white">
              <Text>{getRandomElement(GenderDialogues[value][1]["dialogues"])}</Text>
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
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.img
              key={value}
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [100, 0, 100, 0, 100] }}
              transition={{
                x: { duration: 2 },
                opacity: { duration: 2 },
                y: { repeat: Infinity, duration: 2 },
              }}
              exit={{ x: -1000, opacity: 0 }}
              src={Gender[value][1]}
              style={{ maxHeight: "80%" }}
            />
          </AnimatePresence>
        </VStack>
      ) : (
        <>
          <Grid templateColumns="repeat(5, 1fr)" gap={3} mb={5}>
            <GridItem colSpan={2} display="flex" justifyContent="flex-start" alignItems="center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
                <Box rounded="lg" p={4} bg="gray.800" color="white">
                  <Text>{getRandomElement(GenderDialogues["Female"][0]["dialogues"])}</Text>
                </Box>
              </motion.div>
            </GridItem>
            <GridItem colStart={4} colEnd={6} display="flex" justifyContent="flex-end" alignItems="center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
                <Box rounded="lg" p={4} bg="gray.800" color="white">
                  <Text>{getRandomElement(GenderDialogues["Male"][0]["dialogues"])}</Text>
                </Box>
              </motion.div>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start">
              <AnimatePresence mode="wait">
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
                  style={{ maxHeight: "70%" }}
                  onClick={() => {
                    setValue("gender", "Female");
                  }}
                />
              </AnimatePresence>
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start" mt="60%">
              {value === null && (
                <Heading as="h1" textAlign="center">
                  {getRandomElement(SelectionContent)}
                </Heading>
              )}
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start">
              <AnimatePresence mode="wait">
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
                  style={{ maxHeight: "70%" }}
                  onClick={() => {
                    setValue("gender", "Male");
                  }}
                />
              </AnimatePresence>
            </GridItem>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default GenderStep;
