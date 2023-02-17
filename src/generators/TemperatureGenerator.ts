import { Composition } from "../models/planets/Planet";

// Mean surface exoplanet temperature
// https://www.hou.usra.edu/meetings/lpsc2020/pdf/3074.pdf

export default function TemperatureGenerator(
  composition: Composition[]
): number {
  var maxTemp: number = 1000;
  var maxLavaTemp: number = 1500;
  var maxIceTemp: number = 273;
  var maxOrganicTemp: number = 323;
  var minTemp: number = 50;
  var minLavaTemp: number = 700;
  var minimumTemp: number = 10;
  var temperature: number = Math.floor(
    Math.random() * (maxTemp - minTemp) + minTemp
  );

  if (
    composition.some((a) => a === Composition.LAVA) &&
    !composition.some((a) => a === Composition.ICE) &&
    !composition.some((a) => a === Composition.ORGANIC)
  ) {
    temperature = Math.floor(
      Math.random() * (maxLavaTemp - minLavaTemp) + minLavaTemp
    );
    return temperature;
  }

  if (composition.some((a) => a === Composition.ICE)) {
    temperature = Math.floor(
      Math.random() * (maxIceTemp - minimumTemp) + minimumTemp
    );
    return temperature;
  }
  if (composition.some((a) => a === Composition.ORGANIC)) {
    temperature = Math.floor(
      Math.random() * (maxOrganicTemp - minimumTemp) + minimumTemp
    );
    return temperature;
  } else return temperature;
}
