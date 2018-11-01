/**
* 作者：TXK
* @format
* @flow
* Layout布局方式
* Header表示头部
* Row创建行
* Col行元素 宽度总共24
* md 正常显示
* xs 小屏显示
* Divider分割线
* Menu 菜单
* Link 跳转组件
* Icon 图标组件
*/
import React,{ Component} from 'react';
import { Layout, Row, Col, Divider,Dropdown,Button, Icon} from "antd";
import Nav from './nav'
export default class MainHeader extends Component{
    render() {
        const menu = <Nav mode="vertical" id="xsNav"/>
        return (
            <Layout.Header>
                <Row className="warp">
                    <Col md={6} xs={24}>
                        <h1 id="logo">cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" className="headerDiveider"/>
                        <Nav mode="horizontal" id="nav" />
                    </Col>
                    <Col md={0} xs={24} className="xsWarp">
                        <Dropdown 
                            overlay={menu}
                            trigger ={["click"]}
                            placement="bottomRight" >
                            <Button><Icon type="bars"></Icon></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
}