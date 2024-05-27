import { CityName, NameSpace, ListSortingType } from '../../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_SELECTED_CITY = CityName.Paris;
const DEFAULT_SELECTED_SORTING = ListSortingType.Popularity;

type GlobalState = {
  selectedCity: CityName;
  selectedSortType: ListSortingType;
};

const initialState: GlobalState = {
  selectedCity: DEFAULT_SELECTED_CITY,
  selectedSortType: DEFAULT_SELECTED_SORTING,
};

export const globalState = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.selectedCity = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<ListSortingType>) => {
      state.selectedSortType = action.payload;
    },
  },
});

export const { changeCity, changeSortingType } = globalState.actions;
