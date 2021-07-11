import { Layout } from '@/components/Layout/Layout';
import React from 'react';
import { useParams } from 'react-router-dom';

export const Article: React.FC = () => {
  const { url }: any = useParams();

  console.log(url);
  return (
    <Layout fullWidth>
      <iframe
        title="article view"
        src={decodeURIComponent(url)}
        height={'900px'}
        width={'100%'}
      />
    </Layout>
  );
};
