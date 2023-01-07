import React, { useEffect, useState } from "react";
import { HomeLogo, NebulaText, PlayButton, WelcomeText } from "./styles";
import NebulaLogo from "../../images/MainLogo.png";

interface WelcomeScreenProps {
  loadRenderScreen: (render: boolean) => void;
}

export default function WelcomeScreen(props: WelcomeScreenProps) {
  const { loadRenderScreen } = props;
  const [renderPlay, setRenderPlay] = useState(true);
  const [renderSelectScreen, setRenderSelectScreen] = useState(false);

  useEffect(() => {
    console.log("renderSelectScreen", renderSelectScreen);
  }, [renderSelectScreen]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRenderSelectScreen(true);
      console.log("here!");
    }, 5000);
    loadRenderScreen(renderSelectScreen);
    return () => clearTimeout(timeoutId);
  }, [renderPlay]);

  const welcomeText = "Please select your species";

  return (
    <>
      <HomeLogo>
        <img src={NebulaLogo} />
      </HomeLogo>
      {renderPlay && (
        <>
          <NebulaText>Nebula</NebulaText>
          <PlayButton onClick={() => setRenderPlay(false)}>Play</PlayButton>
        </>
      )}
      {!renderPlay && <WelcomeText>{welcomeText}</WelcomeText>}
    </>
  );
}
