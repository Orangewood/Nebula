import React, { useState } from "react";
import {
  CarouselButton,
  CarouselCaption,
  CarouselItem,
  StyledCarousel,
} from "./styles";
import { Lifeform, lifeformList } from "../../models/lifeform/Lifeform";
import LeftCanvas from "./components/left-canvas/LeftCanvas";
import RightCanvas from "./components/right-canvas/RightCanvas";
import LifeformStats from "../../stats/LifeformStats";
import { ScreenSwitch } from "../../models/screen/Screen";
import { Planet } from "../../models/planets/Planet";
import LeftPlanetCanvas from "./components/left-canvas/LeftPlanetCanvas";
import RightPlanetCanvas from "./components/right-canvas/RightPlanetCanvas";

interface PlanetSelectScreenProps {
  planet: Planet;
}

export default function PlanetSelectScreen(props: PlanetSelectScreenProps) {
  const { planet } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [selectedLifeform, setSelectedLifeform] = useState<number | null>(null);
  const currentLifeFormId = activeStep + 1;

  const onChange = (currentSlide: number) => {
    setActiveStep(currentSlide);
  };

  const handleSelect = () => {
    // todo: error message/disable, set lifeform with redux
  };

  return (
    <>
      <StyledCarousel
        activeIndex={activeStep}
        onSelect={onChange}
        interval={null}
        touch
        fade
      >
        <CarouselItem>
          <img src={planet.image} alt={planet.name} key={planet.name} />
          {/* <CarouselCaption>
            <CarouselButton onClick={() => handleSelect()}>
              Select
            </CarouselButton>
          </CarouselCaption> */}
        </CarouselItem>
      </StyledCarousel>
      <LeftPlanetCanvas currentPlanet={planet} />
      <RightPlanetCanvas currentPlanet={planet} />
    </>
  );
}
