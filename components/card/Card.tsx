import React from "react";
import { Planet } from "../../models/planets/Planet";
import { CardName, CardImage, GameCard } from "./styles";
import test from "../../images/planets/gaseous/20.png";

interface CardProps {
  user?: any;
  planet: Planet;
}

export default function Card(props: CardProps) {
  const { planet } = props;
  return (
    <GameCard>
      <CardImage src={test} />
      <CardName>{planet.name}</CardName>
      <ul>
        {planet.resources.map((a) => {
          return <li>{a}</li>;
        })}
      </ul>
    </GameCard>
  );
}
