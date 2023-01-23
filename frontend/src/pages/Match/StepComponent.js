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
  FormErrorMessage,
} from "@chakra-ui/react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { StepPaths } from "../../constants/paths";
import { getRandomElement } from "../../utils";
import { StepsContent, StepsHelperText } from "../../constants/content";
import { StepDialgoues } from "../../constants/dialogues";
import { StepStyles } from "../../constants/styles";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useMemo, useState } from "react";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontxxxl};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;
    text-transform: capitalize;
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const StepComponent = ({ step, values, setValue, gender, last, onPrev, onNext, handleSubmit }) => {
  const label = useMemo(() => getRandomElement(StepsContent[step][gender]), [step, gender]);
  const dialogues = useMemo(
    () => [
      getRandomElement(StepDialgoues[step][gender][0]["dialogues"]),
      getRandomElement(StepDialgoues[step][gender][1]["dialogues"]),
    ],
    [step, gender]
  );
  const helperText = StepsHelperText[step][gender];
  const handleSuggestionChange = (event) => {
    const suggestions = values["Suggestions"];
    if (event.target.checked) {
      if (!suggestions.includes(step)) setValue("Suggestions", [...suggestions, step]);
    } else {
      if (suggestions.includes(step))
        setValue(
          "Suggestions",
          suggestions.filter((ele) => ele !== step)
        );
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <Box mt={20}>
      <Heading textAlign="center" color="white" mb={10}>
        {step}
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={3} mb={5}>
        <GridItem colSpan={2} display="flex" justifyContent="center" alignItems="center">
          <VStack spacing={10}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
              <Box rounded="lg" p={4} bg="gray.800" color="white">
                <Text>{dialogues[0]}</Text>
              </Box>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.img
                src={StepPaths[step][gender][0]}
                whileHover={{
                  y: [0, 80, 0, 80, 0],
                  scale: 1.2,
                  transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                }}
                transition={{ x: { duration: 2 }, opacity: { duration: 2 } }}
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -1000, opacity: 0 }}
                key={step}
                style={StepStyles[step][gender][0]}
              />
            </AnimatePresence>
          </VStack>
        </GridItem>
        <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" mt="40%" colSpan={2}>
          <VStack spacing={10}>
            <FormControl textColor="white">
              <FormLabel>{label}</FormLabel>
              <Input
                value={values[step] || ""}
                onChange={(event) => {
                  setValue(step, event.target.value);
                }}
              />
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl display="flex" justifyContent="center" alignItems="center">
              <FormLabel htmlFor="suggestion">Need suggestion?</FormLabel>
              <Switch
                id="suggestion"
                onChange={handleSuggestionChange}
                isChecked={values["Suggestions"].includes(step)}
                size="lg"
              />
            </FormControl>
            <FormControl display="flex" justifyContent="center" alignItems="center">
              <ButtonGroup spacing="30%">
                <Tooltip label="Previous">
                  <Button onClick={onPrev} variant="outline" rounded="full" colorScheme="cyan" size="lg">
                    <Icon as={GrPrevious} size="lg" />
                  </Button>
                </Tooltip>
                {last ? (
                  <Button onClick={handleSubmit}>Submit</Button>
                ) : (
                  <Tooltip label="Next">
                    <Button onClick={handleNext} variant="outline" rounded="full" colorScheme="cyan" size="lg">
                      <Icon as={GrNext} size="lg" />
                    </Button>
                  </Tooltip>
                )}
              </ButtonGroup>
            </FormControl>
          </VStack>
        </GridItem>
        <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={2}>
          <VStack spacing={10}>
            {step !== "Headwear" && step !== "FootAcc" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
                <Box rounded="lg" p={4} bg="gray.800" color="white">
                  <Text>{dialogues[1]}</Text>
                </Box>
              </motion.div>
            )}
            <AnimatePresence mode="wait">
              <motion.img
                src={StepPaths[step][gender][1]}
                whileHover={{
                  y: [0, 80, 0, 80, 0],
                  scale: 1.2,
                  transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
                }}
                transition={{ x: { duration: 2 }, opacity: { duration: 2 } }}
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

      {/* <Grid templateColumns="repeat(3, 1fr)" gap={6}> */}
      {/* <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start">
         
        </GridItem> */}

      {/* <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start"> */}

      {/* </GridItem> */}
      {/* </Grid> */}
    </Box>
  );
};

export default StepComponent;
