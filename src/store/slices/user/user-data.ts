import { UserAuthorizationStatus, NameSpace } from '../../../const';
import { UserData } from '../../../types/user-data';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from './api-actions';

type UserStatus = {
  userAuthorizationStatus: UserAuthorizationStatus;
  userData: UserData | null;
  isSubmittingLogin: boolean;
};

const initialState: UserStatus = {
  userAuthorizationStatus: UserAuthorizationStatus.Unknown,
  userData: null,
  isSubmittingLogin: false,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userAuthorizationStatus = UserAuthorizationStatus.Authorized;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.userAuthorizationStatus = UserAuthorizationStatus.Unauthorized;
        state.userData = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.isSubmittingLogin = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isSubmittingLogin = false;
        state.userAuthorizationStatus = UserAuthorizationStatus.Authorized;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isSubmittingLogin = false;
        state.userAuthorizationStatus = UserAuthorizationStatus.Unauthorized;
        state.userData = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userAuthorizationStatus = UserAuthorizationStatus.Unauthorized;
        state.userData = null;
      });
  },
});
