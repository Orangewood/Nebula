import React from "react";
import CardContainer from "../../components/card/card-container/CardContainer";
import PlanetCard from "../../components/card/planet-card/PlanetCard";
import DrawCanvas from "../../components/offcanvas/DrawCanvas";
import PlanetGenerator from "../../generators/PlanetGenerator";
import { DrawContainer } from "./styles";

interface DrawScreenProps {}
const testPlanets = PlanetGenerator(100);

export default function DrawScreen(props: DrawScreenProps) {
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
