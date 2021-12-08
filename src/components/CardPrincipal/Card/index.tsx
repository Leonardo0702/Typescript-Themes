import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import Pattern from "../../../assets/faviconPattern.png";

import { Container, Title, Content } from "./styles";
import { ALTERNATIVE } from "../../../constants/theme";

const Card: React.FC = () => {
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
        Alguns conteúdos vão te ensinar a alterar o theme entre dark e light
        através de um switch, mas e se você quiser alterar o theme clicando em
        alguma imagem? Seja para um projeto ou trabalho? Este projeto altera o
        theme no clicar do icone <img src={Pattern} alt="icone de mudança" />. A
        ideia é alterar o theme assim que o ícone da Solus for clicado.
      </Content>
    </Container>
  );
};

export default Card;
