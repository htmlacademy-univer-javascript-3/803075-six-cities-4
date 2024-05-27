import { Navigate } from 'react-router-dom';
import { Routes, UserAuthorizationStatus } from '../const';

type MainRouteRedirectionProps = {
  children: JSX.Element;
  authorizationStatus: UserAuthorizationStatus;
};

function MainRouteRedirection({
  children,
  authorizationStatus,
}: MainRouteRedirectionProps): JSX.Element {
  return authorizationStatus === UserAuthorizationStatus.Authorized ? (
    <Navigate to={Routes.Main} />
  ) : (
    children
  );
}

export default MainRouteRedirection;
