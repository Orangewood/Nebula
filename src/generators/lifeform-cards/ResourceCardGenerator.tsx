import { Lifeform } from "../../models/lifeform/Lifeform";
import Discovery from "../../images/resource/Discovery.png";
import Energy from "../../images/resource/Energy.png";
import Fuel from "../../images/resource/Fuel.png";
import Life from "../../images/resource/Life.png";
import Metal from "../../images/resource/Metal.png";
import Ruins from "../../images/resource/Ruins.png";
import { HarvestObj } from "../../models/actions/harvest/Harvest";
import AttributeCard from "../../components/card/attribute-card/AttributeCard";

export default function ResourceCardGenerator(
  resources: Lifeform["resources"]
) {
  const resourceCards = [];
  let harvestKey: keyof HarvestObj;
  for (harvestKey in resources) {
    switch (harvestKey) {
      case "discovery":
        resourceCards.push(
          <AttributeCard
            key="Discovery"
            attributeKey={harvestKey}
            imgPath={Discovery}
            attributeValue={resources[harvestKey]}
          />
        );
        break;
      case "energy":
        resourceCards.push(
          <AttributeCard
            key="Energy"
            attributeKey={harvestKey}
            imgPath={Energy}
            attributeValue={resources[harvestKey]}
          />
        );
        break;
      case "fuel":
        resourceCards.push(
          <AttributeCard
            key="Fuel"
            attributeKey={harvestKey}
            imgPath={Fuel}
            attributeValue={resources[harvestKey]}
          />
        );
        break;
      case "life":
        resourceCards.push(
          <AttributeCard
            key="Life"
            attributeKey={harvestKey}
            imgPath={Life}
            attributeValue={resources[harvestKey]}
          />
        );
        break;
      case "metal":
        resourceCards.push(
          <AttributeCard
            key="Metal"
            attributeKey={harvestKey}
            imgPath={Metal}
            attributeValue={resources[harvestKey]}
          />
        );
        break;
      case "ruins":
        resourceCards.push(
          <AttributeCard
            key="Ruins"
            attributeKey={harvestKey}
            imgPath={Ruins}
            attributeValue={resources[harvestKey]}
          />
        );
        break;
    }
  }
  return resourceCards;
}
