import React from "react";
import { Card } from "react-bootstrap";
import Discovery from "../../../images/resource/Discovery.png";
import Energy from "../../../images/resource/Energy.png";
import Fuel from "../../../images/resource/Fuel.png";
import Life from "../../../images/resource/Life.png";
import Metal from "../../../images/resource/Metal.png";
import Ruins from "../../../images/resource/Ruins.png";
import Physics from "../../../images/actions/research/Physics.png";
import Chemistry from "../../../images/actions/research/Chemistry.png";
import Astronomy from "../../../images/actions/research/Astronomy.png";
import Robotics from "../../../images/actions/research/Robotics.png";
import Biology from "../../../images/actions/research/Biology.png";
import Machinery from "../../../images/actions/engineer/Machinery.png";
import Efficiency from "../../../images/actions/engineer/Efficiency.png";
import Weaponry from "../../../images/actions/engineer/Weaponry.png";
import Observe from "../../../images/actions/exploration/Observe.png";
import Movement from "../../../images/actions/exploration/Movement.png";
import Build from "../../../images/actions/production/Build.png";
import Conscript from "../../../images/actions/production/Conscript.png";
import Reproduce from "../../../images/actions/production/Reproduce.png";
import {
  AttributeCardBody,
  AttributeCardTitle,
  StyledAttributeCard,
} from "./styles";

interface AttributeCardProps {
  attributeKey: string;
}

export default function AttributeCard(props: AttributeCardProps) {
  const { attributeKey } = props;

  const getModule = (key: string) => {
    switch (key) {
      case "Discovery":
        return Discovery;
      case "Energy":
        return Energy;
      case "Fuel":
        return Fuel;
      case "Life":
        return Life;
      case "Metal":
        return Metal;
      case "Ruins":
        return Ruins;
      case "Physics":
        return Physics;
      case "Chemistry":
        return Chemistry;
      case "Astronomy":
        return Astronomy;
      case "Robotics":
        return Robotics;
      case "Biology":
        return Biology;
      case "Machinery":
        return Machinery;
      case "Efficiency":
        return Efficiency;
      case "Weaponry":
        return Weaponry;
      case "Observe":
        return Observe;
      case "Movement":
        return Movement;
      case "Build":
        return Build;
      case "Conscript":
        return Conscript;
      case "Reproduce":
        return Reproduce;
    }
  };

  return (
    <>
      <StyledAttributeCard>
        <Card.Img variant="top" src={getModule(attributeKey)} />
        <AttributeCardBody>
          <AttributeCardTitle>{`+1 ${attributeKey}`}</AttributeCardTitle>
        </AttributeCardBody>
      </StyledAttributeCard>
    </>
  );
}
