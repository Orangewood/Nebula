import { TemperatureImageContainer } from "./styles";

import Temperature from "../../../images/card/Temperature.png";
import AttributeCard from "../attribute-card/AttributeCard";
import { Planet } from "../../../models/planets/Planet";

interface TemperatureContainerProps {
  planet: Planet;
}
export default function TemperatureContainer(props: TemperatureContainerProps) {
  const { planet } = props;
  const temperatureyKey = "Kelvin";
  return (
    <TemperatureImageContainer>
      <AttributeCard
        attributeKey={temperatureyKey}
        imgPath={Temperature}
        attributeValue={planet["temperature"]}
      />
      {/* <TempeartureImage src={Tempearture} />
        <TempeartureText>{temperaturey}</TempeartureText> */}
    </TemperatureImageContainer>
  );
}
