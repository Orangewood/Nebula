import React, { useEffect, useState } from "react";
import { ScreenSwitch } from "../models/screen/Screen";
import { GameContainer } from "./game-container/styles";
import SelectScreen from "./select-screen/SelectScreen";
import WelcomeScreen from "./welcome-screen/WelcomeScreen";

export default function App() {
  const [screenState, setScreenState] = useState<ScreenSwitch>(
    ScreenSwitch.Lifeform
  );

  return (
    <GameContainer>
      <>
        {screenState === ScreenSwitch.Welcome && (
          <WelcomeScreen
            loadLifeformScreen={(screen) =>
              setScreenState(screen ?? screenState)
            }
          />
        )}
        {screenState === ScreenSwitch.Lifeform && <SelectScreen />}
      </>
    </GameContainer>
  );
}
