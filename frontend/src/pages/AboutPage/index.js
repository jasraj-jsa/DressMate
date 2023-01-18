import { Box, Card, CardBody, CardHeader, Heading, Flex, HStack, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

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
  color: ${(props) => props.theme.text};
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
      delayChildren: 1, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AboutPage = () => {
  return (
    <Container>
      <Suspense fallback={<h1>Loading...</h1>}>
        <DarkOverlay />

        <Flex
          position="absolute"
          justifyContent="center"
          alignItems="center"
          top="10rem"
          bg="black"
          left="5rem"
          right="5rem"
        >
          <Card bg="black">
            <CardHeader>
              <Title variants={container} initial="hidden" animate="show">
                <div>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
                    A
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
                    b
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
                    o
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
                    u
                  </motion.h2>
                  <motion.h2 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
                    t
                  </motion.h2>
                </div>
                {/* <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          Dress the part!
          
        </motion.h2> */}
              </Title>
            </CardHeader>
            {/* <CardHeader>About</CardHeader> */}
            <HStack spacing={2} display="flex" justifyContent="center" alignItems="center">
              <motion.div animate={{ y: [0, 150, 0, 150, 0] }} transition={{ duration: 5 }}>
                <motion.div transition={{ duration: 3 }} whileHover={{ y: [0, 50, 0, 50, 0], scale: 1.1 }}>
                  <img src="/Agnes.svg" />
                </motion.div>
              </motion.div>
              <CardBody>
                <Text color="white">
                  WHEN IS A PLAINTIFF ENTITLED TO RECOVER? A. A plaintiff who was injured as as result of some negligent
                  conduct on the part of a defendant is entitled to recover compensation for such injury from that
                  defendant.A plaintiff is entitled to a verdict if jury finds1. That a defendant was negligent, and2.
                  That such negligence was a cause of injury to the plaintiff. Q. WHAT IS NEGLIGENCE? Negligence is the
                  doing of something which a reasonably prudent person would not do, or the failure to do something
                </Text>
              </CardBody>
              <motion.div animate={{ y: [0, 150, 0, 150, 0] }} transition={{ duration: 5 }}>
                <motion.div transition={{ duration: 3 }} whileHover={{ y: [0, 50, 0, 50, 0], scale: 1.1 }}>
                  {/* <img src="/batman1.png" /> */}
                </motion.div>
              </motion.div>
            </HStack>
          </Card>
        </Flex>
      </Suspense>
    </Container>
  );
};

export default AboutPage;
