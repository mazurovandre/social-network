import React, {FC} from 'react';
import {Avatar, List} from "antd";
import avatar from "../../../images/avatar.jpg";
import Button from 'antd/es/button';

const UsersList: FC<any> = ({users}) => {
    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(item: any) => (
                <List.Item actions={[
                    <Button type='primary'>Follow</Button>
                ]}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.photos.small !== null ? item.photos.small : avatar}/>}
                        title={item.name}
                        description={item.status}
                    />
                </List.Item>
            )}
        />
    );
};

export default UsersList;