import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledAttributeCard = styled(Card)`
  display: flex;
  width: ${200 / 16}rem;
  height: ${270 / 16}rem;
  border: 1px solid ${(props) => props.theme.mainColor};
`;

export const AttributeCardTitle = styled(Card.Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;

export const AttributeCardBody = styled(Card.Body)`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;

export const AttributeCardText = styled(Card.Text)`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  font-family: ${(props) => props.theme.fontFamily};
`;
