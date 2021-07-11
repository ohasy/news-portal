import { searchNews, setQuery } from '@/store/actions';
import debounce from '@/utils/debounce';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/useAppSelector';
import { ReactChangeEvent } from '@/utils/types';
import { useLocation, useHistory } from 'react-router-dom';
// type SearchTextProps = {
//   onSearch: (newQuery: string) => void;
//   query: string;
// };
import './SearchText.scss';

export const SearchText = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
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
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={onSearchEvent}
        placeholder="Search text here"
      />
    </div>
  );
};
