import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { LifeformEnum } from "../../../../models/lifeform/properties/LifeformEnum";
import { DescriptionContainer, StyledRightCanvas } from "./styles";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
        <Offcanvas.Header>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Stats"></Tab>
            <Tab eventKey="profile" title="Advantage"></Tab>
            <Tab eventKey="contact" title="Disadvantage"></Tab>
          </Tabs>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DescriptionContainer>{currentLifeForm?.text}</DescriptionContainer>
        </Offcanvas.Body>
      </StyledRightCanvas>
    </>
  );
}
