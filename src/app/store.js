import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../store/reducers";
import pokemon from "../store/reducers/pokemon";

export const store = configureStore({
  reducer: {
    teams: pokemon
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});
