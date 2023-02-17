import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../../src/models/player/Player";
import { Planet } from "../../src/models/planets/Planet";

export const PlayerSlice = createSlice({
  name: "Player",
  initialState: {
    playerId: 0,
    currentPlanetStack: [],
    resources: {},
    research: {},
    explore: {},
    engineer: {},
    production: {},
  } as Player,
  reducers: {
    addPlanets: {
      reducer: (state, action: PayloadAction<Planet | Planet[]>) => {
        if (Array.isArray(action.payload)) {
          state.currentPlanetStack = [
            ...state.currentPlanetStack,
            ...action.payload,
          ];
          return;
        }
        state.currentPlanetStack.push(action.payload);
      },
      prepare: (planet: Planet | Planet[]) => {
        return { payload: planet };
      },
    },
  },
});

export const { addPlanets } = PlayerSlice.actions;

export default PlayerSlice.reducer;
