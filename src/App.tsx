import React  from 'react';
import styles from './App.module.css';

export interface Props {
  children: React.ReactNode; 
}
const App = (props: Props) => (
    <div className={styles.App}>
      {props.children}
    </div>
  )

export default App
