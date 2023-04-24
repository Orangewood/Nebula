import {
  StabilityImage,
  StabilityImageContainer,
  StabilityText,
} from "./styles";

import Stability from "../../../images/card/Stability.png";
import AttributeCard from "../attribute-card/AttributeCard";
import { Planet } from "../../../models/planets/Planet";

interface StabilityContainerProps {
  planet: Planet;
}
export default function StabilityContainer(props: StabilityContainerProps) {
  const { planet } = props;
  const stabilityKey = Object.keys(planet).filter((a) => a === "stability")[0];
  return (
    <StabilityImageContainer>
      <AttributeCard
        attributeKey={stabilityKey}
        imgPath={Stability}
        attributeValue={planet["stability"]}
      />
      {/* <StabilityImage src={Stability} />
      <StabilityText>{stability}</StabilityText> */}
    </StabilityImageContainer>
  );
}
