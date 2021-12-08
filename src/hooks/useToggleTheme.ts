import { useContext } from "react";
import { ThemeContext } from "../context/toggleTheme";

const useToggleTheme = () => {
  const contextUse = useContext(ThemeContext);

  return contextUse;
};

export default useToggleTheme;
