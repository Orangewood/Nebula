import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { LifeformEnum } from "../../../../models/lifeform/properties/LifeformEnum";
import { StyledLeftCanvas } from "./styles";

interface LeftCanvasProps {
  showCanvas: boolean;
  onClose: (close: boolean) => void;
  currentLifeForm?: Lifeform;
}

export default function LeftCanvas(props: LeftCanvasProps) {
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
      <StyledLeftCanvas
        show={show}
        onHide={handleClose}
        scroll={false}
        backdrop={false}
        placement="start"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            {LifeformEnum[currentLifeForm?.lifeformId ?? -1]}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{currentLifeForm?.text}</Offcanvas.Body>
      </StyledLeftCanvas>
    </>
  );
}
