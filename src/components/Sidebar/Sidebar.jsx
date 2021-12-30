import React from "react";
import style from './Sidebar.module.sass';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    const friends = props.friends.map(friend => {
        return ( <li className={style.friends_item} key={friend.id}>
            <img src={friend.avatar} alt="ava" width='60' height='60'/>
            <h6 className={style.name}>{friend.name}</h6>
        </li>)
    });

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
                  <li className={style.item}>
                      <NavLink to="/users" className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Найти людей</NavLink>
                  </li>
              </ul>
              <div className={style.friends}>
                  <h4 className={style.title}>Друзья онлайн:</h4>
                  <ul className={style.friends_list}>
                      {friends}
                  </ul>
              </div>
          </nav>
      </aside>
  );
}

export default Sidebar;

