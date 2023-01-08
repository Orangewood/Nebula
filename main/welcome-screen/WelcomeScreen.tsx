import React, { useEffect, useState } from "react";
import {
  HomeLogo,
  NebulaText,
  PlayButton,
  SpeciesTextContainer,
} from "./styles";
import NebulaLogo from "../../images/MainLogo.png";
import { ScreenSwitch } from "../../models/screen/Screen";

interface WelcomeScreenProps {
  loadSpeciesScreen: (screen: ScreenSwitch | null) => void;
}

export default function WelcomeScreen(props: WelcomeScreenProps) {
  const { loadSpeciesScreen } = props;
  const [showSpeciesText, setShowSpeciesText] = useState(false);
  const welcomeText = "Please select your species";

  useEffect(() => {
    if (showSpeciesText) {
      const timeoutId = setTimeout(() => {
        loadSpeciesScreen(ScreenSwitch.Species);
      }, 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [showSpeciesText]);

  return (
    <>
      <HomeLogo>
        <img src={NebulaLogo} />
      </HomeLogo>
      {!showSpeciesText && (
        <>
          <NebulaText>Nebula</NebulaText>
          <PlayButton onClick={() => setShowSpeciesText(true)}>Play</PlayButton>
        </>
      )}
      {showSpeciesText && (
        <SpeciesTextContainer>{welcomeText}</SpeciesTextContainer>
      )}
    </>
  );
}
