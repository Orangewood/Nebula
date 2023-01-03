import React from "react";
import CardContainer from "./components/card/card-container/CardContainer";
import Card from "./components/card/Card";
import PlanetGenerator from "./generators/PlanetGenerator";

const testPlanets = PlanetGenerator(5);

export default function App() {
  return <CardContainer />;
}
