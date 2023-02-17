import React from "react";
import PlanetGenerator from "../../../generators/PlanetGenerator";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { drawCards } from "../../../../redux/slices/DeckSlice";
import { addPlanets } from "../../../../redux/slices/PlayerSlice";
import Card from "../Card";
import { StyledCardContainer } from "./styles";

const testPlanets = PlanetGenerator(5);

export default function CardContainer() {
  const dispatch = useAppDispatch();
  const useSelector = useAppSelector((state: any) => state);
  return (
    <>
      <StyledCardContainer>
        {testPlanets.map((planet) => {
          return <Card planet={planet} />;
        })}
        ;
      </StyledCardContainer>
      <button
        style={{ width: "20rem" }}
        onClick={() => dispatch(drawCards([0, 3]))}
      >
        Draw
      </button>
      <button
        style={{ width: "20rem" }}
        onClick={() => dispatch(addPlanets(useSelector.deck.drawnStack))}
      >
        ADD TO PLAYER
      </button>
    </>
  );
}
