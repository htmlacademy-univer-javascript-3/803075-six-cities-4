import cn from 'classnames';
import CitiesList from '../components/cities-list';
import PlacesToVisit from '../components/places-to-visit';
import { getOffers, getSelectedCity } from '../store';
import { useAppSelector } from '../hooks';
import { useMemo } from 'react';

function MainScreen(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const offers = useAppSelector(getOffers);
  const offersByCity = useMemo(
    () => offers.filter((offer) => offer.city.name === selectedCity),
    [offers, selectedCity]
  );

  return (
    <main
      className={cn('page__main page__main--index', {
        'page__main--index-empty': offersByCity.length === 0,
      })}
    >
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList selectedCity={selectedCity} />
      <PlacesToVisit offers={offersByCity} />
    </main>
  );
}

export default MainScreen;
