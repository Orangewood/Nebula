import React from "react";
import Card from "./components/card/Card";
import PlanetGenerator from "./generators/PlanetGenerator";

export default function App() {
  return <Card planet={PlanetGenerator(1)[0]} />;
}
