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
  margin-bottom: 15px;
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
