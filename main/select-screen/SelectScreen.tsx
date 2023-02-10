import React, { useState } from "react";
import {
  CarouselButton,
  CarouselCaption,
  CarouselItem,
  StyledCarousel,
} from "./styles";
import { lifeformList } from "../../models/lifeform/Lifeform";
import LeftCanvas from "./components/left-canvas/LeftCanvas";
import RightCanvas from "./components/right-canvas/RightCanvas";

interface SelectScreenProps {}

export default function SelectScreen(props: SelectScreenProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const currentLifeFormId = activeStep + 1;

  const onChange = (currentSlide: number) => {
    setActiveStep(currentSlide);
  };

  const handleClickIcon = () => {
    if (showMenu) setShowMenu(false);
  };

  const getCurrentLifeForm = lifeformList.find(
    (lifeform) => lifeform.lifeformId === currentLifeFormId
  );
  return (
    <>
      <StyledCarousel
        activeIndex={activeStep}
        onSelect={onChange}
        interval={null}
        touch
        onSlide={handleClickIcon}
      >
        {lifeformList.map((lifeform) => (
          <CarouselItem>
            <img
              src={lifeform.imgPath}
              alt={lifeform.description}
              key={lifeform.lifeformId}
            />
            <CarouselCaption>
              <CarouselButton onClick={() => setShowMenu(!showMenu)}>
                Select
              </CarouselButton>
            </CarouselCaption>
          </CarouselItem>
        ))}
      </StyledCarousel>
      <LeftCanvas currentLifeForm={getCurrentLifeForm} />
      <RightCanvas currentLifeForm={getCurrentLifeForm!} />
    </>
  );
}
