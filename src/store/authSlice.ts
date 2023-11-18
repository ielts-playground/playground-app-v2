import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';
import { AuthResponse } from '@/models/auth';

export interface AuthState {
  authState: boolean;
  information: AuthResponse | undefined;
}

const initialState: AuthState = {
  authState: false,
  information: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setAuthInformation(state, action) {
      state.information = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, setAuthInformation } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;
