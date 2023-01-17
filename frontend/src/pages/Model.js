import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ModelPage = () => {
  return (
    <VStack spacing={1}>
      <motion.div animate={{ y: [0, 150, 0, 150, 0] }} transition={{ duration: 5 }}>
        <motion.div transition={{ duration: 3 }} whileHover={{ y: [0, 50, 0, 50, 0], scale: 1.1 }}>
          <img src="/Agnes.svg" />
        </motion.div>
      </motion.div>
      <motion.div animate={{ y: [0, 150, 0, 150, 0] }} transition={{ duration: 5 }}>
        <motion.div transition={{ duration: 3 }} whileHover={{ y: [0, 50, 0, 50, 0], scale: 1.1 }}>
          <img src="/Batman.svg" height="300px" />
        </motion.div>
      </motion.div>
      <motion.div animate={{ y: [0, 150, 0, 150, 0] }} transition={{ duration: 5 }}>
        <motion.div transition={{ duration: 3 }} whileHover={{ y: [0, 50, 0, 50, 0], scale: 1.1 }}>
          <img src="/batman2.png" />
        </motion.div>
      </motion.div>
    </VStack>
  );
};

export default ModelPage;
