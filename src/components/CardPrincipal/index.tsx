import React from "react";
import { Container } from "./styles";

import Card from "./Card";
import Main from "./Main";
import ButtonContent from "./ButtonContent";

const CardPrincipal = () => {
  return (
    <Container>
      <Card />
      <Main />
      <ButtonContent />
    </Container>
  );
};

export default CardPrincipal;
