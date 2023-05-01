import styled from "styled-components";

export const PlanetCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  min-width: 800px;
  width: 100%;
`;

export const PlanetCardImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const PlanetResourceContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 6vw;
  justify-content: space-evenly;
`;

export const PlanetResourceLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-height: 100%;
`;

export const PlanetResourceRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PlanetCardHeader = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  opacity: 0.6;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.mainColor};
`;
