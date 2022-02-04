import React, {FC, useState} from "react";
import style from './Post.module.sass';
import img from "../../../../images/avatar.jpg"
import {LikeFilled, LikeOutlined} from "@ant-design/icons/lib/icons";

type PostType = {
    index: number,
    message: string,
    likesCount: number,
    setLike: (index: number, isLike: boolean) => void
}

const Post:FC<PostType> = ({message, likesCount, setLike, index}) => {

    const [isLiked, setIsLiked] = useState(false)

    const onClick = () => {
        if (isLiked) {
            setIsLiked(false)
            setLike(index, false)
        } else {
            setIsLiked(true)
            setLike(index, true)
        }
    }

    return (
        <li className={style.post} tabIndex={0}>
            <div className={style.avatar}>
                <img src={img} alt="avatar"/>
            </div>
            <p className={style.text}>{message}</p>
            <div className={style.likes}>
                <div onClick={onClick}>
                    {isLiked ? <LikeFilled className={style.like} />
                        : <LikeOutlined className={style.like}/>}
                </div>
            <p className={style.count}>{likesCount}</p>
            </div>
        </li>
    );
}

export default Post;