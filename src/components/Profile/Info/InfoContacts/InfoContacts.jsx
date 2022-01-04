import React from "react";
import style from './InfoContacts.module.sass';

const InfoContacts = (props) => {
    return (
        <ul className={style.contacts}>
            {props.facebook &&
                <li className={style.item}>
                    <a href={props.facebook} className={style.link} target='_blank'>
                        Facebook
                    </a>
                </li> }
            {props.github &&
            <li className={style.item}>
                    <a href={props.github} className={style.link} target='_blank'>
                        Github
                    </a>
                </li>
            }
            {props.instagram &&
            <li className={style.item}>
                    <a href={props.instagram} className={style.link} target='_blank'>
                        instagram
                    </a>
                </li>
            }
            {props.twitter &&
            <li className={style.item}>
                    <a href={props.twitter} className={style.link} target='_blank'>
                        twitter
                    </a>
                </li>
            }
            {props.vk &&
            <li className={style.item}>
                    <a href={props.vk} className={style.link} target='_blank'>
                        vk
                    </a>
                </li>
            }
            {props.website &&
            <li className={style.item}>
                    <a href={props.website} className={style.link} target='_blank'>
                        website
                    </a>
                </li>
            }
            {props.youtube &&
            <li className={style.item}>
                    <a href={props.youtube} className={style.link} target='_blank'>
                        youtube
                    </a>
                </li>
            }
        </ul>
    );
}

export default InfoContacts;