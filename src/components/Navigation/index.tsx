import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavLink className={(navData) => (navData.isActive ? `${styles.active}` : '')} to="/">Начало </NavLink>
      <NavLink className={(navData) => (navData.isActive ? `${styles.active}` : '')} to="/gallery">Галерия </NavLink>
      <NavLink className={(navData) => (navData.isActive ? `${styles.active}` : '')} to="/contacts">Контакти </NavLink>
    </div>
  );
}
export default Navigation;
