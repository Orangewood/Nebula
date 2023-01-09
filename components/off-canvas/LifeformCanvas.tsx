import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { StyledLifeformCanvas } from "./styles";

interface LifeformCanvasProps {
  showCanvas: boolean;
  onClose: (close: boolean) => void;
}

export default function LifeformCanvas(props: LifeformCanvasProps) {
  const { showCanvas, onClose } = props;
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
      <StyledLifeformCanvas
        show={show}
        onHide={handleClose}
        scroll={false}
        backdrop={false}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </StyledLifeformCanvas>
    </>
  );
}
