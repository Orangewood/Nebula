import React, { useState } from "react";
import Ameoba from "../../images/species/Aemoba.png";
import Alien from "../../images/species/Alien.png";
import Cephlapod from "../../images/species/Cephlapod.png";
import Cloud from "../../images/species/Cloud.png";
import Frozen from "../../images/species/Frozen.png";
import Fungus from "../../images/species/Fungus.png";
import Human from "../../images/species/Human.png";
import Insect from "../../images/species/Insect.png";
import Virus from "../../images/species/Virus.png";
import Tree from "../../images/species/Tree.png";
import { CarouselCaption, CarouselItem, StyledCarousel } from "./styles";

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

  const onChange = (currentSlide: number) => {
    setActiveStep(currentSlide);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <StyledCarousel
      activeIndex={activeStep}
      onSelect={onChange}
      interval={null}
      touch
    >
      {images.map((step, index) => (
        <CarouselItem>
          <img src={step.imgPath} alt={step.label} key={index} />
          <CarouselCaption>
            <button>Select</button>
          </CarouselCaption>
        </CarouselItem>
      ))}
    </StyledCarousel>
  );
}
