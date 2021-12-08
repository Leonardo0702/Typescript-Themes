import styled from "styled-components";

export const Toggle = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const Icons = styled.a``;

export const IconePattern = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  // display: ${(main) => (main.title === "main" ? "block" : "none")};
`;

export const IconeAlternative = styled.img`
  height: 1.3rem;
  width: 1.3rem;
  // display: ${(main) => (main.title === "main" ? "none" : "block")};
`;
