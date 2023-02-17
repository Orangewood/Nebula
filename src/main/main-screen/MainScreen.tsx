import React from "react";
import CardContainer from "../../components/card/card-container/CardContainer";
import PlanetCard from "../../components/card/planet-card/PlanetCard";
import DrawCanvas from "../../components/offcanvas/DrawCanvas";
import PlanetGenerator from "../../generators/PlanetGenerator";
import { DrawContainer } from "./styles";

interface MainScreenProps {}
const testPlanets = PlanetGenerator(5);

export default function MainScreen(props: MainScreenProps) {
  return (
    <DrawContainer>
      <DrawCanvas>
        <>
          {testPlanets.map((planet) => {
            return <PlanetCard currentPlanet={planet} />;
          })}
        </>
      </DrawCanvas>
    </DrawContainer>
  );
}
