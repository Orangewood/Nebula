import React from "react";
import { Card } from "react-bootstrap";
import Discovery from "../../../images/resource/Discovery.png";
import { Lifeform, LifeformList } from "../../../models/lifeform/Lifeform";
import {
  AttributeCardBody,
  AttributeCardTitle,
  StyledAttributeCard,
} from "./styles";

interface AttributeCardProps {
  cardList: CardType[];
}

type CardType = Omit<Lifeform, "lifeformId" | "imgPath" | "text">;
const CardList = LifeformList.map(
  (lifeform: Lifeform) =>
    ({
      resources: lifeform.resources,
      research: lifeform.research,
      explore: lifeform.explore,
      engineer: lifeform.engineer,
      production: lifeform.production,
    } as CardType)
);

export default function AttributeCard(props: AttributeCardProps) {
  // const { cardList } = props;

  // cardList.forEach((cardType: CardType) => {
  //   let k: keyof CardType;
  //   for (k in cardType) {
  //     let test = cardType[k]

    
  // });
  return (
    <StyledAttributeCard>
      <Card.Img variant="top" src={Discovery} />
      <AttributeCardBody>
        <AttributeCardTitle>+1 Discovery</AttributeCardTitle>
      </AttributeCardBody>
    </StyledAttributeCard>
  );
}
