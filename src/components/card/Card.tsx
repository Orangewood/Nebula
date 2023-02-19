import React from "react";
import { Planet } from "../../models/planets/Planet";
import { CardName, CardImage, GameCard } from "./styles";
import test from "../../images/planets/gaseous/20.png";
// import CardResources from "./resources/CardResources";

interface CardProps {
  user?: any;
  planet: Planet;
}

export default function Card(props: CardProps) {
  const { planet } = props;
  return (
    <div></div>
    // <GameCard>
    //   <CardImage src={test} />
    //   <CardName>{planet.name}</CardName>
    //   <CardResources resources={planet.resources}></CardResources>
    // </GameCard>
  );
}
