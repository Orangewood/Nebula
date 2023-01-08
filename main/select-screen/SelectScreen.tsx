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
import { CarouselImage, StyledCarousel } from "./styles";

interface SelectScreenProps {}

const images = [
  {
    label: "Alien",
    imgPath: Alien,
  },
  {
    label: "Ameoba",
    imgPath: Ameoba,
  },
  {
    label: "Cephlapod",
    imgPath: Cephlapod,
  },
  {
    label: "Cloud",
    imgPath: Cloud,
  },
  {
    label: "Frozen",
    imgPath: Frozen,
  },
  {
    label: "Fungus",
    imgPath: Fungus,
  },
  {
    label: "Human",
    imgPath: Human,
  },
  {
    label: "Insect",
    imgPath: Insect,
  },
  {
    label: "Virus",
    imgPath: Virus,
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
    <StyledCarousel>
      {images.map((step, index) => (
        <CarouselImage src={step.imgPath} alt={step.label} key={index} />
      ))}
    </StyledCarousel>
  );
}
