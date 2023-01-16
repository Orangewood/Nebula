import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { DescriptionContainer, StatsTab, StyledRightCanvas } from "./styles";
import Tab from "react-bootstrap/Tab";
import { Card } from "react-bootstrap";
import Discovery from "../../../../images/resource/Discovery.png";
import AttributeCard from "../../../../components/card/attribute-card/AttributeCard";

interface RightCanvasProps {
  showCanvas: boolean;
  onClose: (close: boolean) => void;
  currentLifeForm?: Lifeform;
}

export default function RightCanvas(props: RightCanvasProps) {
  const { showCanvas, onClose, currentLifeForm } = props;
  const [show, setShow] = useState(false);

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
              <AttributeCard></AttributeCard>
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
