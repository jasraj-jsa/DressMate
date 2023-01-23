import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Flex,
  HStack,
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
} from "@chakra-ui/react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { StepPaths } from "../../constants/paths";
import { getRandomElement } from "../../utils";
import { StepsContent, StepsHelperText } from "../../constants/content";
import { StepDialgoues } from "../../constants/dialogues";
import { StepStyles } from "../../constants/styles";

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
  const label = getRandomElement(StepsContent[step][gender]);
  const helperText = StepsHelperText[step][gender];
  return (
    <Box mt={20}>
      <Heading textAlign="center" color="white" mb={10}>
        {step}
      </Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={3} mb={5}>
        <GridItem colSpan={2} display="flex" justifyContent="center" alignItems="flex-start">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
            <Box rounded="lg" p={4} bg="gray.800" color="white">
              <Text>{getRandomElement(StepDialgoues[step][gender][0]["dialogues"])}</Text>
            </Box>
          </motion.div>
        </GridItem>
        <GridItem colStart={4} colEnd={6} display="flex" justifyContent="center" alignItems="flex-start">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }}>
            <Box rounded="lg" p={4} bg="gray.800" color="white">
              <Text>{getRandomElement(StepDialgoues[step][gender][1]["dialogues"])}</Text>
            </Box>
          </motion.div>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start">
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
        </GridItem>

        <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start" mt="50%">
          <VStack spacing={10}>
            <FormControl textColor="white">
              <FormLabel>{label}</FormLabel>
              <Input
                type="string"
                value={values[step]}
                onChange={(evt) => {
                  setValue(step, evt.target.value);
                }}
              />
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <FormControl display="flex" justifyContent="center" alignItems="center">
              <ButtonGroup spacing={5}>
                <Button onClick={onPrev}>Previous</Button>
                <Button>Suggest</Button>
                {last ? <Button onClick={handleSubmit}>Submit</Button> : <Button onClick={onNext}>Next</Button>}
              </ButtonGroup>
            </FormControl>
          </VStack>
        </GridItem>

        <GridItem w="100%" display="flex" justifyContent="center" alignItems="flex-start">
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
        </GridItem>
      </Grid>
    </Box>
  );
};

export default StepComponent;
