import styled from "styled-components";

export const Rodape = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Span = styled.span``;

export const Paragrafo = styled.p`
  font-weight: bold;
  font-size: 14px;
`;
