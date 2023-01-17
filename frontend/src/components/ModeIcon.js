import { motion } from "framer-motion";
import { Button, Icon } from "@chakra-ui/react";
import { MdOutlineLightMode, MdLightMode, MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import styled from "styled-components";

const pathVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 2,
      delay: 5,
      ease: "easeInOut",
    },
  },
};
const Container = styled.div`
  position: absolute;
  top: 1rem;
  right: 3rem;
  z-index: 6;
`;
const ModeIcon = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <motion.path variants={pathVariants} initial="initial" animate="animate">
        <Button
          variant="outline"
          colorScheme={darkMode ? "whiteAlpha" : "blackAlpha"}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <Icon as={darkMode ? MdOutlineLightMode : MdOutlineDarkMode} size="lg" boxSize="1.3em" />
        </Button>
      </motion.path>
    </Container>
  );
};

export default ModeIcon;
