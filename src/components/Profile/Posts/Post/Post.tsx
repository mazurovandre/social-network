import React, {FC} from "react";
import style from './Post.module.sass';
import img from "../../../../images/avatar.jpg"
import {LikeFilled, LikeOutlined} from "@ant-design/icons/lib/icons";

type PostType = {
    index: number
    message: string
    likesCount: number
    isLiked: boolean
    toggleLike: (index: number) => void
}

const Post:FC<PostType> = ({message, likesCount, toggleLike, index, isLiked}) => {

    return (
        <li className={style.post} tabIndex={0}>
            <div className={style.avatar}>
                <img src={img} alt="avatar"/>
            </div>
            <p className={style.text}>{message}</p>
            <div className={style.likes}>
                <div onClick={() => toggleLike(index)}>
                    {isLiked ? <LikeFilled className={style.like} />
                        : <LikeOutlined className={style.like}/>}
                </div>
            <p className={style.count}>{likesCount}</p>
            </div>
        </li>
    );
}

export default Post;