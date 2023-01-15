import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const StyledRightCanvas = styled(Offcanvas)`
  display: flex;
  width: 25% !important;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
`;
