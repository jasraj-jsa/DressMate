import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import CoverVideo from "./CoverVideo";
import Disclaimer from "./DisclaimerPopUp";
const HomePage = () => {
  return (
    <Box>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CoverVideo />
        <Disclaimer />
      </Suspense>
    </Box>
  );
};

export default HomePage;
