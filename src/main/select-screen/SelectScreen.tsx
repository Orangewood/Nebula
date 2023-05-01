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

interface SelectScreenProps {
  onLifeformSelect: (screen: ScreenSwitch | null) => void;
}

export default function SelectScreen(props: SelectScreenProps) {
  const { onLifeformSelect } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [selectedLifeform, setSelectedLifeform] = useState<number | null>(null);
  const currentLifeFormId = activeStep + 1;

  const onChange = (currentSlide: number) => {
    setActiveStep(currentSlide);
  };

  const getCurrentLifeForm = lifeformList.find(
    (lifeform) => lifeform.lifeformId === currentLifeFormId
  );

  const handleSelect = () => {
    // todo: error message/disable, set lifeform with redux
    setSelectedLifeform(currentLifeFormId);
    onLifeformSelect(ScreenSwitch.CardTest);
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
        {lifeformList.map((lifeform, index) => (
          <CarouselItem>
            <img
              src={lifeform.imgPath}
              alt={lifeform.description}
              key={lifeform.lifeformId}
            />
            <CarouselCaption>
              <CarouselButton onClick={() => handleSelect()}>
                Select
              </CarouselButton>
            </CarouselCaption>
          </CarouselItem>
        ))}
      </StyledCarousel>
      <LeftCanvas currentLifeForm={getCurrentLifeForm!} />
      <RightCanvas currentLifeForm={getCurrentLifeForm!} />
    </>
  );
}
