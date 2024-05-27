export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum UserAuthorizationStatus {
  Authorized = 'Authorized',
  Unauthorized = 'Unauthorized',
  Unknown = 'Unknown',
}

export enum Routes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/*',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  MultipleOffersData = 'MULTIPLE_OFFERS_DATA',
  SingleOfferData = 'SINGLE_OFFER_DATA',
  FavouritesData = 'FAVOURITES_DATA',
  NearbyOffersData = 'NEARBY_OFFERS_DATA',
  ReviewsData = 'REVIEWS_DATA',
}

export enum ReviewStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export enum Title {
  Main = 'Home',
  Favorites = 'Favorites',
  Login = 'Login',
}

export enum Description {
  Main = 'Main description',
  Favorites = 'Favorites description',
  Login = 'Login description',
}

export enum FavouriteStatus {
  Add = 1,
  Remove = 0,
}

export enum CardType {
  favourites = 'favorites__card',
  nearest = 'near-places__card',
  regular = 'cities__card',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Favorite = '/favorite',
}

export enum ListSortingType {
  Popularity = 'Top popularity',
  IncreasingPrice = 'Price: Increasing',
  DecreasingPrice = 'Price: Decreasing',
  Rating = 'Top rating',
}

export const routeNameToPageInfoMap: Record<
  string,
  { title: string; description: string }
> = {
  [Routes.Main]: {
    title: Title.Main,
    description: Description.Main,
  },
  [Routes.Favorites]: {
    title: Title.Favorites,
    description: Description.Favorites,
  },
  [Routes.Login]: {
    title: Title.Login,
    description: Description.Login,
  },
};
