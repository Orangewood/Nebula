import { createSlice } from "@reduxjs/toolkit";
import { Planet } from "../../models/planets/Planet";
import { Player } from "../../models/player/Player";
import type { PayloadAction } from "@reduxjs/toolkit";

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
