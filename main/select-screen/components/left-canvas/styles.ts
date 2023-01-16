import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const StyledLeftCanvas = styled(Offcanvas)`
  display: flex;
  width: 25% !important;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;
export const LifeformTitle = styled(Offcanvas.Title)`
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15%;
`;
export const LifeformInfo = styled(Offcanvas.Body)`
  display: flex;
  font-size: 1vw;;
  border: 1px solid ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
  margin-right: ${20 / 16}rem;
  margin-left: ${20 / 16}rem;
  margin-bottom: ${20 / 16}rem;
`;
