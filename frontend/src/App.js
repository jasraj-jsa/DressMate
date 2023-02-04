import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { dark, light } from "./styles/Themes";
import ModeIcon from "./components/ModeIcon";
import MatchPage from "./pages/Match";
import AboutPage from "./pages/AboutPage";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { useColorMode } from "@chakra-ui/react";
import GlobalStyles from "./styles/GlobalStyles";
import { Container, DarkOverlay } from "./styles/GlobalComponents";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <GlobalStyles />
      <ModeIcon mode={colorMode} toggleMode={toggleColorMode} />
      <ThemeProvider theme={colorMode === "dark" ? dark : light}>
        <Container>
          <DarkOverlay />
          <AnimatePresence mode="initial">
            <Logo />
            <Navbar />
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
              </Route>
              <Route path="/match">
                <Route index element={<MatchPage />} />
              </Route>
              <Route path="/about">
                <Route index element={<AboutPage />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
