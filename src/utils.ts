import { ListSortingType } from './const';
import { Offer } from './types/offer';

export const capitalizeFirstLetter = (word: string) => {
  if (word.length === 0) {
    return word;
  }
  const trimmed = word.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

export const formatRating = (rate: number) => `${(rate / 5) * 100}%`;

export const sortOfferFunction: Record<
  ListSortingType,
  (offers: Readonly<Offer[]>) => Offer[]
> = {
  [ListSortingType.Popularity]: (offers) => [...offers],
  [ListSortingType.IncreasingPrice]: (offers) =>
    [...offers].sort((a, b) => a.price - b.price),
  [ListSortingType.DecreasingPrice]: (offers) =>
    [...offers].sort((a, b) => b.price - a.price),
  [ListSortingType.Rating]: (offers) =>
    [...offers].sort((a, b) => b.rating - a.rating),
};
