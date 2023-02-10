import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { DescriptionContainer, StatsTab, StyledRightCanvas } from "./styles";
import Tab from "react-bootstrap/Tab";
import AttributeCard from "../../../../components/card/attribute-card/AttributeCard";

interface RightCanvasProps {
  currentLifeForm: Lifeform;
}

export type CardType = Omit<Lifeform, "lifeformId" | "imgPath" | "text">;

export default function RightCanvas(props: RightCanvasProps) {
  const { currentLifeForm } = props;

  type CardType = Omit<Lifeform, "imgPath" | "text">;
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
  const currentCardType = {
    resources: currentLifeForm.resources,
    research: currentLifeForm.research,
    explore: currentLifeForm.explore,
    engineer: currentLifeForm.engineer,
    production: currentLifeForm.production,
  } as CardType;

  const currentKeys = recursiveIter(currentCardType).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <>
      <StyledRightCanvas show scroll={false} backdrop={false} placement="end">
        <StatsTab
          defaultActiveKey="stats"
          id="uncontrolled-tab-example"
          justify
          style={{ height: "auto" }}
        >
          <Tab eventKey="stats" title="Stats">
            <DescriptionContainer>
              {currentKeys.map((key) => {
                return <AttributeCard attributeKey={key} />;
              })}
            </DescriptionContainer>
          </Tab>
          <Tab eventKey="profile" title="Advantage">
            Advantage Here
          </Tab>
          <Tab eventKey="contact" title="Disadvantage">
            Disadvantage Here
          </Tab>
          <Offcanvas.Body></Offcanvas.Body>
        </StatsTab>
      </StyledRightCanvas>
    </>
  );
}
