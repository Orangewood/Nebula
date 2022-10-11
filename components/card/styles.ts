import styled from "styled-components";

export const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${480 / 16}rem;
  height: 45rem;
  box-shadow: 0 ${4 / 16}rem ${8 / 16}rem 0 rgba(0, 0, 0, 0.2);
`;

export const CardImage = styled.img`
  display: flex;
  height: ${480 / 16}rem;
`;

export const CardName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Turret Road", cursive;
  font-size: 1.5rem;
`;

export const CardComposition = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
