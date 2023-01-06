import React from "react";
import { HomeLogo, NebulaText, WelcomeScreenContainer } from "./styles";
import NebulaLogo from "../../images/MainLogo.png";

interface WelcomeScreenProps {}

export default function WelcomeScreen(props: WelcomeScreenProps) {
  return (
    <WelcomeScreenContainer>
      <HomeLogo>
        <img src={NebulaLogo} />
      </HomeLogo>
      <NebulaText>Nebula</NebulaText>
    </WelcomeScreenContainer>
  );
}
