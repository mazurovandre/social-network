import React, {FC} from "react";
import style from './Preloader.module.sass';
import gif from "../../../images/preloader.gif";

const Preloader:FC = () => {
    return (
        <div className={style.container}>
            <img className={style.preloader} src={gif} alt='preloader'/>
        </div>
    );
};

export default Preloader;