import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import CardContainer from "./components/card/card-container/CardContainer";
import { ScreenSwitch } from "./models/screen/Screen";
import { baseTheme } from "./theme/Theme";
import { GameContainer } from "./main/game-container/styles";
import SelectScreen from "./main/select-screen/SelectScreen";
import TestScreen from "./main/test-screen/TestScreen";
import WelcomeScreen from "./main/welcome-screen/WelcomeScreen";
import DrawScreen from "./main/draw-screen/DrawScreen";

const theme = { ...baseTheme };

export default function App() {
  const [screenState, setScreenState] = useState<ScreenSwitch>(
    ScreenSwitch.Lifeform
  );

  React.useEffect(() => {
    console.log(screenState);
  }, [screenState]);

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
              onLifeformSelect={(screen) =>
                setScreenState(screen ?? screenState)
              }
            />
          )}
          {screenState === ScreenSwitch.CardTest && <DrawScreen />}
          {screenState === ScreenSwitch.MainScreen && <DrawScreen />}
        </>
      </GameContainer>
    </ThemeProvider>
  );
}
