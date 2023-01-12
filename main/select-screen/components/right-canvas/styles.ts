import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const StyledRightCanvas = styled(Offcanvas)`
  display: flex;
  width: 25% !important;
  background-color: #181a1b;
  color: #faf0dd;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 2em;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #faf0dd 100%, #faf0dd 100%),
    linear-gradient(to bottom, #faf0dd 100%, #faf0dd 100%),
    linear-gradient(to right, #faf0dd 100%, #faf0dd 100%),
    linear-gradient(to bottom, #faf0dd 100%, #faf0dd 100%);
  background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  animation: bg 1.25s cubic-bezier(0.19, 1, 0.22, 1) 1;
  animation-play-state: paused;
  @keyframes bg {
    0% {
      background-size: 0 3px, 3px 0, 0 3px, 3px 0;
    }
    25% {
      background-size: 100% 3px, 3px 0, 0 3px, 3px 0;
    }
    50% {
      background-size: 100% 3px, 3px 100%, 0 3px, 3px 0;
    }
    75% {
      background-size: 100% 3px, 3px 100%, 100% 3px, 3px 0;
    }
    100% {
      background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
    }
  }
`;
