import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string>('changeCity');
export const setOffersList = createAction('setOffersList');
