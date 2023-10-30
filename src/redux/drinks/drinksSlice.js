import { createSlice } from '@reduxjs/toolkit';
import {
  fetchOwnDrinks,
  addOwnDrink,
  deleteOwnDrink,
  fetchFavoriteDrinks,
  addFavoriteDrink,
  deleteFavoriteDrink,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const ownDrinksSlice = createSlice({
  name: 'ownDrinks',
  initialState,
  extraReducers: {
    [fetchOwnDrinks.pending]: handlePending,
    [fetchOwnDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchOwnDrinks.rejected]: handleRejected,
    [addOwnDrink.pending]: handlePending,
    [addOwnDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addOwnDrink.rejected]: handleRejected,
    [deleteOwnDrink.pending]: handlePending,
    [deleteOwnDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    [deleteOwnDrink.rejected]: handleRejected,
  },
});
export const favoriteDrinksSlice = createSlice({
  name: 'favoriteDrinks',
  initialState,
  extraReducers: {
    [fetchFavoriteDrinks.pending]: handlePending,
    [fetchFavoriteDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchFavoriteDrinks.rejected]: handleRejected,
    [addFavoriteDrink.pending]: handlePending,
    [addFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addFavoriteDrink.rejected]: handleRejected,
    [deleteFavoriteDrink.pending]: handlePending,
    [deleteFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    [deleteFavoriteDrink.rejected]: handleRejected,
  },
});

export const favoriteDrinksReducer = favoriteDrinksSlice.reducer;
export const ownDrinksReducer = ownDrinksSlice.reducer;
