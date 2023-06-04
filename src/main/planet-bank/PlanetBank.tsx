import React from "react";
import CardContainer from "../../components/card/card-container/CardContainer";
import PlanetCard from "../../components/card/planet-card/PlanetCard";
import DrawCanvas from "../../components/offcanvas/DrawCanvas";
import PlanetGenerator from "../../generators/PlanetGenerator";
import { DrawContainer } from "./styles";
import { Planet } from "../../models/planets/Planet";

interface PlanetBankProps {
  onPlanetClick: (selectedPlanet: Planet) => void;
}
const testPlanets = PlanetGenerator(50);

export default function PlanetBank(props: PlanetBankProps) {
  const { onPlanetClick } = props;
  return (
    <DrawContainer>
      <DrawCanvas>
        <>
          {testPlanets.map((planet) => {
            return (
              <PlanetCard
                currentPlanet={planet}
                onClick={() => onPlanetClick(planet)}
              />
            );
          })}
        </>
      </DrawCanvas>
    </DrawContainer>
  );
}
