import { Flex, Grid, GridItem, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRegCopyright, FaHeart } from "react-icons/fa";

const styles = {
  position: "absolute",
  left: "3",
  right: "0",
  bottom: "0.5",
  zIndex: "5",
};

const itemVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 4, duration: 2 } },
};
const CustomItem = ({ children }) => (
  <Flex as={motion.div} variants={itemVariant} initial="initial" animate="animate">
    <HStack spacing={1.5}>{children}</HStack>
  </Flex>
);

const Footer = () => {
  return (
    <Grid sx={styles} templateColumns="1.5fr 2fr">
      <GridItem>
        <CustomItem>
          <Text>Made with</Text>
          <Icon as={FaHeart} color="red" />
          <Text>By</Text>
          <Link href="https://www.linkedin.com/in/jasraj747/" isExternal>
            <u>Jasraj</u>
          </Link>
        </CustomItem>
      </GridItem>
      <GridItem>
        <CustomItem>
          <Icon as={FaRegCopyright} />
          <Text fontSize="sm">2023 Copyright: Dress Mate</Text>
        </CustomItem>
      </GridItem>
    </Grid>
  );
};

export default Footer;
