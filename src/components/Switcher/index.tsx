import React from "react";
import { Toggle, Icons, IconePattern, IconeAlternative } from "./styles";
import Pattern from "../../assets/faviconPattern.png";
import Alternative from "../../assets/faviconAlternative.png";

interface Props {
  onChange: () => void;
  checked: boolean;
}

const Switcher: React.FC<Props> = ({ onChange, checked }) => {
  return (
    <Toggle>
      <Icons onClick={onChange}>
        {checked ? (
          <IconePattern src={Pattern} alt="Tema Princiapl" />
        ) : (
          <IconeAlternative src={Alternative} alt="Tema Alternativo" />
        )}
      </Icons>
    </Toggle>
  );
};

export default Switcher;
