import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import CardContainer from "../components/card/card-container/CardContainer";
import { ScreenSwitch } from "../models/screen/Screen";
import { baseTheme } from "../theme/Theme";
import { GameContainer } from "./game-container/styles";
import MainScreen from "./main-screen/MainScreen";
import SelectScreen from "./select-screen/SelectScreen";
import TestScreen from "./test-screen/TestScreen";
import WelcomeScreen from "./welcome-screen/WelcomeScreen";

const theme = { ...baseTheme };

export default function App() {
  const [screenState, setScreenState] = useState<ScreenSwitch>(
    ScreenSwitch.MainScreen
  );

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
          {screenState === ScreenSwitch.Lifeform && (
            <SelectScreen
              onLifeformSelect={() => setScreenState(ScreenSwitch.MainScreen)}
            />
          )}
          {screenState === ScreenSwitch.CardTest && <CardContainer />}
          {screenState === ScreenSwitch.MainScreen && <MainScreen />}
        </>
      </GameContainer>
    </ThemeProvider>
  );
}
