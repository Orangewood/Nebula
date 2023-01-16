import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import Tabs from "react-bootstrap/Tabs";

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

export const StatsTab = styled(Tabs)`
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15%;
  border: none;

  .nav-tabs {
    &:hover {
      border-color: ${(props) => props.theme.mainColor};
    }
  }
  .nav-link.active {
    border-color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    border: 1px solid;
  }
  .nav-link {
    color: ${(props) => props.theme.mainColor};
    border-color: ${(props) => props.theme.mainColor};
    border-left-style: hidden;
    border-top-style: hidden;
    border-right-style: hidden;

    &:hover {
      border-color: ${(props) => props.theme.mainColor};
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.mainColor};
      border: 1px solid;
    }
  }
  button {
    color: ${(props) => props.theme.mainColor};
    &:hover {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;
