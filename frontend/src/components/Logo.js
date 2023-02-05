import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  z-index: 6;
  width: 100%;
  width: fit-content;
  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 1,
      delay: 2,
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <motion.path variants={pathVariants} initial="initial" animate="animate">
          <img src="/assets/Logo.png" width="48px" height="48px" alt="Logo" />
        </motion.path>

        <Text variants={textVariants} initial="initial" animate="animate">
          Dress Mate
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
