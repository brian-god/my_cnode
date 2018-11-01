/**
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import {Card,List,Avatar,Row,Col} from 'antd'
import {Link} from 'react-router-dom'
export default class UserList extends Component{
    render() {
        let { loding, title,data} = this.props
        console.log(data)
        return (
            <Card
            loading={loding}
            title={title}
            type="inner"
            >
            <List
            dataSource={data}
            renderItem={(item)=>(
                <List.Item
                    key={item.id}>
                    <Avatar src={item.author.avatar_url}/>
                    <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                    <h4><Link to={"/details/" + item.id}>{item.title}</Link></h4>
                    <time>最后回复时间：{item.last_reply_at.split("T")[0]}</time>
                </List.Item>
            )}
            >
            </List>
            </Card>
        );
    }
}