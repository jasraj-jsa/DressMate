import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react";
import { useState, Suspense } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GenderStep from "./Gender";
import StepComponent from "./StepComponent";
import { StepsOrder } from "../../constants/others";
import { CardStyles } from "../../styles/Themes";

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
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MatchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { colorMode } = useColorMode();
  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () => {
    if (currentStep < StepsOrder.length) setCurrentStep((currentStep) => currentStep + 1);
  };
  const previousStep = () => {
    if (currentStep > 0) setCurrentStep((currentStep) => currentStep - 1);
  };
  const [formValues, setFormValues] = useState({
    Gender: null,
    Headwear: null,
    Outfit: null,
    FootAcc: null,
    Occasion: null,
    Suggestions: [],
  });
  const setValue = (key, value) => {
    if (key in formValues) setFormValues((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const API_Key = localStorage.getItem("API_Key") || "";
    const Temperature = localStorage.getItem("Temperature") || "";
    const body = JSON.stringify({ ...formValues, API_Key, Temperature });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    };
    const response = await fetch("", options);
    const output = await response.json();
    setIsLoading(false);
  };

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Flex justifyContent="center" alignItems="center">
          <Card sx={CardStyles[colorMode]}>
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
              {currentStep === 0 && <GenderStep value={formValues["Gender"]} setValue={setValue} onNext={nextStep} />}
              {currentStep > 0 && (
                <StepComponent
                  step={StepsOrder[currentStep]}
                  values={formValues}
                  setValue={setValue}
                  gender={formValues["Gender"]}
                  onPrev={previousStep}
                  onNext={nextStep}
                  last={currentStep >= StepsOrder.length - 1}
                  isLoading={isLoading}
                  handleSubmit={handleSubmit}
                />
              )}
            </CardBody>
          </Card>
        </Flex>
      </Suspense>
    </>
  );
};

export default MatchPage;
