import { Box, HStack, VStack } from "@chakra-ui/react";
import { Suspense } from "react";
import CoverVideo from "../../components/CoverVideo";
import Disclaimer from "../../components/DisclaimerPopUp";
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
