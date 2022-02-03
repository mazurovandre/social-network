import React, {FC} from "react";
import style from './Header.module.sass';
import logo from '../../images/logo.svg';
import {NavLink} from "react-router-dom"; // with import
import {HeaderProps} from './HeaderContainer'
import Button from "antd/lib/button/button";
import Sidebar from "./Sidebar/Sidebar";

const Header:FC<HeaderProps> = ({login, isAuth, logoutThunk}) => {
  return (
      <div className={style.header}>
          <div className={style.logo}>
              <img src={logo} alt="logo"/>
          </div>
          <Sidebar />
          <div className={style.login}>
              {isAuth
                  ? <><h6 className={style.login_user}>{login}</h6> <Button onClick={logoutThunk}>Logout</Button></>
                  : <NavLink to={'/login'}>Login</NavLink>}
          </div>
      </div>
  );
}

export default Header;