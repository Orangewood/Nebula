import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import CardContainer from "./components/card/card-container/CardContainer";
import { ScreenSwitch } from "./models/screen/Screen";
import { baseTheme } from "./theme/Theme";
import { GameContainer } from "./main/game-container/styles";
import SelectScreen from "./main/select-screen/SelectScreen";
import TestScreen from "./main/test-screen/TestScreen";
import WelcomeScreen from "./main/welcome-screen/WelcomeScreen";
import DrawScreen from "./main/planet-bank/PlanetBank";
import PlanetSelectScreen from "./main/select-screen/PlanetSelectScreen";
import PlanetGenerator from "./generators/PlanetGenerator";
import { Planet } from "./models/planets/Planet";
import LobbyScreen from "./main/lobby-screen/LobbyScreen";

const theme = { ...baseTheme };
const testPlanets = PlanetGenerator(10);

export default function App() {
  const [screenState, setScreenState] = useState<ScreenSwitch>(
    ScreenSwitch.LobbyScreen
  );
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>();

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
          {screenState === ScreenSwitch.CardTest && (
            <DrawScreen
              onPlanetClick={(selectedPlanet) => {
                setScreenState(ScreenSwitch.PlanetScreen);
                setSelectedPlanet(selectedPlanet);
              }}
            />
          )}
          {screenState === ScreenSwitch.PlanetScreen && (
            <PlanetSelectScreen planet={selectedPlanet!} />
          )}
          {screenState === ScreenSwitch.LobbyScreen && (
            <LobbyScreen players={["player1", "player2", "player3"]} />
          )}
        </>
      </GameContainer>
    </ThemeProvider>
  );
}
