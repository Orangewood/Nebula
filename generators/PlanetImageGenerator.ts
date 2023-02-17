import { PlanetType } from "../models/planets/Planet";
import * as fs from "fs";
import { readFileSync } from "fs";

const dwarfDir = "../../../images/planets/dwarf-planet";
const gasGiantDir = "../../../images/planets/gas-giant";
const gaseousDir = "../../../images/planets/gaseous";
const iceGiantDir = "../../../images/planets/ice-giant";
const terrestrialDir = "../../../images/planets/terrestrial";

export default function PlanetImageGenerator(planetType: PlanetType) {
  const getImage = (path: fs.PathOrFileDescriptor) => {
    let imagePath = "";
    // readFileSync((path) => {
    //   const length = files.length;
    const randomIndex = Math.floor(Math.random() * 26) + 1;
    imagePath = `${path}/` + randomIndex + ".png";
    // });
    return imagePath.replace(/['"]+/g, "");
  };

  switch (planetType) {
    case PlanetType.DWARFPLANET:
      return getImage(dwarfDir);
    case PlanetType.GASEOUS:
      return getImage(gasGiantDir);
    case PlanetType.GASGIANT:
      return getImage(gaseousDir);
    case PlanetType.ICEGIANT:
      return getImage(iceGiantDir);
    case PlanetType.TERRESTRIAL:
      return getImage(terrestrialDir);
  }
}
