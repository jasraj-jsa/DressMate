import { motion } from "framer-motion";
import { Button, Icon, Tooltip } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
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
      delay: 2,
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
const ModeIcon = ({ mode, toggleMode }) => {
  return (
    <Container>
      <motion.path variants={pathVariants} initial="initial" animate="animate">
        <Tooltip label={mode === "dark" ? "Light Mode" : "Dark Mode"}>
          <Button
            variant="outline"
            colorScheme={mode === "dark" ? "white" : "black"}
            onClick={toggleMode}
            rounded="full"
          >
            <Icon as={mode === "dark" ? MdOutlineLightMode : MdOutlineDarkMode} size="lg" boxSize="1.3em" />
          </Button>
        </Tooltip>
      </motion.path>
    </Container>
  );
};

export default ModeIcon;
