import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const StyledDrawCanvas = styled(Offcanvas)`
  display: flex;
  height: 55% !important;
`;

export const DrawCanvasHeader = styled(Offcanvas.Header)`
  button {
    color: ${(props) => props.theme.mainColor};
  }
`;

export const DrawInfo = styled(Offcanvas.Body)`
  display: flex;
  font-size: 1vw;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
