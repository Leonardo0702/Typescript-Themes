import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import CardPrincipal from "./components/CardPrincipal";
import Footer from "./components/Footer";

import useToggleTheme from "./hooks/useToggleTheme";

function App() {
  const { theme } = useToggleTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <CardPrincipal />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
