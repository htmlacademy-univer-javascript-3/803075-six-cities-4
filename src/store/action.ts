import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offer';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus'
);
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setAuthorizationStatus = createAction<AuthorizationStatus>(
  'setAuthorizationStatus'
);

export const changeCity = createAction<City>('changeCity');
export const setSortType = createAction<string>('setSortType');
export const setSelectedPoint = createAction<{ title: string } | null>(
  'setSelectedPoint'
);
