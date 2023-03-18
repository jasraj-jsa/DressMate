import { Spinner } from "@chakra-ui/react";

const LoadingSpinner = (props) => (
  <Spinner size="xl" position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" {...props} mb="50%" />
);

export default LoadingSpinner;
