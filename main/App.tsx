import React, { useEffect, useState } from "react";
import { GameContainer } from "./game-container/styles";
import SelectScreen from "./select-screen/SelectScreen";
import WelcomeScreen from "./welcome-screen/WelcomeScreen";

export default function App() {
  const [loadScreen, setLoadScreen] = useState(false);

  return (
    <GameContainer>
      <>
        {/* <WelcomeScreen loadRenderScreen={(render) => setLoadScreen(render)} /> */}

        {!loadScreen && (
          <WelcomeScreen loadRenderScreen={(render) => setLoadScreen(render)} />
        )}
        {loadScreen && <SelectScreen />}
      </>
    </GameContainer>
  );
}
