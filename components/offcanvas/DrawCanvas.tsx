import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Planet } from "../../models/planets/Planet";
import { DrawCanvasHeader, DrawInfo, StyledDrawCanvas } from "./styles";

interface DrawCanvasProps {
  children: JSX.Element;
}
export default function DrawCanvas(props: DrawCanvasProps) {
  const { children } = props;
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
      <DrawInfo>{children}</DrawInfo>
    </StyledDrawCanvas>
  );
}
