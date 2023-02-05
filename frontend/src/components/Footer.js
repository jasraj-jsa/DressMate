import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegCopyright, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const styles = {
  position: "absolute",
  left: "5",
  bottom: "0",
  zIndex: "5",
  justifyContent: "center",
  alignItems: "center",
};

const itemVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 4, duration: 2 } },
};
const CustomItem = ({ children, style }) => (
  <Flex sx={styles} as={motion.div} variants={itemVariant} initial="initial" animate="animate" {...style}>
    <HStack spacing={1.5}>{children}</HStack>
  </Flex>
);

const Footer = () => {
  return (
    <AnimatePresence>
      <CustomItem>
        <Text>Made with</Text>
        <Icon as={FaHeart} color="red" />
        <Text>By</Text>
        <Link>@JasRaj</Link>
      </CustomItem>
      <CustomItem style={{ right: "0" }}>
        <Icon as={FaRegCopyright} />
        <Text fontSize="sm">2023 Copyright: Dress Mate</Text>
      </CustomItem>
    </AnimatePresence>
  );
};

export default Footer;
