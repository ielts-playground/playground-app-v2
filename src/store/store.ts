import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { authSlice } from './auth-slice';
import { commonSlice } from './common-slice';
import { examSlice } from './exam-slice';

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [commonSlice.name]: commonSlice.reducer,
      [examSlice.name]: examSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
