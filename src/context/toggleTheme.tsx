import React, { createContext } from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";

import pattern from "../styles/themes/pattern";
import alternative from "../styles/themes/alternative";
import { KEY_LOCAL_STORAGE_THEME } from "../constants/localStorage";
import { PATTERN } from "../constants/theme";

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeContextProvider: React.FC = ({ children }) => {
  // o DefaultTheme é o formato que o hook terá, pois passamos o T
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    KEY_LOCAL_STORAGE_THEME,
    pattern
  );

  function toggleTheme() {
    setTheme(theme.title === PATTERN ? alternative : pattern);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
