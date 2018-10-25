/**
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import {Menu,Icon} from  'antd'
import { Link } from 'react-router-dom'
export default class Nav extends Component{
    render() {
        let{ mode, id } = this.props;
        return (
            <Menu mode={mode} id={id}>
                <Menu.Item key="1">
                    <Link to="/index">
                        <Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/book">
                        <Icon type="book" />教程</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/about">
                        <Icon type="info-circle" />关于</Link>
                </Menu.Item>
            </Menu>
        );
    }
}