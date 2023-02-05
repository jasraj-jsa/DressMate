import { useDisclosure, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import ConfigComponent from "./Config";
import HelpComponent from "./Help";

const NavContainer = styled(motion.div)`
  position: absolute;
  /* left: 50%; */
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  transition: all 0.3s ease;
  /* transform: translateX(-50%); */
  z-index: 6;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? "0" : `calc(-50vh - 4rem)`)};
  }
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  border: none;
  outline: none;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  /* border-end-start-radius: 50%; */
  /* border-end-end-radius: 50%; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0 10rem;
  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const Item = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { isOpen: configIsOpen, onOpen: configOnOpen, onClose: configOnClose } = useDisclosure();

  const { isOpen: helpIsOpen, onOpen: helpOnOpen, onClose: helpOnClose } = useDisclosure();

  return (
    <NavContainer click={+click} initial={{ y: `-100%` }} animate={{ y: 0 }} transition={{ duration: 2, delay: 3 }}>
      <MenuItems drag="y" dragConstraints={{ top: 0, bottom: 70 }} dragElastic={0.05} dragSnapToOrigin>
        <MenuBtn onClick={() => setClick(!click)}>
          <span>MENU</span>
        </MenuBtn>
        <Item whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
        </Item>
        <Item whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
          <Link href="/match" _hover={{ textDecoration: "none" }}>
            Match
          </Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => {
            helpOnOpen();
            setClick(false);
          }}
        >
          <Link _hover={{ textDecoration: "none" }}>Help</Link>
          <HelpComponent isOpen={helpIsOpen} onClose={helpOnClose} />
        </Item>
        <Item whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
          <Link href="/about" _hover={{ textDecoration: "none" }}>
            About
          </Link>
        </Item>

        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => {
            configOnOpen();
            setClick(false);
          }}
        >
          <Link _hover={{ textDecoration: "none" }}>Config</Link>
          <ConfigComponent isOpen={configIsOpen} onClose={configOnClose} />
        </Item>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
