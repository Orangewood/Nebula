export enum StellarClass {
  HYPERGIANT = "Hyper Giant",
  SUPERGIANT = "Super Giant",
  BRIGHTGIANT = "Bright Giant",
  GIANT = "Giant",
  MAINSEQUENCE = "Main Sequence",
  SUBDWARF = "Sub Dwarf",
  BROWNDWARF = "Brown Dwarf",
  WHITEDWARF = "White Dwarf",
}

export enum SpectralClass {
  O = "O-type",
  B = "B-type",
  A = "A-type",
  F = "F-type",
  G = "G-type",
  K = "K-type",
  M = "M-type",
}

export interface Star {
  name: string;
  temperature: number;
  type: StellarClass;
  spectralClass: SpectralClass;
  resources: string[];
  stability: number;
}
