import { Card, CardBody, CardHeader, Flex, Text, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AboutPaths } from "../../constants/paths";
import { AboutPageContent } from "../../constants/content";
import { AboutStyles } from "../../constants/styles";
import { CardStyles } from "../../styles/Themes";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontxxxl};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;
    text-transform: capitalize;
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AboutPage = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex justifyContent="center" alignItems="center">
      <Card sx={CardStyles[colorMode]} minHeight="80vh">
        <CardHeader>
          <Title variants={container} initial="hidden" animate="show">
            <div>
              <motion.h2 variants={item}>A</motion.h2>
              <motion.h2 variants={item}>b</motion.h2>
              <motion.h2 variants={item}>o</motion.h2>
              <motion.h2 variants={item}>u</motion.h2>
              <motion.h2 variants={item}>t</motion.h2>
            </div>
          </Title>
        </CardHeader>

        <CardBody>
          <Grid templateColumns="repeat(4, 1fr)" mt={20} mb={10}>
            <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={1}>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 3 } }}
                whileHover={{ scale: 1.2 }}
              >
                <LazyLoadImage src={AboutPaths["Agnes"]} style={AboutStyles["Agnes"]} alt="Agnes" />
              </motion.div>
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={2} mt={5}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                <Text dangerouslySetInnerHTML={{ __html: AboutPageContent.replace(/\n/g, "<br />") }} />
              </motion.div>
            </GridItem>
            <GridItem w="100%" display="flex" justifyContent="center" alignItems="center" colSpan={1}>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 3 } }}
                whileHover={{ scale: 1.5 }}
              >
                <LazyLoadImage src={AboutPaths["Batman"]} style={AboutStyles["Batman"]} alt="Batman" />
              </motion.div>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default AboutPage;
