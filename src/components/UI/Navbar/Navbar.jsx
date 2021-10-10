import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../../router/routes';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarItems}>
        <Link to="/profile">
          <img src={logo} alt="logo" className={styles.navbarLogo} />
        </Link>

        {routes.map((route) => (
          <NavLink
            activeClassName={styles.navbarItemActive}
            to={route.path}
            className={styles.navbarItem}
            key={route.path}
          >
            {route.link}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
