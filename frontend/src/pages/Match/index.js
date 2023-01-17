import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Flex } from "@chakra-ui/react";
import { useState, Suspense } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GenderPage from "./Gender";
import Headware from "./Headware";

const Container = styled.section`
  width: 100%;
  height: 100%;
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

const Pages = [GenderPage, Headware];

const MatchPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    if (currentStep < Pages.length) setCurrentStep((currentStep) => currentStep + 1);
  };
  const previousStep = () => {
    if (currentStep > 0) setCurrentStep((currentStep) => currentStep - 1);
  };
  const [formValues, setFormValues] = useState({
    gender: null,
    headwear: null,
    topwear: null,
    bottomwear: null,
    footwear: null,
    accessories: null,
  });
  const setValue = (key, value) => {
    if (key in formValues) setFormValues((values) => ({ ...values, [key]: value }));
  };

  return (
    <Container>
      <Suspense fallback={<h1>Loading...</h1>}>
        <DarkOverlay />

        <Flex
          position="absolute"
          justifyContent="center"
          alignItems="center"
          top="8rem"
          bg="black"
          left="5em"
          right="5em"
        >
          <Card bg="black">
            <CardHeader>
              <Title variants={container} initial="hidden" animate="show">
                <div>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
                    D
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
                    R
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
                    E
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
                    S
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
                    S
                  </motion.h2>
                </div>
              </Title>
            </CardHeader>
            <CardBody>
              {currentStep === 1 && <GenderPage value={formValues["gender"]} setValue={setValue} onNext={nextStep} />}
              {currentStep === 2 && <Headware values={formValues["headwear"]} setValue={setValue} />}
              {currentStep > 1 && (
                <ButtonGroup display="flex" justifyContent="center" alignItems="center" mt={10} spacing={20}>
                  <Button onClick={previousStep}>Previous</Button>
                  <Button onClick={nextStep}>Next</Button>
                </ButtonGroup>
              )}
            </CardBody>
          </Card>
        </Flex>
      </Suspense>
    </Container>
  );
};

export default MatchPage;
