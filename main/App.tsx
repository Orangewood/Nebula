import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import CardContainer from "../components/card/card-container/CardContainer";
import { ScreenSwitch } from "../models/screen/Screen";
import { baseTheme } from "../theme/Theme";
import { GameContainer } from "./game-container/styles";
import SelectScreen from "./select-screen/SelectScreen";
import WelcomeScreen from "./welcome-screen/WelcomeScreen";

export default function App() {
  const [screenState, setScreenState] = useState<ScreenSwitch>(
    ScreenSwitch.Lifeform
  );
  const theme = { ...baseTheme };

  return (
    <ThemeProvider theme={theme}>
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
          {screenState === ScreenSwitch.CardTest && <CardContainer />}
        </>
      </GameContainer>
    </ThemeProvider>
  );
}
