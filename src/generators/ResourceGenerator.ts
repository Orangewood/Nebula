import { HarvestObj } from "../models/actions/harvest/Harvest";
import { Composition, Resource } from "../models/planets/Planet";

export default function ResourceGeneartor(
  composition: Composition[],
  planetAmount: number
): HarvestObj {
  const resources: HarvestObj = {};
  var randomTotal = Math.floor(Math.random() * (planetAmount - 1) + 1);

  if (
    composition.some((a) => a === Composition.GAS) &&
    composition.some((a) => a === Composition.SCILLICATE)
  ) {
    resources.fuel = 1;
  }

  if (
    composition.some((a) => a === Composition.ROCKY) &&
    composition.some((a) => a === Composition.SCILLICATE) &&
    composition.some((a) => a !== Composition.GAS)
  ) {
    resources.metal = 1;
  }

  if (
    composition.some(
      (a) =>
        a === Composition.ORGANIC &&
        composition.some((a) => a === Composition.OCEAN)
    )
  ) {
    resources.life = 1;
  }

  if (
    composition.some((a) => a === Composition.DESERT) &&
    composition.some((a) => a == Composition.ORGANIC)
  ) {
    resources.ruins = 1;
  }

  if (
    (composition.some((a) => a === Composition.LAVA) &&
      composition.some((a) => a === Composition.GAS)) ||
    (composition.some((a) => a === Composition.DESERT) &&
      composition.some((a) => a === Composition.ROCKY))
  ) {
    resources.energy = 1;
  }

  if (Object.keys(resources).length < 1) {
    // resources.DISCOVERY = 1
    resources.discovery = 1;
  }

  return resources;
}
