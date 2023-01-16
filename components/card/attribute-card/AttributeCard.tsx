import React from "react";
import { Card } from "react-bootstrap";
import Discovery from "../../../images/resource/Discovery.png";
import {
  AttributeCardBody,
  AttributeCardTitle,
  StyledAttributeCard,
} from "./styles";

interface AttributeCardProps {}

export default function AttributeCard(props: AttributeCardProps) {
  return (
    <StyledAttributeCard>
      <Card.Img variant="top" src={Discovery} />
      <AttributeCardBody>
        <AttributeCardTitle>+1 Discovery</AttributeCardTitle>
      </AttributeCardBody>
    </StyledAttributeCard>
  );
}
