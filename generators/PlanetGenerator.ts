import randomEnum from "./RandomEnumKey";
import { planetNames } from "../models/planets/PlanetNames";
import { Planet, PlanetType } from "../models/planets/Planet";
import NameGenerator from "./NameGenerator";
import PlanetaryCompositionGenerator from "./PlanetaryCompositionGenerator";
import TemperatureGenerator from "./TemperatureGenerator";
import ResourceGeneartor from "./ResourceGenerator";
import StabilityGenerator from "./StabilityGenerator";

export default function PlanetGenerator(planetAmount: number): Planet[] {
  const PlanetList: Planet[] = [];

  for (var i = 0; i < planetAmount; i++) {
    const generatedPlanetType = PlanetType[randomEnum(PlanetType)];
    const generatedComposition =
      PlanetaryCompositionGenerator(generatedPlanetType);

    let newPlanet: Planet = {
      name: NameGenerator(planetNames),
      temperature: TemperatureGenerator(generatedComposition),
      type: generatedPlanetType,
      composition: generatedComposition,
      resources: ResourceGeneartor(generatedComposition, planetAmount),
      stability: StabilityGenerator(generatedPlanetType),
    };
    PlanetList.push(newPlanet);
  }
  return PlanetList;
}
