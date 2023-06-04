import ResourceCardGenerator from "../../../generators/lifeform-cards/ResourceCardGenerator";
import { Planet } from "../../../models/planets/Planet";
import StabilityContainer from "../stability-container/StabilityContainer";
import TemperatureContainer from "../temperature-container/TemperatureContainer";
import {
  PlanetCardContainer,
  PlanetCardHeader,
  PlanetCardImg,
  PlanetResourceContainer,
  PlanetResourceLeft,
  PlanetResourceRight,
} from "./styles";

interface PlanetCardProps {
  currentPlanet: Planet;
  onClick: () => void;
}
export default function PlanetCard(props: PlanetCardProps) {
  const { currentPlanet, onClick } = props;
  return (
    <PlanetCardContainer onClick={onClick}>
      <PlanetCardHeader>{currentPlanet.name}</PlanetCardHeader>
      <PlanetCardImg src={currentPlanet.image} />
      {/* <div>{`Temperature: ${currentPlanet.temperature}`}</div>
      <div>{`Name: ${currentPlanet.name}`}</div>
      <div>{`Type: ${currentPlanet.type}`}</div>
      <div>{`Stability: ${currentPlanet.stability}`}</div> */}

      <PlanetResourceContainer>
        {ResourceCardGenerator(currentPlanet.resources)}
        {/* <StabilityContainer planet={currentPlanet} /> */}
        {/* <TemperatureContainer planet={currentPlanet} /> */}
      </PlanetResourceContainer>
    </PlanetCardContainer>
  );
}

{
  /* <PlanetResourceLeft> */
}
{
  /* </PlanetResourceLeft> */
}
{
  /* <PlanetResourceRight> */
}
{
  /* </PlanetResourceRight> */
}
