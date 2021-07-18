import { searchNews, setQuery } from '@/store/actions';
import { AppDispatch } from '@/store/store';
import debounce from '@/utils/debounce';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/useAppSelector';
import { ReactChangeEvent } from '@/utils/types';
import { useLocation, useHistory } from 'react-router-dom';
// type SearchTextProps = {
//   onSearch: (newQuery: string) => void;
//   query: string;
// };
import styles from './SearchText.module.scss';

const SearchText = () => {
  const location = useLocation();
  const history = useHistory();

  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.news.query);

  const onSearchEvent = (e: ReactChangeEvent) => {
    const newQuery = e?.target.value;
    dispatch(setQuery(newQuery));
    if (newQuery.length >= 2) {
      if (location.pathname !== '/') history.replace('/');
      debounce(() => dispatch(searchNews(newQuery)), 1000)();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={onSearchEvent}
        placeholder="Search text here"
      />
    </div>
  );
};

export default SearchText;
