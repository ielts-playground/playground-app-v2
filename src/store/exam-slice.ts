import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

export type ItemExam = {
  title: string;
  isCompleted: boolean;
  isPrevPartDone: boolean;
};

export const INIT_LIST_EXAM: ItemExam[] = [
  {
    title: 'listening',
    isCompleted: false,
    isPrevPartDone: true,
  },
  {
    title: 'reading',
    isCompleted: false,
    isPrevPartDone: false,
  },
  {
    title: 'writing',
    isCompleted: false,
    isPrevPartDone: false,
  },
];

export type ExamState = {
  isInExam: boolean;
  headerExam: React.ReactNode;
  listExam: ItemExam[];
};

const initialState: ExamState = {
  isInExam: false,
  headerExam: undefined,
  listExam: INIT_LIST_EXAM,
};

export const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setIsInExam(state, action) {
      state.isInExam = action.payload;
    },

    setHeaderExam(state, action) {
      state.headerExam = action.payload;
    },

    donePart(state, action) {
      state.listExam = [
        ...state.listExam.map((item) => {
          if (item.title === action.payload.currentPart) {
            item.isCompleted = true;
          }
          if (action.payload.nextPart && item.title === action.payload.nextPart) {
            item.isPrevPartDone = true;
          }
          return item;
        }),
      ];
    },

    setListExam(state, action) {
      state.listExam = action.payload;
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

export const { setIsInExam, setHeaderExam, donePart, setListExam } = examSlice.actions;

export const selectExamState = (state: AppState) => state.exam;
