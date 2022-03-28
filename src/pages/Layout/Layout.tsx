import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from './Layout.module.css';

const Layout = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
