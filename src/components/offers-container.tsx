import { Offer } from '../types/offer.ts';
import EmptyOffers from './empty-offers.tsx';
import AvailableOffers from './available-offers.tsx';

interface OffersContainerProps {
  offers: Offer[];
  handleCardMouseEnter: (id: Offer['id']) => void;
  handleCardMouseLeave: () => void;
}

function OffersContainer({
  offers,
  handleCardMouseEnter,
  handleCardMouseLeave,
}: OffersContainerProps): JSX.Element {
  const noPlacesAvailable = offers.length === 0;

  return noPlacesAvailable ? (
    <EmptyOffers />
  ) : (
    <AvailableOffers
      offers={offers}
      handleCardMouseEnter={handleCardMouseEnter}
      handleCardMouseLeave={handleCardMouseLeave}
    />
  );
}

export default OffersContainer;
