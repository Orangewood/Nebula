import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const WelcomeScreenContainer = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  height: 100vh;
`;

export const HomeLogo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  img {
    width: 50%;
    height: 100%;
  }
`;

export const NebulaText = styled.span`
  display: flex;
  color: #faf0dd;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  z-index: 999;
  font-size: 9vw;
  font-family: "Cinzel Decorative", cursive;
`;

export const PlayButton = styled(Button)`
  display: flex;
  color: #faf0dd;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 999;
  font-size: 2vw;
  font-family: "Cinzel Decorative", cursive;
  opacity: 1;
`;
