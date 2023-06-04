import React from "react";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { LifeformEnum } from "../../../../models/lifeform/properties/LifeformEnum";
import {
  LifeformInfo,
  LifeformTitle,
  PlanetInfo,
  StyledLeftCanvas,
} from "./styles";
import { Planet } from "../../../../models/planets/Planet";
import StabilityContainer from "../../../../components/card/stability-container/StabilityContainer";
import TemperatureContainer from "../../../../components/card/temperature-container/TemperatureContainer";

interface LeftPlanetCanvasProps {
  currentPlanet: Planet;
}

export default function LeftPlanetCanvas(props: LeftPlanetCanvasProps) {
  const { currentPlanet } = props;

  //   const getText = (currentLifeForm: Lifeform) => {
  //     return (
  //       <span
  //         key={currentLifeForm.lifeformId.toString()}
  //         aria-label={currentLifeForm?.lifeformId.toString()}
  //         role="article"
  //       >
  //         {currentLifeForm?.description.split("").map(function (char, index) {
  //           return (
  //             <span
  //               aria-hidden="true"
  //               key={index}
  //               style={{ animationDelay: `${0.5 + index / 500}` + "s" }}
  //             >
  //               {char}
  //             </span>
  //           );
  //         })}
  //       </span>
  //     );
  //   };

  return (
    <>
      <StyledLeftCanvas show scroll={false} backdrop={false} placement="start">
        <LifeformTitle>{currentPlanet.name}</LifeformTitle>
        <PlanetInfo>
          <div>
            {currentPlanet.type} {currentPlanet.composition}
          </div>
          {<StabilityContainer planet={currentPlanet} />}
          {<TemperatureContainer planet={currentPlanet} />}
        </PlanetInfo>
      </StyledLeftCanvas>
    </>
  );
}
