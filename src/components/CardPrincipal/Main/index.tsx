import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container, Title, Content } from "./styles";
import { ALTERNATIVE } from "../../../constants/theme";

const Main: React.FC = () => {
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
        A ideia é criar uma condição onde um theme seja aplicado em determinada
        situação. Neste projeto em questão, nós estamos utilizando como condição
        o title, onde ele começa com um theme, No click do icon nós acionamos a
        condição para alterar o theme, setando as cores que serão aplicadas,
        deste modo é possível direcionar a cor em todos os elementos desejavéis.
      </Content>
    </Container>
  );
};

export default Main;
