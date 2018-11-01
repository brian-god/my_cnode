/**
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import data from './data'
import {Card,Avatar,Row,Col} from 'antd'
import UserList from './userList'
export default class User extends Component{
    render() {
        let { avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data.data
        let title = <div className="userCardTitle">
                    <Avatar 
                    className="userAvater"
                    src={avatar_url} />
                    <Row className="userInfo">
                        <Col md={8}>
                        用户名：<a>{loginname}</a>
                        </Col>
                        <Col md={8}>
                        积分：<a>{score}</a>
                        </Col>
                        <Col md={8}>
                        创建时间：<a>{create_at.split("T")[0]}</a>
                        </Col>
                    </Row>
                    </div>
        return (
            <div className="warp">
                <Card
                 title={title}
                >
                    <UserList
                    loding={false}
                    title="最近创建话题"
                    data ={recent_topics}
                    />
                    <UserList
                    loding={false}
                    title="最近回复话题"
                    data={recent_replies}
                    />
                </Card>
            </div>
        );
    }
}