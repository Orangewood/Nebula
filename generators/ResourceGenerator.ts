import { Composition, Resource } from "../models/planets/Planet";

export default function ResourceGeneartor(
  composition: Composition[],
  planetAmount: number
): Resource[] {
  const resources: Resource[] = [];
  var randomTotal = Math.floor(Math.random() * (planetAmount - 1) + 1);

  if (
    composition.some((a) => a === Composition.GAS) &&
    composition.some((a) => a === Composition.SCILLICATE)
  ) {
    resources.push(Resource.FUEL);
  }

  if (
    composition.some((a) => a === Composition.ROCKY) &&
    composition.some((a) => a === Composition.SCILLICATE) &&
    composition.some((a) => a !== Composition.GAS)
  ) {
    resources.push(Resource.METAL);
  }

  if (
    composition.some(
      (a) =>
        a === Composition.ORGANIC &&
        composition.some((a) => a === Composition.OCEAN)
    )
  ) {
    resources.push(Resource.LIFE);
  }

  if (
    composition.some((a) => a === Composition.DESERT) &&
    composition.some((a) => a === Composition.ORGANIC)
  ) {
    resources.push(Resource.RUINS);
  }

  if (
    (composition.some((a) => a === Composition.LAVA) &&
      composition.some((a) => a === Composition.GAS)) ||
    (composition.some((a) => a === Composition.DESERT) &&
      composition.some((a) => a === Composition.ROCKY))
  ) {
    resources.push(Resource.ENERGY);
  }

  if (resources.length < 1) {
    resources.push(Resource.DISCOVERY);
  }

  return resources.sort();
}
