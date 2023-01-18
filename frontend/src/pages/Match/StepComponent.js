import { Box, Card, CardBody, CardHeader, Heading, Flex, HStack, Text } from "@chakra-ui/react";
import { Suspense, useRef } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import FormComponent from "../../components/FormComponent";
import { Steps } from "../../constants/paths";

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

const StepComponent = ({ step, values, setValue, gender }) => {
  return (
    <Box mt={20}>
      <Heading textAlign="center" color="white">
        {step}
      </Heading>
      <HStack spacing={2} display="flex" justifyContent="center" alignItems="center">
        <AnimatePresence mode="wait">
          <motion.img
            src={Steps[step][gender][0]}
            whileHover={{
              y: [0, 80, 0, 80, 0],
              scale: 1.2,
              transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
            }}
            transition={{ x: { duration: 2 }, opacity: { duration: 2 } }}
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            style={{ width: "300px", height: "500px" }}
            key={step}
          />
        </AnimatePresence>
        <FormComponent
          label="Are you planning on wearing a headgear? If so, what type of headgear are you interested in wearing?"
          helperText="Examples: White beanie, red and black cap, beige felted hat, bucket hat, green fedora, cloche, boater, pink crochet, etc"
          type="text"
          values={values}
          key={step}
          setValue={setValue}
        />
        <AnimatePresence mode="wait">
          <motion.img
            src={Steps[step][gender][1]}
            whileHover={{
              y: [0, 80, 0, 80, 0],
              scale: 1.2,
              transition: { repeat: "once", y: { repeat: Infinity, duration: 1.5 } },
            }}
            transition={{ x: { duration: 2 }, opacity: { duration: 2 } }}
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000, opacity: 0 }}
            style={{ width: "300px", height: "500px" }}
            key={step}
          />
        </AnimatePresence>
      </HStack>
    </Box>
  );
};

export default StepComponent;
