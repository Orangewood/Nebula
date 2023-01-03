import React from "react";
import PlanetGenerator from "../../../generators/PlanetGenerator";
import Card from "../Card";
import { StyledCardContainer } from "./styles";

const testPlanets = PlanetGenerator(5);

export default function CardContainer() {
  return (
    <StyledCardContainer>
      {testPlanets.map((planet) => {
        return <Card planet={planet} />;
      })}
      ;
    </StyledCardContainer>
  );
}
