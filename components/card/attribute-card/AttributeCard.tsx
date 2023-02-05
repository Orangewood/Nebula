import React from "react";
import { Card } from "react-bootstrap";
import Discovery from "../../../images/resource/Discovery.png";
import { EngineerObj } from "../../../models/actions/engineer/Engineer";
import { ExploreObj } from "../../../models/actions/explore/Explore";
import { HarvestObj } from "../../../models/actions/harvest/Harvest";
import { ProductionObj } from "../../../models/actions/production/Production";
import { ResearchObj } from "../../../models/actions/research/Research";
import { Lifeform, LifeformList } from "../../../models/lifeform/Lifeform";
import {
  AttributeCardBody,
  AttributeCardTitle,
  StyledAttributeCard,
} from "./styles";

interface AttributeCardProps {
  cardList: CardType[];
}

type CardType = Omit<Lifeform, "lifeformId" | "imgPath" | "text">;
const CardList = LifeformList.map(
  (lifeform: Lifeform) =>
    ({
      resources: lifeform.resources,
      research: lifeform.research,
      explore: lifeform.explore,
      engineer: lifeform.engineer,
      production: lifeform.production,
    } as CardType)
);
type CardTypeKeys = keyof CardType;
type ObjectTypes =
  | HarvestObj
  | ResearchObj
  | ExploreObj
  | EngineerObj
  | ProductionObj;
const CardTypeValueList = Object.values(CardList[0]);
const CardTypeKeyList = Object.keys(CardList[0]) as CardTypeKeys[];
export default function AttributeCard(props: AttributeCardProps) {
  // const { cardList } = props;
  let keyList: string[] = [];
  function recursiveIter(obj: any) {
    for (var key in obj) {
      if (typeof obj[key] == "object") {
        recursiveIter(obj[key]);
      } else {
        Object.keys(obj).forEach((key) => {
          const capitalizedKey = key.replace(/(^\w|\s\w)/g, (m: string) =>
            m.toUpperCase()
          );
          keyList = [capitalizedKey, ...keyList];
        });
        break;
      }
    }
    return keyList;
  }

  return (
    <>
      {CardList.forEach((card, index) => {
        return recursiveIter(CardList[index]).forEach((cardKey) => {
          return (
            <StyledAttributeCard>
              <Card.Img variant="top" src={Discovery} />
              <AttributeCardBody>
                <AttributeCardTitle>{`+1 ${cardKey}`}</AttributeCardTitle>
              </AttributeCardBody>
            </StyledAttributeCard>
          );
        });
        keyList = [];
      })}
    </>
  );
}
