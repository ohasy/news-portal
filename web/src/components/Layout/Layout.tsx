import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SearchText from '@/components/SearchText/SearchText';
import styles from './Layout.module.scss';
import { getTopHeadlines } from '@/store/actions';
import { useAppDispatch } from '@/utils/hooks/useAppSelector';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  fullWidth = false,
}) => {
  const dispatch = useAppDispatch();

  const [country, setCountry] = useState('us');

  const classNames = fullWidth ? '' : styles.centeredLayout;

  const onSelectCountry = (e: any) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
    dispatch(getTopHeadlines(newCountry));
  };
  return (
    <>
      <Header>
        <SearchText />
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select onChange={onSelectCountry} value={country}>
          <option value="us">US</option>
          <option value="in">IND</option>
          <option value="gb">UK</option>
        </select>
      </Header>
      <div className={classNames}>
        <div className={styles.layoutChildrenWrapper}>{children}</div>
      </div>
      <Footer />
    </>
  );
};
