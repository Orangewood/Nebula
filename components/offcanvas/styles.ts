import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const StyledDrawCanvas = styled(Offcanvas)`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;

export const DrawInfo = styled(Offcanvas.Body)`
  display: flex;
  font-size: 1vw;
  border: 1px solid ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;
