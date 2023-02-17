import styled from "styled-components";

export const PlanetCardContainer = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
`;
