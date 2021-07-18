import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SearchText from '@/components/SearchText/SearchText';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  fullWidth = false,
}) => {
  const classNames = fullWidth ? '' : styles.centeredLayout;
  return (
    <>
      <Header>
        <SearchText />
      </Header>
      <div className={classNames}>
        <div className={styles.layoutChildrenWrapper}>{children}</div>
      </div>
      <Footer />
    </>
  );
};
