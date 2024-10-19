// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from './slices/league';

export const store = configureStore({
  reducer: {
    league: leagueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;