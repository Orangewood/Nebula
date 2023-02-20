import { Lifeform } from "../../models/lifeform/Lifeform";
import Physics from "../../images/actions/research/Physics.png";
import Chemistry from "../../images/actions/research/Chemistry.png";
import Astronomy from "../../images/actions/research/Astronomy.png";
import Robotics from "../../images/actions/research/Robotics.png";
import Biology from "../../images/actions/research/Biology.png";
import { ResearchObj } from "../../models/actions/research/Research";
import AttributeCard from "../../components/card/attribute-card/AttributeCard";

export default function ResearchCardGenerator(research: Lifeform["research"]) {
  const researchCards = [];
  let researchKey: keyof ResearchObj;
  for (researchKey in research) {
    switch (researchKey) {
      case "physics":
      case "physics":
        researchCards.push(
          <AttributeCard
            key="Physics"
            attributeKey={researchKey}
            imgPath={Physics}
            attributeValue={research[researchKey]}
          />
        );
        break;
      case "chemistry":
        researchCards.push(
          <AttributeCard
            key="Chemistry"
            attributeKey={researchKey}
            imgPath={Chemistry}
            attributeValue={research[researchKey]}
          />
        );
        break;
      case "astronomy":
        researchCards.push(
          <AttributeCard
            key="Astronomy"
            attributeKey={researchKey}
            imgPath={Astronomy}
            attributeValue={research[researchKey]}
          />
        );
        break;
      case "robotics":
        researchCards.push(
          <AttributeCard
            key="Robotics"
            attributeKey={researchKey}
            imgPath={Robotics}
            attributeValue={research[researchKey]}
          />
        );
        break;
      case "biology":
        researchCards.push(
          <AttributeCard
            key="Biology"
            attributeKey={researchKey}
            imgPath={Biology}
            attributeValue={research[researchKey]}
          />
        );
        break;
    }
  }
  return researchCards;
}
