import React, { useContext } from "react";

import { ThemeContext } from "styled-components";

import { ALTERNATIVE } from "../../../constants/theme";

import {
  ButtonPrimary,
  ButtonSecundary,
  Container,
  Content,
  Title,
} from "./styles";

const ButtonContent: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Title>
        Como mudar o tema com icone e não o switch comum!
        {title === ALTERNATIVE ? (
          <span role="img" aria-label="ovelha">
            {" "}
            🥈
          </span>
        ) : (
          <span role="img" aria-label="ovelha">
            {" "}
            🥇
          </span>
        )}
      </Title>

      <Content>
        Os themes podem ser aplicados em diversos elementos, como por exemplo um
        botão, neste caso nós temos dois botões que recebem cores diferentes
        baseadas no theme.
      </Content>
      <ButtonPrimary>Primary</ButtonPrimary>
      <ButtonSecundary>Secundary</ButtonSecundary>
    </Container>
  );
};

export default ButtonContent;
