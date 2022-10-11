import PlanetGenerator from "../generators/PlanetGenerator";
import { Planet } from "../models/planets/Planet";

export default function App(amount: number) {
  var Planets: Planet[] = [];
  Planets = PlanetGenerator(amount);
  return Planets;
}

App(100);
