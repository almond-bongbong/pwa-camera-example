import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'

function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <NavLink to="/camera">Camera 11</NavLink>
    </header>
  );
}

export default Header;
