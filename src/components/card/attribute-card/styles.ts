import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledAttributeCard = styled(Card)`
  height: 100%;
  max-width: 45%;
  border: 2px solid ${(props) => props.theme.mainColor};
`;

export const AttributeCardTitle = styled(Card.Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.5vh;
  height: 100%;
`;

export const AttributeCardBody = styled(Card.Body)`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
  height: 1vw;
`;

export const AttributeCardText = styled(Card.Text)`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;

export const AttributeCardImage = styled(Card.Img)`
  display: flex;
  height: 100%;
`;
