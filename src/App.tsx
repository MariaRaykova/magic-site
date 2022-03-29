import React, { FC } from 'react';
import Layout from './pages/Layout/Layout';
import styles from './App.module.css';


export interface Props {
  children: React.ReactNode;
}
const App: FC<Props> = ({ children }) => (
  <div className={styles.App}>
    <Layout>
      {children}
    </Layout>
  </div>
);

export default App;
