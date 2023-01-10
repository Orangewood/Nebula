import React, { useState } from "react";
import {
  CarouselButton,
  CarouselCaption,
  CarouselItem,
  StyledCarousel,
} from "./styles";
import LifeformCanvas from "../../components/off-canvas/LifeformCanvas";
import { LifeformList } from "../../models/lifeform/Lifeform";

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

  const getCurrentLifeForm = LifeformList.find(
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
        {LifeformList.map((lifeform) => (
          <CarouselItem>
            <img
              src={lifeform.imgPath}
              alt={lifeform.text}
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
      <LifeformCanvas
        showCanvas={showMenu}
        onClose={() => setShowMenu(false)}
        currentLifeForm={getCurrentLifeForm}
      />
    </>
  );
}
