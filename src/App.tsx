import React  from 'react';

import styles from './App.module.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
export interface Props {
  children: React.ReactNode; 
}
const App = (props: Props) => (
  // <I18nextProvider i18n={i18n}>
    <div className={styles.App}>
      {props.children}
    </div>
    // </I18nextProvider>
  )

export default App
