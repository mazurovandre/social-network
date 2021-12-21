import React from "react";
import style from './Header.module.sass';
import logo from '../../images/logo.svg'; // with import

const Header = () => {
  return (
      <header className={style.header}>
          <div className={style.logo}>
              <img src={logo} alt="logo"/>
          </div>
      </header>
  );
}

export default Header;