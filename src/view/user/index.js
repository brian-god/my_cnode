/**
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import {Card,Avatar,Row,Col} from 'antd'
import UserList from './userList'
import {connect} from 'react-redux'
import axios from 'axios'
class User extends Component{
    constructor(arg){
        super(arg)
        this.getData(this.props.match.params.id)
    }
    shouldComponentUpdate(nextprops){  
        let oldid = this.props.match.params.id

        let nextId = nextprops.match.params.id
        if (oldid !== nextId){
            this.getData(nextId)
            return false
        }
        return true
    }
    getData(loginname){
        this.props.dispatch((dispatch) => {
            dispatch({
                type: "USER_UPDATE"
            })
            axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
                .then((rps) => {
                    dispatch({
                        type: "USER_UPDATE_SUCC",
                        data: rps.data
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: "USER_UPDATE_ERRPR",
                        data:error
                    })
                })
        })
    }
    render() {
        let {data,loding} = this.props
        let { avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data
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
                    创建时间：<a>{create_at == null ? "" : create_at.split("T")[0]}</a>
                        </Col>
                    </Row>
                    </div>
        return (
            <div className="warp">
                <Card
                 title={title}
                >
                    <UserList
                        loding={loding}
                    title="最近创建话题"
                    data ={recent_topics}
                    />
                    <UserList
                        loding={loding}
                    title="最近回复话题"
                    data={recent_replies}
                    />
                </Card>
            </div>
        );
    }
}
export default connect(state=>state.user) (User)