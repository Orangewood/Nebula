import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { DescriptionContainer, StatsTab, StyledRightCanvas } from "./styles";
import Tab from "react-bootstrap/Tab";
import AttributeCard from "../../../../components/card/attribute-card/AttributeCard";
import { ResourceCardType } from "../../../../models/cards/ResourceCard";
import ResourceCardGenerator from "../../../../generators/lifeform-cards/ResourceCardGenerator";
import LifeformCardGenerator from "../../../../generators/lifeform-cards/LifeformCardGenerator";

interface RightCanvasProps {
  currentLifeForm: Lifeform;
}

export default function RightCanvas(props: RightCanvasProps) {
  const { currentLifeForm } = props;

  const lifeFormToResourceCardType = {
    resources: currentLifeForm.resources,
    research: currentLifeForm.research,
    explore: currentLifeForm.explore,
    engineer: currentLifeForm.engineer,
    production: currentLifeForm.production,
  } as ResourceCardType;

  // const currentKeys = recursiveIter(currentCardType).sort((a, b) =>
  //   a.localeCompare(b)
  // );
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
              {<>{LifeformCardGenerator(currentLifeForm)}</>}
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
