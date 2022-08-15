import { PlanetType } from "../models/planets/Planet";

export default function StabilityGenerator(planet: PlanetType): number {
  var stability: number = 0;

  var maxGasGiantHp = 350;
  var maxIcePlanetHp = 250;
  var maxPlanetHp = 200;
  var maxDwarfHp = 100;

  var minGasGiantHp = 200;
  var minIcePlanetHp = 150;
  var minPlanetHp = 100;
  var minDwarfHp = 50;

  function stabilityOutput(min: number, max: number): number {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return Math.ceil(randomNumber / 10) * 10;
  }

  switch (planet) {
    case PlanetType.GASGIANT: {
      stability = stabilityOutput(minGasGiantHp, maxGasGiantHp);
      break;
    }
    case PlanetType.ICEGIANT: {
      stability = stabilityOutput(minIcePlanetHp, maxIcePlanetHp);
      break;
    }
    case PlanetType.GASEOUS:
    case PlanetType.TERRESTRIAL: {
      stability = stabilityOutput(minPlanetHp, maxPlanetHp);
      break;
    }
    case PlanetType.DWARFPLANET: {
      stability = stabilityOutput(minDwarfHp, maxDwarfHp);
      break;
    }
    default:
      break;
  }

  return stability;
}
