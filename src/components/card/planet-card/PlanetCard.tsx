import { Planet } from "../../../models/planets/Planet";
import {
  PlanetCardContainer,
  PlanetCardImg,
  PlanetResourceContainer,
} from "./styles";
import ResourceCardGenerator from "../../../generators/lifeform-cards/ResourceCardGenerator";

interface PlanetCardProps {
  currentPlanet: Planet;
}
export default function PlanetCard(props: PlanetCardProps) {
  const { currentPlanet } = props;
  return (
    <PlanetCardContainer>
      <PlanetCardImg src={currentPlanet.image} />
      {/* <div>{`Temperature: ${currentPlanet.temperature}`}</div>
      <div>{`Name: ${currentPlanet.name}`}</div>
      <div>{`Type: ${currentPlanet.type}`}</div>
      <div>{`Stability: ${currentPlanet.stability}`}</div> */}
      <PlanetResourceContainer>
        {ResourceCardGenerator(currentPlanet.resources)}
      </PlanetResourceContainer>
    </PlanetCardContainer>
  );
}
