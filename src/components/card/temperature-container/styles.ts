import styled from "styled-components";

export const TemperatureImageContainer = styled.div`
  display: flex;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`;

export const TemperatureImage = styled.img`
  width: 100%;
  display: flex;
  height: 100%;
`;

export const TemperatureText = styled.div`
  display: flex;
  position: absolute;
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 5vw;
`;
