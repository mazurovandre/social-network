import React from "react";
import style from './Sidebar.module.sass';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
      <aside className={style.sidebar}>
          <nav>
              <ul className={style.list}>
                  <li className={style.item}>
                      <NavLink to="/" className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Профиль</NavLink>
                  </li>
                  <li className={style.item}>
                      <NavLink to="/dialogs" className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Сообщения</NavLink>
                  </li>
                  <li className={style.item}>
                      <NavLink to="/news" className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Новости</NavLink>
                  </li>
                  <li className={style.item}>
                      <NavLink to="/music" className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Музыка</NavLink>
                  </li>
                  <li className={style.item}>
                      <NavLink to="/settings" className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Настройки</NavLink>
                  </li>
              </ul>
          </nav>
      </aside>
  );
}

export default Sidebar;
