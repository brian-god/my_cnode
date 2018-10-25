/**
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import {Menu,Row,Col} from 'antd'
import {Link} from 'react-router-dom'
import './../../static/index.css'
export default class Index extends Component{
    render() {
        const arr =[]
        for(let i=0;i<50;i++){
            arr.push(<li>这是第{i}个li</li>);
        }
        return (
            <Row className="warp">
                <Col md={6}>
                    <Menu id="indexMenu">
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/dev">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={18} id="indexList">{arr}</Col>
            </Row>
        );
    }
}