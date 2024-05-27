import { useEffect } from 'react';

import { fetchFavouritesAction, getAuthCheckedStatus } from '../../store';

import { useAppDispatch, useAppSelector } from '../../hooks';

const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const isAuthenticationChecked = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    if (isAuthenticationChecked) {
      dispatch(fetchFavouritesAction());
    }
  }, [dispatch, isAuthenticationChecked]);
};

export { useFetchFavorites };
