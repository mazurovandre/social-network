import React from "react";
import style from './Dialogs.module.sass';
import avatar from '../../images/avatar.jpg'

const Dialogs = () => {
  return (
      <div className={style.dialogs}>
          <div className={style.people}>
              <h4 className={style.title}>Контакты:</h4>
              <ul className={style.people_list}>
                  <li className={style.name}>Андрей</li>
                  <li className={style.name}>Михаил</li>
                  <li className={style.name}>Игорь</li>
                  <li className={style.name}>Елена</li>
                  <li className={style.name}>Екатерина</li>
                  <li className={style.name}>Дмитрий</li>
                  <li className={style.name}>Ольга</li>
              </ul>
          </div>
          <div className={style.messages}>
              <h4 className={style.title}>Сообщения:</h4>
              <ul className={style.messages_list}>
                  <li className={style.message}>
                      <img className={style.avatar} src={avatar} alt="avatar"/>
                      <div>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, optio.</p>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae.</p>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae.</p>
                      </div>
                  </li>
                  <li className={style.message}>
                      <img className={style.avatar} src={avatar} alt="avatar"/>
                      <div>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, optio.</p>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae.</p>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae.</p>
                      </div>
                  </li>
                  <li className={style.message}>
                      <img className={style.avatar} src={avatar} alt="avatar"/>
                      <div>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, optio.</p>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae.</p>
                          <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quae.</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  );
}

export default Dialogs;