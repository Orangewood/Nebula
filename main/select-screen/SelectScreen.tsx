import React, { useRef, useState } from "react";
import Ameoba from "../../images/lifeform/Aemoba.png";
import Alien from "../../images/lifeform/Alien.png";
import Cephlapod from "../../images/lifeform/Cephlapod.png";
import Cloud from "../../images/lifeform/Cloud.png";
import Frozen from "../../images/lifeform/Frozen.png";
import Fungus from "../../images/lifeform/Fungus.png";
import Human from "../../images/lifeform/Human.png";
import Insect from "../../images/lifeform/Insect.png";
import Virus from "../../images/lifeform/Virus.png";
import Tree from "../../images/lifeform/Tree.png";
import {
  CarouselButton,
  CarouselCaption,
  CarouselItem,
  StyledCarousel,
} from "./styles";
import LifeformCanvas from "../../components/off-canvas/LifeformCanvas";

interface SelectScreenProps {}

const images = [
  {
    label: "Alien",
    imgPath: Alien,
    text: "test",
  },
  {
    label: "Ameoba",
    imgPath: Ameoba,
    text: "test",
  },
  {
    label: "Cephlapod",
    imgPath: Cephlapod,
    text: "test",
  },
  {
    label: "Cloud",
    imgPath: Cloud,
    text: "test",
  },
  {
    label: "Frozen",
    imgPath: Frozen,
    text: "test",
  },
  {
    label: "Fungus",
    imgPath: Fungus,
    text: "test",
  },
  {
    label: "Human",
    imgPath: Human,
    text: "test",
  },
  {
    label: "Insect",
    imgPath: Insect,
    text: "test",
  },
  {
    label: "Virus",
    imgPath: Virus,
    text: "test",
  },
  {
    label: "Tree",
    imgPath: Tree,
    text: "test",
  },
];

export default function SelectScreen(props: SelectScreenProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);

  const onChange = (currentSlide: number) => {
    setActiveStep(currentSlide);
  };

  const handleClickIcon = () => {
    if (showMenu) setShowMenu(false);
  };

  return (
    <>
      <StyledCarousel
        ref={ref}
        activeIndex={activeStep}
        onSelect={onChange}
        interval={null}
        touch
        onSlide={handleClickIcon}
      >
        {images.map((step, index) => (
          <CarouselItem>
            <img src={step.imgPath} alt={step.label} key={index} />
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
      />
    </>
  );
}
