import React from "react";
import style from './Sidebar.module.sass';

const Sidebar = () => {
  return (
      <aside className={style.sidebar}>
          <nav>
              <ul className={style.list}>
                  <li>
                      <a href="#">Profile</a>
                  </li>
                  <li>
                      <a href="#">Messages</a>
                  </li>
                  <li>
                      <a href="#">News</a>
                  </li>
                  <li>
                      <a href="#">Music</a>
                  </li>
                  <li>
                      <a href="#">Settings</a>
                  </li>
              </ul>
          </nav>
      </aside>
  );
}

export default Sidebar;
