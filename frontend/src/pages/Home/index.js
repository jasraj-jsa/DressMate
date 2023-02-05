import { Box } from "@chakra-ui/react";
import CoverVideo from "./CoverVideo";
import Disclaimer from "./DisclaimerPopUp";
const HomePage = () => {
  return (
    <Box>
      <CoverVideo />
      <Disclaimer />
    </Box>
  );
};

export default HomePage;
