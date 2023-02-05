import PlanetGenerator from "../generators/PlanetGenerator";
import { Planet } from "../models/planets/Planet";

export function PlanetStats(
  statType: keyof Omit<Planet, "name">,
  currentPlanetArray: Planet[]
) {
  let flattenData = currentPlanetArray.flatMap((a) => {
    return [a[statType]].flat(1);
  });

  let countData = currentPlanetArray.reduce((obj, val) => {
    if (statType === "composition" || statType === "resources") {
      obj[`${val[statType].length}${statType}`] =
        ++obj[`${val[statType].length}${statType}`] || 1;
    }
    return obj;
  }, {} as { [key: string]: number });

  let reducedData = flattenData.sort().reduce(function (obj, val) {
    obj[val] = ++obj[val] || 1;
    return obj;
  }, {} as { [key: string]: number });

  let percentData = { ...reducedData, ...countData };

  for (let key in reducedData) {
    percentData[key] = Math.round(
      (reducedData[key] / currentPlanetArray.length) * 100
    );
  }

  for (let key in countData) {
    percentData[key] = Math.round(
      (countData[key] / currentPlanetArray.length) * 100
    );
  }

  return {
    total: reducedData,
    count: countData,
    percent: percentData,
  };
}
let planetList = PlanetGenerator(100);

console.log(PlanetStats("resources", planetList));
console.log(PlanetStats("composition", planetList));
