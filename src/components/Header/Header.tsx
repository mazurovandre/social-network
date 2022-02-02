import React, {FC} from "react";
import style from './Header.module.sass';
import logo from '../../images/logo.svg';
import {NavLink} from "react-router-dom"; // with import
import {HeaderProps} from './HeaderContainer'

const Header:FC<HeaderProps> = ({login, isAuth, logoutThunk}) => {
  return (
      <header className={style.header}>
          <div className={style.logo}>
              <img src={logo} alt="logo"/>
          </div>
          <div className={style.login}>
              {isAuth
                  ? <div className={style.login_user}> {login} <button onClick={logoutThunk}>Logout</button></div>
                  : <NavLink to={'/login'}>Login</NavLink>}
          </div>
      </header>
  );
}

export default Header;