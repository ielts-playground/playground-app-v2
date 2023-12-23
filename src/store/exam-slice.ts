import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

export interface ExamState {
  isInExam: boolean;
}

const initialState: ExamState = {
  isInExam: false,
};

export const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setIsInExam(state, action) {
      state.isInExam = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.exam,
      };
    },
  },
});

export const { setIsInExam } = examSlice.actions;

export const selectExamState = (state: AppState) => state.exam;
