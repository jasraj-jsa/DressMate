import { motion } from "framer-motion";
import styled from "styled-components";
import { HStack, Link, Text, Icon } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";
import { WebsiteTagline } from "../../constants/content";
import { VideoPath } from "../../constants/paths";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
    font-size: ${(props) => props.theme.fontlg};
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

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1 variants={item}>D</motion.h1>
          <motion.h1 variants={item}>r</motion.h1>
          <motion.h1 variants={item}>e</motion.h1>
          <motion.h1 variants={item}>s</motion.h1>
          <motion.h1 variants={item}>s</motion.h1>
          <motion.h1 variants={item}>M</motion.h1>
          <motion.h1 variants={item}>a</motion.h1>
          <motion.h1 variants={item}>t</motion.h1>
          <motion.h1 variants={item}>e</motion.h1>
        </div>
        <motion.h2
          style={{ alignSelf: "flex-end", textAlign: "center" }}
          variants={item}
          transition={{ duration: 1.5 }}
          dangerouslySetInnerHTML={{ __html: WebsiteTagline.replace(/\n/g, "<br />") }}
        />

        <motion.div variants={item} transition={{ duration: 1.5 }}>
          <HStack position="absolute" right="3" bottom="5" spacing={1.5} fontSize="1.2em">
            <Text>Video</Text>
            <Icon as={FaRegCopyright} />
            <Link href="https://www.youtube.com/@nicolasvasquez1/" isExternal>
              <u>Nicolas Vasquez</u>
            </Link>
          </HStack>
        </motion.div>
      </Title>

      <video src={VideoPath} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
