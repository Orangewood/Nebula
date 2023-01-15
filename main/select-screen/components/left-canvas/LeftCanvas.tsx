import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { LifeformEnum } from "../../../../models/lifeform/properties/LifeformEnum";
import { LifeformInfo, LifeformTitle, StyledLeftCanvas } from "./styles";

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
        show
        onHide={handleClose}
        scroll={false}
        backdrop={false}
        placement="start"
      >
        <LifeformTitle>
          {LifeformEnum[currentLifeForm?.lifeformId ?? -1]}
        </LifeformTitle>
        <LifeformInfo>{currentLifeForm?.text}</LifeformInfo>
      </StyledLeftCanvas>
    </>
  );
}
