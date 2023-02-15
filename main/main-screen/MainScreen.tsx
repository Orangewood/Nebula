import React from "react";
import DrawCanvas from "../../components/offcanvas/DrawCanvas";
import { DrawContainer } from "./styles";

interface MainScreenProps {}

export default function MainScreen(props: MainScreenProps) {
  return (
    <DrawContainer>
      <DrawCanvas planetStack={[]} />
    </DrawContainer>
  );
}
