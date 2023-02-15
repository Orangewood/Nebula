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

interface SelectScreenProps {
  onLifeformSelect: () => void;
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

  const handleSelect = (currentLifeform?: Lifeform) => {
    // todo: error message/disaable, set lifeform with redux
    console.log("currentLifeform", currentLifeform);
    if (!currentLifeform) return;
    setSelectedLifeform(currentLifeform.lifeformId);
    onLifeformSelect();
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
        {lifeformList.map((lifeform) => (
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
