import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 100px;
  padding: 40px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;

  animation: moveText 1.3s forwards;

  @keyframes moveText {
    0% {
      transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
      transform: translateY(0) rotateY(0);
      opacity: 1;
    }
  }
`;
export const Title = styled.h1`
  animation: moveText 1.3s forwards;

  @keyframes moveText {
    0% {
      transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
      transform: translateY(0) rotateY(0);
      opacity: 1;
    }
  }
`;

export const Content = styled.p`
  margin-top: 10px;
  font-size: 16px;
  animation: moveText 1.5s forwards;

  @keyframes moveText {
    0% {
      transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
      transform: translateY(0) rotateY(0);
      opacity: 1;
    }
  }
`;

export const ButtonPrimary = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 10px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  background-color: ${(props) => props.theme.colors.background_secundary};
  color: ${(props) => props.theme.colors.text};
  opacity: 1;
  transition: all ease 0.2;
  cursor: pointer;
  animation: moveText 1.5s forwards;

  @keyframes moveText {
    0% {
      transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
      transform: translateY(0) rotateY(0);
      opacity: 1;
    }
  }
`;

export const ButtonSecundary = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 10px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.text};
  opacity: 1;
  transition: all ease 0.2;
  cursor: pointer;
  animation: moveText 1.5s forwards;

  @keyframes moveText {
    0% {
      transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
      transform: translateY(0) rotateY(0);
      opacity: 1;
    }
  }
`;
