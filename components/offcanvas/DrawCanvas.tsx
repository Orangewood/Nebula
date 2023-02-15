import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Planet } from "../../models/planets/Planet";
import { DrawInfo, StyledDrawCanvas } from "./styles";

interface DrawCanvasProps {
  planetStack: Planet[];
}
export default function DrawCanvas(props: DrawCanvasProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledDrawCanvas
      scroll={false}
      backdrop={false}
      show
      onHide={handleClose}
      placement="bottom"
    >
      <DrawInfo>
        asl;kdfjal;ksdjf;alksjdflk;ajsdf;kljasd;lfkjas;ldkfjas;dlkfj
      </DrawInfo>
    </StyledDrawCanvas>
  );
}
