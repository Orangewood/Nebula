import { Lifeform } from "../../models/lifeform/Lifeform";
import Machinery from "../../images/actions/engineer/Machinery.png";
import Efficiency from "../../images/actions/engineer/Efficiency.png";
import Weaponry from "../../images/actions/engineer/Weaponry.png";
import AttributeCard from "../../components/card/attribute-card/AttributeCard";
import { EngineerObj } from "../../models/actions/engineer/Engineer";

export default function EngineerCardGenerator(engineer: Lifeform["engineer"]) {
  const engineerCards = [];
  let engineerKey: keyof EngineerObj;
  for (engineerKey in engineer) {
    switch (engineerKey) {
      case "machinery":
        engineerCards.push(
          <AttributeCard
            key="Machinery"
            attributeKey={engineerKey}
            imgPath={Machinery}
          />
        );
        break;
      case "efficiency":
        engineerCards.push(
          <AttributeCard
            key="Efficiency"
            attributeKey={engineerKey}
            imgPath={Efficiency}
          />
        );
        break;
      case "weaponry":
        engineerCards.push(
          <AttributeCard
            key="Weaponry"
            attributeKey={engineerKey}
            imgPath={Weaponry}
          />
        );
        break;
    }
  }
  return engineerCards;
}
