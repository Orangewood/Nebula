import { Composition, PlanetType } from "../models/planets/Planet";
import randomEnumKey from "./RandomEnumKey";

export default function PlanetaryCompositionGenerator(
  type: PlanetType
): Composition[] {
  const composition: Composition[] = [];

  function generator(filteredComposition: Composition[]) {
    var randomTotal = Math.floor(
      Math.random() * (filteredComposition.length - 1) + 1
    );
    let randomIndex = randomEnumKey(filteredComposition);
    for (randomTotal <= 0; randomTotal--; ) {
      filteredComposition = Object.values(filteredComposition).filter(
        (a) => a != (filteredComposition[randomIndex] as Composition)
      );
      randomIndex = randomEnumKey(filteredComposition);
      composition.push(filteredComposition[randomIndex] as Composition);
    }
  }

  switch (type) {
    case PlanetType.GASGIANT: {
      var filteredComposition = Object.values(Composition).filter(
        (a) =>
          a != Composition.ROCKY &&
          a != Composition.DESERT &&
          a != Composition.LAVA &&
          a != Composition.OCEAN
      );
      generator(filteredComposition);
      if (!composition.some((a) => a === Composition.GAS)) {
        composition.push(Composition.GAS);
      }
      break;
    }

    case PlanetType.ICEGIANT: {
      var filteredComposition = Object.values(Composition).filter(
        (a) => a != Composition.DESERT
      );
      generator(filteredComposition);
      if (!composition.some((a) => a === Composition.ICE)) {
        composition.push(Composition.ICE);
      }
      break;
    }

    case PlanetType.GASEOUS: {
      var filteredComposition = Object.values(Composition).filter(
        (a) => a != Composition.OCEAN && a != Composition.DESERT
      );
      generator(filteredComposition);
      if (!composition.some((a) => a === Composition.GAS)) {
        composition.push(Composition.GAS);
      }
      break;
    }

    case PlanetType.TERRESTRIAL: {
      var filteredComposition = Object.values(Composition);
      generator(filteredComposition);

      if (!composition.some((a) => a === Composition.SCILLICATE)) {
        composition.push(Composition.SCILLICATE);
      }
      break;
    }

    case PlanetType.DWARFPLANET: {
      var filteredComposition = Object.values(Composition);
      generator(filteredComposition);
      break;
    }
    default:
      break;
  }
  return composition.sort();
}
