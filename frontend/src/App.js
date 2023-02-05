import { useColorMode } from "@chakra-ui/react";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/Themes";
import ModeIcon from "./components/ModeIcon";
import MatchPage from "./pages/Match";
import AboutPage from "./pages/AboutPage";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/GlobalStyles";
import { Container } from "./components/Global";
import NotFound from "./components/NotFound";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <GlobalStyles />
      <ModeIcon mode={colorMode} toggleMode={toggleColorMode} />
      <ThemeProvider theme={colorMode === "dark" ? dark : light}>
        <Container>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
