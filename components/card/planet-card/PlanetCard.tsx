import React from "react";
import { Planet } from "../../../models/planets/Planet";
import { PlanetCardContainer } from "./styles";
const okay = "../../../images/planets/gaseous/22.png";

interface PlanetCardProps {
  currentPlanet: Planet;
}
export default function PlanetCard(props: PlanetCardProps) {
  const { currentPlanet } = props;
  //   console.log(currentPlanet.image);
  //   console.log((currentPlanet.image as string).toString());
  //   const what = require(`${currentPlanet.image}`);
  return (
    <PlanetCardContainer>
      <img src={require(okay)} />
    </PlanetCardContainer>
  );
}

//https://stackoverflow.com/questions/17446844/dynamic-require-in-requirejs-getting-module-name-has-not-been-loaded-yet-for-c
