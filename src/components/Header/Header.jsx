import React from "react";
import style from './Header.module.sass';
import logo from '../../images/logo.svg';
import {NavLink} from "react-router-dom"; // with import

const Header = (props) => {
  return (
      <header className={style.header}>
          <div className={style.logo}>
              <img src={logo} alt="logo"/>
          </div>
          <div className={style.login}>
              {props.isAuth ? props.login : <NavLink to={'/login'}>'login'}</NavLink>}
          </div>
      </header>
  );
}

export default Header;