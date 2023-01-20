import HomePage from "./pages/Home";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "./styles/GlobalStyles";
import { dark, light } from "./styles/Themes";
import { useRef, useState } from "react";
import ModeIcon from "./components/ModeIcon";
import MatchPage from "./pages/Match";
import AboutPage from "./pages/AboutPage";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <GlobalStyles />
      <ModeIcon darkMode={darkMode} setDarkMode={setDarkMode} />
      <ThemeProvider theme={darkMode ? dark : light}>
        <AnimatePresence>
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
      </ThemeProvider>
    </>
  );
}

export default App;
