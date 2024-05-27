import { UserAuthorizationStatus, NameSpace } from '../../../const';
import { UserData } from '../../../types/user-data';

import { State } from '../../../types/state';

export const checkAuthorization = (state: State): boolean =>
  state[NameSpace.User].userAuthorizationStatus === UserAuthorizationStatus.Authorized;

export const getUserAuthorizationStatus = (state: State): UserAuthorizationStatus =>
  state[NameSpace.User].userAuthorizationStatus;

export const getUserData = (state: State): UserData | null =>
  state[NameSpace.User].userData;

export const checkLoginSubmitting = (state: State): boolean =>
  state[NameSpace.User].isSubmittingLogin;
