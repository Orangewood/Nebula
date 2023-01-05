import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Planet } from "../../models/planets/Planet";
import PlanetGenerator from "../../generators/PlanetGenerator";

interface DeckType {
  deck: Planet[];
  drawnStack: Planet[];
}

export const DeckSlice = createSlice({
  name: "Deck",
  initialState: {
    deck: PlanetGenerator(100),
    drawnStack: [],
  } as DeckType,
  reducers: {
    drawCard: {
      reducer: (state, action: PayloadAction<number[]>) => {
        action.payload.forEach((number) => {
          state.drawnStack.push(state.deck[number]);
          state.deck = state.deck.filter(
            (card) => card !== state.deck[(!number && 0) || number - 1]
          );
        });
      },
      prepare: (selectedIndecies: number[]) => {
        return { payload: selectedIndecies };
      },
    },
  },
});

export const { drawCard } = DeckSlice.actions;

export default DeckSlice.reducer;
