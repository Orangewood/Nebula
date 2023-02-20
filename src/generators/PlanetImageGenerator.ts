import { PlanetType } from "../models/planets/Planet";
const dwarfPlanetModule = import.meta.glob(
  "../images/planets/dwarf-planet/*.png"
);
const gasGiantModule = import.meta.glob("../images/planets/gas-giant/*.png");
const gaseousModule = import.meta.glob("../images/planets/gaseous/*.png");
const iceGiantModule = import.meta.glob("../images/planets/ice-giant/*.png");
const terrestrialModule = import.meta.glob(
  "../images/planets/terrestrial/*.png"
);
let dwarfPlanetImageArray: string[] = [];
let gasGiantImageArray: string[] = [];
let gaseousImageArray: string[] = [];
let iceGiantImageArray: string[] = [];
let terrestrialImageArray: string[] = [];
const generateArrays = async () => {
  for (const path in dwarfPlanetModule) {
    await dwarfPlanetModule[path]().then(() => {
      const p = new URL(path, import.meta.url);
      dwarfPlanetImageArray.push(p.href);
    });
  }
  for (const path in gasGiantModule) {
    await gasGiantModule[path]().then(() => {
      const p = new URL(path, import.meta.url);
      gasGiantImageArray.push(p.href);
    });
  }
  for (const path in gaseousModule) {
    await gaseousModule[path]().then(() => {
      const p = new URL(path, import.meta.url);
      gaseousImageArray.push(p.href);
    });
  }
  for (const path in iceGiantModule) {
    await iceGiantModule[path]().then(() => {
      const p = new URL(path, import.meta.url);
      iceGiantImageArray.push(p.href);
    });
  }
  for (const path in terrestrialModule) {
    await terrestrialModule[path]().then(() => {
      const p = new URL(path, import.meta.url);
      terrestrialImageArray.push(p.href);
    });
  }
};
await generateArrays();
let dwarfFileLength = dwarfPlanetImageArray.length;
let gasGiantFileLength = gasGiantImageArray.length;
let gaseousFileLength = gaseousImageArray.length;
let iceGiantFileLength = iceGiantImageArray.length;
let terrestrialFileLength = terrestrialImageArray.length;

export default function PlanetImageGenerator(planetType: PlanetType) {
  switch (planetType) {
    case PlanetType.DWARFPLANET: {
      console.log("DWARFPLANET");
      const randomIndex = Math.floor(Math.random() * dwarfFileLength);
      dwarfFileLength = dwarfFileLength - 1;
      const image = dwarfPlanetImageArray[randomIndex];
      dwarfPlanetImageArray = dwarfPlanetImageArray.filter((a) => a !== image);
      return image;
    }
    case PlanetType.GASGIANT: {
      console.log("GASGIANT");
      const randomIndex = Math.floor(Math.random() * gasGiantFileLength);
      gasGiantFileLength = gasGiantFileLength - 1;
      const image = gasGiantImageArray[randomIndex];
      gasGiantImageArray = gasGiantImageArray.filter((a) => a !== image);
      return image;
    }
    case PlanetType.GASEOUS: {
      console.log("GASEOUS");
      const randomIndex = Math.floor(Math.random() * gaseousFileLength);
      gaseousFileLength = gaseousFileLength - 1;
      const image = gaseousImageArray[randomIndex];
      gaseousImageArray = gaseousImageArray.filter((a) => a !== image);
      return image;
    }
    case PlanetType.ICEGIANT: {
      const randomIndex = Math.floor(Math.random() * iceGiantFileLength);
      console.log(randomIndex);
      console.log(iceGiantFileLength);
      iceGiantFileLength = iceGiantFileLength - 1;
      const image = iceGiantImageArray[randomIndex];
      console.log(image);
      iceGiantImageArray = iceGiantImageArray.filter((a) => a !== image);
      console.log(iceGiantImageArray);
      return image;
    }
    case PlanetType.TERRESTRIAL: {
      console.log("TERRESTRIAL");
      const randomIndex = Math.floor(Math.random() * terrestrialFileLength);
      terrestrialFileLength = terrestrialFileLength - 1;
      const image = terrestrialImageArray[randomIndex];
      terrestrialImageArray = terrestrialImageArray.filter((a) => a !== image);
      return image;
    }
  }
}
