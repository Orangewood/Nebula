import { Lifeform } from "../../models/lifeform/Lifeform";
import Build from "../../images/actions/production/Build.png";
import Conscript from "../../images/actions/production/Conscript.png";
import Reproduce from "../../images/actions/production/Reproduce.png";
import AttributeCard from "../../components/card/attribute-card/AttributeCard";
import { ProductionObj } from "../../models/actions/production/Production";

export default function ProductionCardGenerator(
  production: Lifeform["production"]
) {
  const productionCards = [];
  let productionKey: keyof ProductionObj;
  for (productionKey in production) {
    switch (productionKey) {
      case "build":
        productionCards.push(
          <AttributeCard
            key="Build"
            attributeKey={productionKey}
            imgPath={Build}
          />
        );
        break;
      case "conscript":
        productionCards.push(
          <AttributeCard
            key="Conscript"
            attributeKey={productionKey}
            imgPath={Conscript}
          />
        );
        break;
      case "reproduce":
        productionCards.push(
          <AttributeCard
            key="Reproduce"
            attributeKey={productionKey}
            imgPath={Reproduce}
          />
        );
        break;
    }
  }
  return productionCards;
}
