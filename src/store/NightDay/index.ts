import { createAction, createReducer } from '@reduxjs/toolkit';

const TOGGLE = 'nav/TOGGLE';

export const handleToggle = createAction(TOGGLE);

const initialState = {
  isNight: false,
};

const toggle = createReducer(initialState, (builder) => {
  builder.addCase(TOGGLE, (state) => ({
    ...state,
    isNight: !state.isNight,
  }));
});

export default toggle;
