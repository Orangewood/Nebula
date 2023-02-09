import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Lifeform, lifeformList } from "../../../../models/lifeform/Lifeform";
import { DescriptionContainer, StatsTab, StyledRightCanvas } from "./styles";
import Tab from "react-bootstrap/Tab";
import { Card } from "react-bootstrap";
import Discovery from "../../../../images/resource/Discovery.png";
import AttributeCard from "../../../../components/card/attribute-card/AttributeCard";
import { HarvestObj } from "../../../../models/actions/harvest/Harvest";

interface RightCanvasProps {
  showCanvas: boolean;
  onClose: (close: boolean) => void;
  currentLifeForm: Lifeform;
}

export type CardType = Omit<Lifeform, "lifeformId" | "imgPath" | "text">;

export default function RightCanvas(props: RightCanvasProps) {
  const { showCanvas, onClose, currentLifeForm } = props;
  const [show, setShow] = useState(false);

  const cardList = lifeformList.map(
    (lifeform: Lifeform) =>
      ({
        resources: lifeform.resources,
        research: lifeform.research,
        explore: lifeform.explore,
        engineer: lifeform.engineer,
        production: lifeform.production,
      } as CardType)
  );

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

  const handleClose = () => {
    setShow(false);
    onClose(true);
  };

  // opens canvas from select button
  useEffect(() => {
    setShow(showCanvas);
  }, [showCanvas]);

  return (
    <>
      <StyledRightCanvas
        show
        onHide={handleClose}
        scroll={false}
        backdrop={false}
        placement="end"
      >
        <StatsTab
          defaultActiveKey="stats"
          id="uncontrolled-tab-example"
          justify
        >
          <Tab eventKey="stats" title="Stats">
            <DescriptionContainer>
              {currentKeys.map((key) => {
                return <AttributeCard attributeKey={key} />;
              })}
            </DescriptionContainer>
          </Tab>
          <Tab eventKey="profile" title="Advantage"></Tab>
          <Tab eventKey="contact" title="Disadvantage"></Tab>
          <Offcanvas.Body></Offcanvas.Body>
        </StatsTab>
      </StyledRightCanvas>
    </>
  );
}
