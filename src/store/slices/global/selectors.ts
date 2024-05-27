import { CityName, NameSpace, ListSortingType } from '../../../const';
import { State } from '../../../types/state';

export const getSelectedSortType = (state: State): ListSortingType =>
  state[NameSpace.App].selectedSortType;

export const getSelectedCity = (state: State): CityName =>
  state[NameSpace.App].selectedCity;
