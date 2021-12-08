import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container, Content } from "./styles";

import { ALTERNATIVE } from "../../constants/theme";
import useToggleTheme from "../../hooks/useToggleTheme";
import Switcher from "../Switcher";

const Header: React.FC = () => {
  const { title } = useContext(ThemeContext);

  const { toggleTheme } = useToggleTheme();

  return (
    <Container>
      <Content>
        Change Icons and Theme!
        <span role="img" aria-label="ovelha">
          {" "}
          🏆
        </span>
      </Content>
      <Switcher onChange={toggleTheme} checked={title === ALTERNATIVE} />
    </Container>
  );
};

export default Header;
