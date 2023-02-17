import React, { useEffect, useState } from "react";
import {
  HomeLogo,
  NebulaText,
  PlayButton,
  LifeformTextContainer,
} from "./styles";
import NebulaLogo from "../../images/MainLogo.png";
import { ScreenSwitch } from "../../models/screen/Screen";

interface WelcomeScreenProps {
  loadLifeformScreen: (screen: ScreenSwitch | null) => void;
}

export default function WelcomeScreen(props: WelcomeScreenProps) {
  const { loadLifeformScreen } = props;
  const [showLifeformText, setShowLifeformText] = useState(false);
  const welcomeText = "Please select your Lifeform";

  useEffect(() => {
    if (showLifeformText) {
      const timeoutId = setTimeout(() => {
        loadLifeformScreen(ScreenSwitch.Lifeform);
      }, 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [showLifeformText]);

  return (
    <>
      <HomeLogo>
        <img src={NebulaLogo} />
      </HomeLogo>
      {!showLifeformText && (
        <>
          <NebulaText>Nebula</NebulaText>
          <PlayButton onClick={() => setShowLifeformText(true)}>Play</PlayButton>
        </>
      )}
      {showLifeformText && (
        <LifeformTextContainer>{welcomeText}</LifeformTextContainer>
      )}
    </>
  );
}
