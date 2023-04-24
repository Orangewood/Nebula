import styled from "styled-components";

export const StabilityImageContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StabilityImage = styled.img`
  width: 100%;
  display: flex;
  height: 100%;
`;

export const StabilityText = styled.div`
  display: flex;
  position: absolute;
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 5vw;
`;
