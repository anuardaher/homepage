// @flow strict
import React from 'react';
import AniLink  from "gatsby-plugin-transition-link/AniLink";
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <AniLink
            fade
            duration={0.5}
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </AniLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
