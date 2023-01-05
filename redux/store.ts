import { configureStore } from "@reduxjs/toolkit";
import DeckSlice from "./slices/DeckSlice";
import PlayerSlice from "./slices/PlayerSlice";

export const store = configureStore({
  reducer: {
    player: PlayerSlice,
    deck: DeckSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
