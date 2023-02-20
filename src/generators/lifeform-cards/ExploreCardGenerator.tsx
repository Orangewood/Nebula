import { Lifeform } from "../../models/lifeform/Lifeform";
import Observe from "../../images/actions/explore/Observe.png";
import Movement from "../../images/actions/explore/Movement.png";
import AttributeCard from "../../components/card/attribute-card/AttributeCard";
import { ExploreObj } from "../../models/actions/explore/Explore";

export default function ExploreCardGenerator(explore: Lifeform["explore"]) {
  const exploreCards = [];
  let exploreKey: keyof ExploreObj;
  for (exploreKey in explore) {
    switch (exploreKey) {
      case "observe":
        exploreCards.push(
          <AttributeCard
            key="Observe"
            attributeKey={exploreKey}
            imgPath={Observe}
            attributeValue={explore[exploreKey]}
          />
        );
        break;
      case "movement":
        exploreCards.push(
          <AttributeCard
            key="Movement"
            attributeKey={exploreKey}
            imgPath={Movement}
            attributeValue={explore[exploreKey]}
          />
        );
        break;
    }
  }
  return exploreCards;
}
