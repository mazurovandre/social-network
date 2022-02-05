import React, {FC} from 'react';
import {Avatar, List} from "antd";
import avatar from "../../../images/avatar.jpg";
import Button from 'antd/es/button';
import style from './UsersList.module.sass';
import {NavLink} from "react-router-dom";
import {UserType} from "../../../types/types";

type UsersListPropsType = {
    users: Array<UserType>
    toggleFollowUser: (id: number, isFollow: boolean) => void
    followingUsers: Array<number>
}

const UsersList: FC<UsersListPropsType> = ({users, toggleFollowUser, followingUsers}) => {
    return (
        <List
            dataSource={users}
            renderItem={(item: UserType) => (
                <List.Item className={style.item} actions={[
                    <Button type='primary' disabled={followingUsers.some((id: number) => item.id === id)}
                            onClick={() => toggleFollowUser(item.id, !item.followed)}
                    >{item.followed ? 'Unfollow' : 'Follow'}</Button>
                ]}>
                    <List.Item.Meta
                        avatar={<NavLink to={`/profile/${item.id}`}>
                                <Avatar className={style.avatar} src={item.photos.small !== null ? item.photos.small : avatar}/>
                            </NavLink>}
                        title={<NavLink to={`/profile/${item.id}`}>{item.name}</NavLink>}
                        description={item.status}
                    />
                </List.Item>
            )}
        />
    );
};

export default UsersList;