import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    streets: streetsReducer,
    houses: housessReducer,
    flats: flatssReducer,
    inhabitants: inhabitatntsReducer
  }
})