import { Navigate } from 'react-router-dom';
import { UserAuthorizationStatus, Routes } from '../const';

type PrivateRouteProperties = {
  children: JSX.Element;
  userAuthorizationStatus: UserAuthorizationStatus;
};

function PrivateRoute({
  children,
  userAuthorizationStatus,
}: PrivateRouteProperties): JSX.Element {
  return userAuthorizationStatus === UserAuthorizationStatus.Authorized ? (
    children
  ) : (
    <Navigate to={Routes.Login} />
  );
}

export default PrivateRoute;
