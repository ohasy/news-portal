import { Layout } from '@/components/Layout/Layout';
import { NewsList } from '@/components/NewsList/NewsList';

export const Home = () => {
  return (
    <Layout>
      <NewsList />
    </Layout>
  );
};
