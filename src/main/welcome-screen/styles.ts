import styled from "styled-components";

export const HomeLogo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  img {
    width: 50%;
    height: 100%;
    pointer-events: none;
  }
`;

export const NebulaText = styled.span`
  display: flex;
  color: ${(props) => props.theme.mainColor};
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  z-index: 999;
  font-size: 8vw;
  font-family: ${(props) => props.theme.fontFamily};
`;
export const PlayButton = styled.button`
  display: flex;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  font-size: 2vw;
  font-family: ${(props) => props.theme.fontFamily};
  border: none;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Test = styled.div`
  display: flex;
  color: ${(props) => props.theme.mainColor};
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 999;
  font-size: 2vw;
`;

export const LifeformTextContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.mainColor};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -35%);
  z-index: 999;
  font-size: 1.8vw;
  opacity: 0;
  animation: fadeIn 1.5s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  font-family: ${(props) => props.theme.fontFamily};
`;
