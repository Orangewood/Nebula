import React from "react";
import { Planet } from "../../../models/planets/Planet";
import { PlanetCardContainer } from "./styles";
import okay from "../../../images/planets/gas-giant/1.png";

// const dwarfPlanetModule = import.meta.glob(
//   "../../../images/planets/dwarf-planet/*.png",
//   { as: "url" }
// );
// const gasGiantModule = import.meta.glob(
//   "../../../images/planets/gas-giant/*.png",
//   { as: "url" }
// );
// const gaseousModule = import.meta.glob("../../../images/planets/gaseous/*.png");
// const iceGiantModule = import.meta.glob(
//   "../../../images/planets/ice-giant/*.png",
//   { as: "url" }
// );
// const terrestrialModule = import.meta.glob(
//   "../../../images/planets/terrestrial/*.png",
//   { as: "url" }
// );

// const getNumberOfFiles = (module: Record<string, () => Promise<string>>) => {
//   return Object.entries(iceGiantModule).length;
// };

// for (const path in iceGiantModule) {
//   iceGiantModule[path]().then((mod) => {
//     console.log("path", path, mod);
//   });
// }

interface PlanetCardProps {
  currentPlanet: Planet;
}
export default function PlanetCard(props: PlanetCardProps) {
  const { currentPlanet } = props;
  console.log(currentPlanet.image, currentPlanet.type);
  return (
    <PlanetCardContainer>
      <img src={currentPlanet.image} />
    </PlanetCardContainer>
  );
}
