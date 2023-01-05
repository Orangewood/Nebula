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
    draw: {
      reducer: (state, action: PayloadAction<number[]>) => {
        action.payload.forEach((number, index) => {
          state.drawnStack.push(state.deck[number]);
          delete state.deck[(!index && number) || number - 1];
        });
        return;
      },
      prepare: (selectedIndecies: number[]) => {
        return { payload: selectedIndecies };
      },
    },
  },
});

export const { draw } = DeckSlice.actions;

export default DeckSlice.reducer;
