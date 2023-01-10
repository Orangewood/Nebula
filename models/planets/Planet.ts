export enum PlanetType {
  GASGIANT = "gasGiant",
  ICEGIANT = "iceGiant",
  GASEOUS = "gaseous",
  TERRESTRIAL = "terrestrial",
  DWARFPLANET = "dwarfPlanet",
}

export enum Composition {
  ORGANIC = "organic",
  SCILLICATE = "scillicate",
  DESERT = "desert",
  GAS = "gas",
  ICE = "ice",
  LAVA = "lava",
  OCEAN = "ocean",
  ROCKY = "rocky",
}

export enum Resource {
  DISCOVERY = "discovery",
  ENERGY = "energy",
  FUEL = "fuel",
  LIFE = "life",
  METAL = "metal",
  RUINS = "ruins",
}

export interface Planet {
  name: string;
  temperature: number;
  type: PlanetType;
  composition: Composition[];
  resources: Resource[];
  stability: number;
}
