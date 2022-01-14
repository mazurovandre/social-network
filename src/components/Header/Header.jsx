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
              {props.isAuth
                  ? <div className={style.login_user}> {props.login} <button onClick={props.logoutThunk}>Logout</button></div>
                  : <NavLink to={'/login'}>Login</NavLink>}
          </div>
      </header>
  );
}

export default Header;