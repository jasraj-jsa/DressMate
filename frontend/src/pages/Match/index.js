import { Card, CardBody, CardHeader, Flex, useColorMode, useToast } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GenderStep from "./Gender";
import StepComponent from "./StepComponent";
import { API_Route, StepsOrder } from "../../constants/others";
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
  const toast = useToast();
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
    Suggestions: new Set(),
  });
  const setValue = (key, value) => {
    if (key in formValues) setFormValues((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const API_Key = localStorage.getItem("API_Key") || "";
    const Temperature = localStorage.getItem("Temperature") || "";
    const body = JSON.stringify({ ...formValues, Suggestions: [...formValues["Suggestions"]], API_Key, Temperature });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    };
    const response = await fetch(API_Route, options);
    var output = "";
    if (response.ok) {
      output = await response.json();
    } else {
      let out = await response.json();
      if ("error" in out) out = out["error"];
      if ("message" in out) out = out["message"];
      if (typeof out === "object") out = JSON.stringify(out);
      toast({
        title: "Error",
        description: out,
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
    setIsLoading(false);
    return output;
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Card sx={CardStyles[colorMode]}>
        <CardHeader>
          <Title variants={container} initial="hidden" animate="show">
            <div>
              <motion.h2 variants={item}>M</motion.h2>
              <motion.h2 variants={item}>A</motion.h2>
              <motion.h2 variants={item}>T</motion.h2>
              <motion.h2 variants={item}>C</motion.h2>
              <motion.h2 variants={item}>H</motion.h2>
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
              fetchResults={handleSubmit}
            />
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default MatchPage;
