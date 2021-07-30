import { Layout } from '@/components/Layout/Layout';
import { NewsList } from '@/components/NewsList/NewsList';
import { getTopHeadlines } from '@/store/actions';
import { useAppDispatch } from '@/utils/hooks/useAppSelector';
import { useEffect } from 'react';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopHeadlines());
  }, []);
  return (
    <Layout>
      <NewsList />
    </Layout>
  );
};
