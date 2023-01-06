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
    drawCards: {
      reducer: (state, action: PayloadAction<number[]>) => {
        let pointer = 0;
        action.payload.forEach((number, index) => {
          pointer = !index ? number : number - 1;
          state.drawnStack.push(state.deck[pointer]);
          state.deck = state.deck.filter((card) => {
            return card !== state.deck[pointer];
          });
        });
      },
      prepare: (selectedIndecies: number[]) => {
        return { payload: selectedIndecies };
      },
    },
  },
});

export const { drawCards } = DeckSlice.actions;

export default DeckSlice.reducer;
