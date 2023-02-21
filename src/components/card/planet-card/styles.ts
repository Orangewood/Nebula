import styled from "styled-components";

export const PlanetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  align-items: center;
`;

export const PlanetCardImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const PlanetResourceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 20%;
`;
