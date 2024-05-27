import { memo, useState } from 'react';
import cn from 'classnames';
import { ListSortingType } from '../const';
import { changeSortingType, getSelectedSortType } from '../store';
import { useAppDispatch, useAppSelector } from '../hooks';

function SortingBlock() {
  const [isOpened, setIsOpened] = useState(false);
  const selectedSortType = useAppSelector(getSelectedSortType);
  const dispatch = useAppDispatch();

  const toggleSortingOptions = () => setIsOpened((prevState) => !prevState);

  const handleSortTypeChange = (sortType: ListSortingType) => {
    dispatch(changeSortingType(sortType));
    setIsOpened(false);
  };

  const sortingOptionsClass = cn('places__options', 'places__options--custom', {
    'places__options--opened': isOpened,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleSortingOptions}
      >
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={sortingOptionsClass}>
        {Object.entries(ListSortingType).map(([sortType, title]) => (
          <li
            key={title}
            className={cn('places__option', {
              'places__option--active':
                selectedSortType === (sortType as ListSortingType),
            })}
            onClick={() => handleSortTypeChange(title as ListSortingType)}
            tabIndex={0}
          >
            {title}
          </li>
        ))}
      </ul>
    </form>
  );
}

const SortingBlockMemo = memo(SortingBlock);

export default SortingBlockMemo;
