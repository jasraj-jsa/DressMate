import { useColorMode } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/Themes";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/GlobalStyles";
import { Container } from "./components/Global";
import Footer from "./components/Footer";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const ModeIcon = lazy(() => import("./components/ModeIcon"));
const MatchPage = lazy(() => import("./pages/Match"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFound = lazy(() => import("./components/NotFound"));

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
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
