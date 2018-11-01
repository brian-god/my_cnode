/**
* Sample React
* 作者：Hugo
* LList 列表
* loading 加载动画
* dataSource 展示数据
* renderItem 子项元素
* List.Item 列表子集
* actions 子项右侧元素
* List.Item.Meta 子项左侧内容框
* 列表项
* avatar 图片元素
* title 标题
* description 描述
* connect :包装函数对组件进行包装
* @format
* @flow
*/
import React, { Component } from 'react'
import {List,Avatar} from 'antd'
import {Link} from 'react-router-dom'
import data from './data'
import TxtTag from '../txtTag'
import {connect} from 'react-redux'
class IndexList extends Component {
  constructor(arg){
    super(arg);
    let {tab} = this.props
    this.state={
      tab:tab,
      page:1
    }
  }
  render() {
    let {loading,data} = this.props
    console.log(this.props)
    return <List
          loading={loading}
          dataSource={data}
          renderItem={item=>(<List.Item
            actions={["回复:"+item.reply_count,"访问:"+item.visit_count]}
            key={item.id}>
            <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url}/>}
              title={<div><TxtTag data={item}/><Link to={"/details/" + item.id}>{item.title}</Link></div>}
            description={
              <p>
                <Link className="authorMargin" 
                to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                发表于:{item.create_at.split("T")[0]}
              </p>
            }>
            </List.Item.Meta>
          </List.Item>)}>
          </List>;
  }
}
export default connect(state=>state.list) (IndexList)