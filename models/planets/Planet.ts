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
  FUEL = "fuel",
  METAL = "metal",
  LIFE = "life",
  RUINS = "ruins",
  DISCOVERY = "discovery",
  ENERGY = "energy",
}

export interface Planet {
  name: string;
  temperature: number;
  type: PlanetType;
  composition: Composition[];
  resources: Resource[];
  stability: number;
}
