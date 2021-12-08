import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ALTERNATIVE } from "../../constants/theme";
import { Rodape, Span, Paragrafo } from "./styles";

const Footer: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return (
    <Rodape>
      {title === ALTERNATIVE ? (
        <Paragrafo>
          Feito no intuito de auxiliar todos os devs{" "}
          <Span role="img" aria-label="coração">
            ❤.
          </Span>
        </Paragrafo>
      ) : (
        <Paragrafo>
          Em caso de dÚvidas quebre o CÓDIGO{" "}
          <Span role="img" aria-label="coração">
            💻🪓.
          </Span>
        </Paragrafo>
      )}
    </Rodape>
  );
};

export default Footer;
