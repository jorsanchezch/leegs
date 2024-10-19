// store/leagueSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import League from 'models/league';

interface LeagueState {
  league: League | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: LeagueState = {
  league: null,
  isLoading: false,
  error: null,
};

const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {
    setLeague: (state, action: PayloadAction<League>) => {
      state.league = action.payload;
    },
    clearLeague: (state) => {
      state.league = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLeague, clearLeague, setLoading, setError } = leagueSlice.actions;
export default leagueSlice.reducer;